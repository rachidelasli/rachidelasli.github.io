(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"drag2_atlas_", frames: [[0,0,256,256],[0,258,256,256]]}
];


// symbols:



(lib.homeicon = function() {
	this.spriteSheet = ss["drag2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Homeicon2 = function() {
	this.spriteSheet = ss["drag2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Homeicon2();
	this.instance.parent = this;
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc2, new cjs.Rectangle(-30,-30,60,60), null);


(lib.handle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.homeicon();
	this.instance.parent = this;
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.handle, new cjs.Rectangle(-30,-30,60,60), null);


// stage content:
(lib.drag2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Touch.enable(stage);
		stage.enableMouseOver(10);
		stage.mouseMoveOutside = true;
		var clips = new Array(this.mc1,this.mc2);
		
		for(var i = 0 ; i< clips.length;i++){
			clips[i].cursor="pointer";
		clips[i].addEventListener("pressmove", drag.bind(this));
			}
		
		
		function drag(evt){
			
		var p=this.globalToLocal(evt.stageX, evt.stageY);
		evt.currentTarget.x =  p.x;
		evt.currentTarget.y =  p.y;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mc2 = new lib.mc2();
	this.mc2.name = "mc2";
	this.mc2.parent = this;
	this.mc2.setTransform(163,175);

	this.mc1 = new lib.handle();
	this.mc1.name = "mc1";
	this.mc1.parent = this;
	this.mc1.setTransform(397,67.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc1},{t:this.mc2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(408,372.1,294,168);
// library properties:
lib.properties = {
	id: 'D5EFAF45957F934B921AF401CC925005',
	width: 550,
	height: 670,
	fps: 24,
	color: "#0099CC",
	opacity: 1.00,
	manifest: [
		{src:"images/drag2_atlas_.png", id:"drag2_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D5EFAF45957F934B921AF401CC925005'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;