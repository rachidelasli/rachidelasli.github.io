H5P.MarkTheWords=(function($,Question,Word,KeyboardNav,XapiGenerator){function MarkTheWords(params,contentId,contentData){var self=this;this.contentId=contentId;this.contentData=contentData;this.introductionId='mark-the-words-introduction-'+contentId;Question.call(this,'mark-the-words');this.params=$.extend(true,{taskDescription:"",textField:"This is a *nice*, *flexible* content type.",overallFeedback:[],behaviour:{enableRetry:true,enableSolutionsButton:true,enableCheckButton:true,showScorePoints:true},checkAnswerButton:"Check",tryAgainButton:"Retry",showSolutionButton:"Show solution",correctAnswer:"Correct!",incorrectAnswer:"Incorrect!",missedAnswer:"Answer not found!",displaySolutionDescription:"Task is updated to contain the solution.",scoreBarLabel:'You got :num out of :total points',a11yFullTextLabel:'Full readable text',a11yClickableTextLabel:'Full text where words can be marked',a11ySolutionModeHeader:'Solution mode',a11yCheckingHeader:'Checking mode',},params);this.contentData=contentData;if(this.contentData!==undefined&&this.contentData.previousState!==undefined){this.previousState=this.contentData.previousState;}
this.keyboardNavigators=[];this.initMarkTheWords();this.XapiGenerator=new XapiGenerator(this);}
MarkTheWords.prototype=Object.create(H5P.EventDispatcher.prototype);MarkTheWords.prototype.constructor=MarkTheWords;MarkTheWords.prototype.initMarkTheWords=function(){this.$inner=$('<div class="h5p-word-inner"></div>');this.addTaskTo(this.$inner);this.setH5PUserState();};MarkTheWords.prototype.createHtmlForWords=function(nodes){var self=this;var html='';for(var i=0;i<nodes.length;i++){var node=nodes[i];if(node instanceof Text){var text=$(node).text();var selectableStrings=text.replace(/(&nbsp;|\r\n|\n|\r)/g,' ').match(/ \*[^\*]+\* |[^\s]+/g);if(selectableStrings){selectableStrings.forEach(function(entry){entry=entry.trim();if(html){html+=' ';}
var prefix=entry.match(/^[\[\({⟨¿¡“"«„]+/);var start=0;if(prefix!==null){start=prefix[0].length;html+=prefix;}
var suffix=entry.match(/[",….:;?!\]\)}⟩»”]+$/);var end=entry.length-start;if(suffix!==null){end-=suffix[0].length;}
entry=entry.substr(start,end);if(entry.length){html+='<span role="option" aria-selected="false">'+self.escapeHTML(entry)+'</span>';}
if(suffix!==null){html+=suffix;}});}
else if((selectableStrings!==null)&&text.length){html+='<span role="option" aria-selected="false">'+this.escapeHTML(text)+'</span>';}}
else{if(node.nodeName==='BR'){html+='<br/>';}
else{var attributes=' ';for(var j=0;j<node.attributes.length;j++){attributes+=node.attributes[j].name+'="'+node.attributes[j].nodeValue+'" ';}
html+='<'+node.nodeName+attributes+'>';html+=self.createHtmlForWords(node.childNodes);html+='</'+node.nodeName+'>';}}}
return html;};MarkTheWords.prototype.escapeHTML=function(html){return $('<div>').text(html).html();};MarkTheWords.prototype.getIndexesOfLineBreaks=function(){var indexes=[];var selectables=this.$wordContainer.find('span.h5p-word-selectable');selectables.each(function(index,selectable){if($(selectable).next().is('br')){indexes.push(index);}
if($(selectable).parent('p')&&!$(selectable).parent().is(':last-child')&&$(selectable).is(':last-child')){indexes.push(index);}});return indexes;};MarkTheWords.prototype.addTaskTo=function($container){var self=this;self.selectableWords=[];self.answers=0;var $wordContainer=$('<div/>',{'class':'h5p-word-selectable-words','aria-labelledby':self.introductionId,'aria-multiselectable':'true','role':'listbox',html:self.createHtmlForWords($.parseHTML(self.params.textField))});let isNewParagraph=true;$wordContainer.find('[role="option"], br').each(function(){if($(this).is('br')){isNewParagraph=true;return;}
if(isNewParagraph){self.currentKeyboardNavigator=new KeyboardNav();self.currentKeyboardNavigator.on('select',function(){self.isAnswered=true;self.triggerXAPI('interacted');});self.keyboardNavigators.push(self.currentKeyboardNavigator);isNewParagraph=false;}
self.currentKeyboardNavigator.addElement(this);var selectableWord=new Word($(this),self.params);if(selectableWord.isAnswer()){self.answers+=1;}
self.selectableWords.push(selectableWord);});self.blankIsCorrect=(self.answers===0);if(self.blankIsCorrect){self.answers=1;}
const $ariaTextWrapper=$('<div>',{'class':'hidden-but-read',}).appendTo($container);$('<div>',{html:self.params.a11yFullTextLabel,}).appendTo($ariaTextWrapper);const ariaText=$('<div>',{'html':$wordContainer.html().replace('</p>',' </p>'),}).text();$('<div>',{text:ariaText,}).appendTo($ariaTextWrapper);this.$a11yClickableTextLabel=$('<div>',{'class':'hidden-but-read',html:self.params.a11yClickableTextLabel,tabIndex:'-1',}).appendTo($container);$wordContainer.appendTo($container);self.$wordContainer=$wordContainer;};MarkTheWords.prototype.addButtons=function(){var self=this;self.$buttonContainer=$('<div/>',{'class':'h5p-button-bar'});if(this.params.behaviour.enableCheckButton){this.addButton('check-answer',this.params.checkAnswerButton,function(){self.isAnswered=true;var answers=self.calculateScore();self.feedbackSelectedWords();if(!self.showEvaluation(answers)){if(self.params.behaviour.enableSolutionsButton&&(answers.correct<self.answers)){self.showButton('show-solution');}
if(self.params.behaviour.enableRetry){self.showButton('try-again');}}
self.$a11yClickableTextLabel.html(self.params.a11yCheckingHeader+' - '+self.params.a11yClickableTextLabel);self.$a11yClickableTextLabel.focus();self.hideButton('check-answer');self.trigger(self.XapiGenerator.generateAnsweredEvent());self.toggleSelectable(true);});}
this.addButton('try-again',this.params.tryAgainButton,this.resetTask.bind(this),false);this.addButton('show-solution',this.params.showSolutionButton,function(){self.setAllMarks();self.$a11yClickableTextLabel.html(self.params.a11ySolutionModeHeader+' - '+self.params.a11yClickableTextLabel);self.$a11yClickableTextLabel.focus();if(self.params.behaviour.enableRetry){self.showButton('try-again');}
self.hideButton('check-answer');self.hideButton('show-solution');self.read(self.params.displaySolutionDescription);self.toggleSelectable(true);},false);};MarkTheWords.prototype.toggleSelectable=function(disable){this.keyboardNavigators.forEach(function(navigator){if(disable){navigator.disableSelectability();navigator.removeAllTabbable();}
else{navigator.enableSelectability();navigator.setTabbableAt((0));}});if(disable){this.$wordContainer.removeAttr('aria-multiselectable').removeAttr('role');}
else{this.$wordContainer.attr('aria-multiselectable','true').attr('role','listbox');}};MarkTheWords.prototype.getXAPIData=function(){return{statement:this.XapiGenerator.generateAnsweredEvent().data.statement};};MarkTheWords.prototype.setAllMarks=function(){this.selectableWords.forEach(function(entry){entry.markCheck();entry.clearScorePoint();});this.trigger('resize');};MarkTheWords.prototype.feedbackSelectedWords=function(){var self=this;var scorePoints;if(self.params.behaviour.showScorePoints){scorePoints=new H5P.Question.ScorePoints();}
this.selectableWords.forEach(function(entry){if(entry.isSelected()){entry.markCheck(scorePoints);}});this.$wordContainer.addClass('h5p-disable-hover');this.trigger('resize');};MarkTheWords.prototype.showEvaluation=function(answers){this.hideEvaluation();var score=answers.score;var scoreText=H5P.Question.determineOverallFeedback(this.params.overallFeedback,score/this.answers).replace(/@score/g,score.toString()).replace(/@total/g,this.answers.toString()).replace(/@correct/g,answers.correct.toString()).replace(/@wrong/g,answers.wrong.toString()).replace(/@missed/g,answers.missed.toString());this.setFeedback(scoreText,score,this.answers,this.params.scoreBarLabel);this.trigger('resize');return score===this.answers;};MarkTheWords.prototype.hideEvaluation=function(){this.removeFeedback();this.trigger('resize');};MarkTheWords.prototype.calculateScore=function(){var self=this;var initial={correct:0,wrong:0,missed:0,score:0};var answers=self.selectableWords.reduce(function(result,word){if(word.isCorrect()){result.correct++;}
else if(word.isWrong()){result.wrong++;}
else if(word.isMissed()){result.missed++;}
return result;},initial);if(answers.wrong===0&&self.blankIsCorrect){answers.correct=1;}
answers.score=Math.max(answers.correct-answers.wrong,0);return answers;};MarkTheWords.prototype.clearAllMarks=function(){this.selectableWords.forEach(function(entry){entry.markClear();});this.$wordContainer.removeClass('h5p-disable-hover');this.trigger('resize');};MarkTheWords.prototype.getAnswerGiven=function(){return this.blankIsCorrect?true:this.isAnswered;};MarkTheWords.prototype.getScore=function(){return this.calculateScore().score;};MarkTheWords.prototype.getMaxScore=function(){return this.answers;};MarkTheWords.prototype.getTitle=function(){return H5P.createTitle((this.contentData&&this.contentData.metadata&&this.contentData.metadata.title)?this.contentData.metadata.title:'Mark the Words');};MarkTheWords.prototype.showSolutions=function(){var answers=this.calculateScore();this.showEvaluation(answers);this.setAllMarks();this.read(this.params.displaySolutionDescription);this.hideButton('try-again');this.hideButton('show-solution');this.hideButton('check-answer');this.$a11yClickableTextLabel.html(this.params.a11ySolutionModeHeader+' - '+this.params.a11yClickableTextLabel);this.toggleSelectable(true);this.trigger('resize');};MarkTheWords.prototype.resetTask=function(){this.isAnswered=false;this.clearAllMarks();this.hideEvaluation();this.hideButton('try-again');this.hideButton('show-solution');this.showButton('check-answer');this.$a11yClickableTextLabel.html(this.params.a11yClickableTextLabel);this.toggleSelectable(false);this.trigger('resize');};MarkTheWords.prototype.getCurrentState=function(){var selectedWordsIndexes=[];if(this.selectableWords===undefined){return undefined;}
this.selectableWords.forEach(function(selectableWord,swIndex){if(selectableWord.isSelected()){selectedWordsIndexes.push(swIndex);}});return selectedWordsIndexes;};MarkTheWords.prototype.setH5PUserState=function(){var self=this;if(this.previousState===undefined||this.previousState.length===undefined){return;}
this.previousState.forEach(function(answeredWordIndex){if(isNaN(answeredWordIndex)||answeredWordIndex>=self.selectableWords.length||answeredWordIndex<0){throw new Error('Stored user state is invalid');}
self.selectableWords[answeredWordIndex].setSelected();});};MarkTheWords.prototype.registerDomElements=function(){var introduction='<div id="'+this.introductionId+'">'+this.params.taskDescription+'</div>';this.setIntroduction(introduction);this.createDescriptionsDom().appendTo(this.$inner);this.setContent(this.$inner,{'class':'h5p-word'});this.addButtons();};MarkTheWords.prototype.createDescriptionsDom=function(){var self=this;var $el=$('<div class="h5p-mark-the-words-descriptions"></div>');$('<div id="'+Word.ID_MARK_CORRECT+'">'+self.params.correctAnswer+'</div>').appendTo($el);$('<div id="'+Word.ID_MARK_INCORRECT+'">'+self.params.incorrectAnswer+'</div>').appendTo($el);$('<div id="'+Word.ID_MARK_MISSED+'">'+self.params.missedAnswer+'</div>').appendTo($el);return $el;};return MarkTheWords;}(H5P.jQuery,H5P.Question,H5P.MarkTheWords.Word,H5P.KeyboardNav,H5P.MarkTheWords.XapiGenerator));