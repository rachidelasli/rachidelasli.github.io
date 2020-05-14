var H5P=H5P||{};H5P.JoubelUI=(function($){function JoubelUI(){}
JoubelUI.createTip=function(text,params){return new H5P.JoubelTip(text,params);};JoubelUI.createMessageDialog=function($container,message){return new H5P.JoubelMessageDialog($container,message);};JoubelUI.createHelpTextDialog=function(header,message,closeButtonTitle){return new H5P.JoubelHelpTextDialog(header,message,closeButtonTitle);};JoubelUI.createProgressCircle=function(number,progressColor,fillColor,backgroundColor){return new H5P.JoubelProgressCircle(number,progressColor,fillColor,backgroundColor);};JoubelUI.createThrobber=function(){return new H5P.JoubelThrobber();};JoubelUI.createSimpleRoundedButton=function(text){return new H5P.SimpleRoundedButton(text);};JoubelUI.createSlider=function(params){return new H5P.JoubelSlider(params);};JoubelUI.createScoreBar=function(maxScore,label,helpText,scoreExplanationButtonLabel){return new H5P.JoubelScoreBar(maxScore,label,helpText,scoreExplanationButtonLabel);};JoubelUI.createProgressbar=function(numSteps,options){return new H5P.JoubelProgressbar(numSteps,options);};JoubelUI.createButton=function(params){var type='button';if(params.href){type='a';}
else{params.type='button';}
if(params.class){params.class+=' h5p-joubelui-button';}
else{params.class='h5p-joubelui-button';}
return $('<'+type+'/>',params);};if(H5P.isFramed&&!H5P.hasiOSiframeScrollFix&&/iPad|iPhone|iPod/.test(navigator.userAgent)){H5P.hasiOSiframeScrollFix=true;var focus=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){if((this instanceof HTMLAnchorElement||this instanceof HTMLInputElement||this instanceof HTMLSelectElement||this instanceof HTMLTextAreaElement||this instanceof HTMLButtonElement||this instanceof HTMLIFrameElement||this instanceof HTMLAreaElement)&&!this.getAttribute('role')){focus.call(this);}};}
return JoubelUI;})(H5P.jQuery);