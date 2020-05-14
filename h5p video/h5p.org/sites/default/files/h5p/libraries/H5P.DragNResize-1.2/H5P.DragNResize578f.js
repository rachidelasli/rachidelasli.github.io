H5P.DragNResize=(function($,EventDispatcher){function C($container){var self=this;this.$container=$container;self.disabledModifiers=false;this.minSize=H5P.DragNResize.MIN_SIZE;EventDispatcher.call(this);H5P.$body.keydown(function(event){if(self.disabledModifiers){return;}
if(event.keyCode===17){self.revertSnap=true;}
else if(event.keyCode===16){self.revertLock=true;}}).keyup(function(event){if(self.disabledModifiers){return;}
if(event.keyCode===17){self.revertSnap=false;}
else if(event.keyCode===16){self.revertLock=false;}});}
C.prototype=Object.create(EventDispatcher.prototype);C.prototype.constructor=C;C.prototype.add=function($element,options){var that=this;var cornerPositions=['nw','ne','sw','se'];var horizontalEdgePositions=['w','e'];var verticalEdgePositions=['n','s'];var addResizeHandle=function(position,corner){$('<div>',{'class':'h5p-dragnresize-handle '+position}).mousedown(function(event){that.lock=(options&&(options.lock||corner&&options.cornerLock));if(options.cornerLock){that.isImage=true;}
that.$element=$element;that.press(event.clientX,event.clientY,position,options.minSize);}).data('position',position).appendTo($element);};if(!options.directionLock){cornerPositions.forEach(function(pos){addResizeHandle(pos,true);});}
if(!options||!options.lock){if(options.directionLock!="vertical"){horizontalEdgePositions.forEach(function(pos){addResizeHandle(pos);});}
if(options.directionLock!="horizontal"){verticalEdgePositions.forEach(function(pos){addResizeHandle(pos);});}}
if(options.minSize){this.minSize=options.minSize;}
else{this.minSize=H5P.DragNResize.MIN_SIZE;}};C.prototype.getElementPaddings=function(){return{horizontal:Number(this.$element.css('padding-left').replace("px",""))+Number(this.$element.css('padding-right').replace("px","")),vertical:Number(this.$element.css('padding-top').replace("px",""))+Number(this.$element.css('padding-bottom').replace("px",""))};};C.prototype.getElementBorders=function(){return{horizontal:Number(this.$element.css('border-left-width').replace('px',''))+Number(this.$element.css('border-right-width').replace('px','')),vertical:Number(this.$element.css('border-top-width').replace('px',''))+Number(this.$element.css('border-bottom-width').replace('px',''))};};C.prototype.setContainerEm=function(containerEm){this.containerEm=containerEm;};C.prototype.press=function(x,y,direction,minSize){this.active=true;var eventData={instance:this,direction:direction};this.minSize=(minSize?minSize:H5P.DragNResize.MIN_SIZE);H5P.$window.bind('mouseup',eventData,C.release).mousemove(eventData,C.move);H5P.$body.css({'-moz-user-select':'none','-webkit-user-select':'none','user-select':'none','-ms-user-select':'none'}).attr('unselectable','on')[0].onselectstart=H5P.$body[0].ondragstart=function(){return false;};this.startX=x;this.startY=y;this.padding=this.getElementPaddings();this.borders=this.getElementBorders();this.startWidth=this.$element.outerWidth();this.startHeight=this.$element.outerHeight();this.ratio=(this.startWidth/this.startHeight);var position=this.$element.position();this.left=position.left;this.top=position.top;this.containerWidth=this.$container.width();this.containerHeight=this.$container.height();this.newLeft=this.left;this.newTop=this.top;this.newWidth=this.startWidth;this.newHeight=this.startHeight;this.trigger('startResizing',eventData);this.trigger('showTransformPanel');};C.move=function(event){var direction=(event.data.direction?event.data.direction:'se');var that=event.data.instance;var moveW=(direction==='nw'||direction==='sw'||direction==='w');var moveN=(direction==='nw'||direction==='ne'||direction==='n');var moveDiagonally=(direction==='nw'||direction==='ne'||direction==='sw'||direction==='se');var movesHorizontal=(direction==='w'||direction==='e');var movesVertical=(direction==='n'||direction==='s');var deltaX=that.startX-event.clientX;var deltaY=that.startY-event.clientY;that.minLeft=that.left+that.startWidth-that.minSize;that.minTop=that.top+that.startHeight-that.minSize;if(moveW){that.newLeft=that.left-deltaX;that.newWidth=that.startWidth+deltaX;if(that.newLeft<0){that.newLeft=0;that.newWidth=that.left+that.startWidth;}
else if(that.newLeft>that.minLeft){that.newLeft=that.minLeft;that.newWidth=that.left-that.minLeft+that.startWidth;}
if(that.snap&&!that.revertSnap){that.newLeft=Math.round(that.newLeft/that.snap)*that.snap;if(that.newLeft>that.minLeft){that.newLeft=Math.floor(that.minLeft/that.snap)*that.snap;}
that.newWidth=(that.left-that.newLeft)+that.startWidth;}}
else if(!movesVertical){that.newWidth=that.startWidth-deltaX;if(that.snap&&!that.revertSnap){that.newWidth=Math.round(that.newWidth/that.snap)*that.snap;}
if(that.left+that.newWidth>that.containerWidth){that.newWidth=that.containerWidth-that.left;}}
if(moveN){that.newTop=that.top-deltaY;that.newHeight=that.startHeight+deltaY;if(that.newTop<0){that.newTop=0;that.newHeight=that.top+that.startHeight;}
else if(that.newTop>that.minTop){that.newTop=that.minTop;that.newHeight=that.top-that.minTop+that.startHeight;}
if(that.snap&&!that.revertSnap){that.newTop=Math.round(that.newTop/that.snap)*that.snap;if(that.newTop>that.minTop){that.newTop=Math.floor(that.minTop/that.snap)*that.snap;}
that.newHeight=(that.top-that.newTop)+that.startHeight;}}
else if(!movesHorizontal){that.newHeight=that.startHeight-deltaY;if(that.snap&&!that.revertSnap){that.newHeight=Math.round(that.newHeight/that.snap)*that.snap;}
if(that.top+that.newHeight>that.containerHeight){that.newHeight=that.containerHeight-that.top;}}
if(that.newWidth<=that.minSize){that.newWidth=that.minSize;}
if(that.newHeight<=that.minSize){that.newHeight=that.minSize;}
var lock=(that.revertLock?!that.lock:that.lock);if(lock&&(moveDiagonally||!that.isImage)){that.lockDimensions(moveW,moveN,movesVertical,movesHorizontal);}
that.finalWidth=that.newWidth;that.finalHeight=that.newHeight;if(that.$element.css('boxSizing')!=='border-box'){that.finalWidth-=(that.padding.horizontal+that.borders.horizontal);that.finalHeight-=(that.padding.vertical+that.borders.vertical);}
that.$element.css({width:(that.finalWidth/that.containerEm)+'em',height:(that.finalHeight/that.containerEm)+'em',left:((that.newLeft/that.containerWidth)*100)+'%',top:((that.newTop/that.containerHeight)*100)+'%'});that.trigger('moveResizing');};C.prototype.lockDimensions=function(isMovingWest,isMovingNorth,movesVertical,movesHorizontal){var self=this;var lockTop=function(isMovingNorth){if(!isMovingNorth){return;}
self.newTop=self.top-(self.newHeight-self.startHeight);if(self.newTop<=0){self.newTop=0;}};if(movesVertical){this.newWidth=this.newHeight*this.ratio;if(this.newWidth<this.minSize){this.newWidth=this.minSize;this.newHeight=this.minSize/this.ratio;}}
else if(movesHorizontal){this.newHeight=this.newWidth/this.ratio;if(this.newHeight<this.minSize){this.newHeight=this.minSize;this.newWidth=this.minSize*this.ratio;}}
else if(this.newWidth/this.startWidth>this.newHeight/this.startHeight){this.newHeight=this.newWidth/this.ratio;}
else{this.newWidth=this.newHeight*this.ratio;}
if(isMovingNorth){lockTop(isMovingNorth);if(self.newTop<=0){self.newHeight=self.top+self.startHeight;self.newWidth=self.newHeight*self.ratio;}}
else{if(this.top+this.newHeight>this.containerHeight){this.newHeight=this.containerHeight-this.top;this.newWidth=this.newHeight*this.ratio;}}
if(isMovingWest){this.newLeft=this.left-(this.newWidth-this.startWidth);if(this.newLeft<=0){this.newLeft=0;this.newWidth=this.left+this.startWidth;this.newHeight=this.newWidth/this.ratio;}}
else{if(this.left+this.newWidth>this.containerWidth){this.newWidth=this.containerWidth-this.left;this.newHeight=this.newWidth/this.ratio;}}
lockTop(isMovingNorth);};C.release=function(event){var that=event.data.instance;that.active=false;H5P.$window.unbind('mouseup',C.release).unbind('mousemove',C.move);H5P.$body.css({'-moz-user-select':'','-webkit-user-select':'','user-select':'','-ms-user-select':''}).removeAttr('unselectable')[0].onselectstart=H5P.$body[0].ondragstart=null;if(that.newWidth!==that.startWidth||that.newHeight!==that.startHeight){that.trigger('stoppedResizing',{left:that.newLeft,top:that.newTop,width:that.finalWidth/that.containerEm,height:that.finalHeight/that.containerEm});}
setTimeout(function(){that.$element.focus();},0);that.trigger('hideTransformPanel');};C.prototype.toggleModifiers=function(enable){this.disabledModifiers=enable===undefined?!this.disabledModifiers:!enable;};C.MIN_SIZE=24;return C;})(H5P.jQuery,H5P.EventDispatcher);