(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"kourassa2_atlas_", frames: [[1897,130,127,57],[1815,774,227,62],[1104,0,533,670],[0,0,550,670],[0,672,527,671],[529,672,523,669],[1815,838,150,80],[1815,920,150,80],[1639,0,256,256],[1639,258,256,256],[1639,516,256,256],[1897,0,128,128],[1815,1002,150,80],[1815,1084,150,80],[1054,672,512,512],[1995,234,43,40],[1897,189,138,43],[1897,234,96,47],[1568,774,245,245],[1568,1021,245,245],[1054,1186,245,245],[1301,1186,245,245],[552,0,550,670]]}
];


// symbols:



(lib.اَلْفَهْرَسُ = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.حَوْلَالْبَرْنامَج = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._0 = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.p4 = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._cdr_n = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._cdr_r = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._clic = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._hm1 = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._Hm2 = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._lp = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._rempJ = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._rempR = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._svpng = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.loader_0 = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.loader_1 = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.loader_2 = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.loader_3 = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.prp = function() {
	this.spriteSheet = ss["kourassa2_atlas_"];
	this.gotoAndStop(22);
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


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.906,0.787);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c, new cjs.Rectangle(0,0,87,37), null);


(lib.prp_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.حَوْلَالْبَرْنامَج();
	this.instance.parent = this;
	this.instance.setTransform(8,9,0.727,1);

	this.instance_1 = new lib._cdr_n();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.2,1);

	this.instance_2 = new lib._rempR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1.2,1);

	this.instance_3 = new lib._cdr_r();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1.2,1);

	this.instance_4 = new lib._rempJ();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1.2,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{x:8,y:9}}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance,p:{x:7,y:8}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{x:8,y:9}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{x:8,y:9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,80);


(lib.idx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.اَلْفَهْرَسُ();
	this.instance.parent = this;
	this.instance.setTransform(26,10);

	this.instance_1 = new lib._cdr_n();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.2,1);

	this.instance_2 = new lib._rempR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1.2,1);

	this.instance_3 = new lib._cdr_r();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1.2,1);

	this.instance_4 = new lib._rempJ();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1.2,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{x:26,y:10}}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance,p:{x:27,y:8}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{x:26,y:10}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{x:26,y:10}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,80);


(lib.loader_gif = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.loader_0();
	this.instance.parent = this;

	this.instance_1 = new lib.loader_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.loader_2();
	this.instance_2.parent = this;

	this.instance_3 = new lib.loader_3();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,245);


(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.cadre_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._cdr_n();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.38,0.525);

	this.instance_1 = new lib._cdr_r();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.38,0.525);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AwKjRMAgVAAAIAAGjMggVAAAg");
	this.shape.setTransform(103.5,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AwKDSIAAmjMAgVAAAIAAGjg");
	this.shape_1.setTransform(103.5,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207,42);


(lib._sv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._svpng();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.156,0.156);

	this.instance_1 = new lib._rempJ();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.533,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:2}}]},1).to({state:[{t:this.instance,p:{y:0}}]},1).to({state:[{t:this.instance,p:{y:0}},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib._lp_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._lp();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.25,0.25);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.93,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib._hm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._hm1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.313,0.313);

	this.instance_1 = new lib._Hm2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.313,0.313);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AmPmPIMfAAIAAMfIsfAAg");
	this.shape.setTransform(40,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmPGQIAAsfIMfAAIAAMfg");
	this.shape_1.setTransform(40,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.إِرْشاداتٌ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B61F5C").s().p("AgPDTQgRgLgBgJQABgJAJgMQAWgcATAAQANAAAAAPQABAIgIAMQgQgIgGAAQgKAAgIAIQAAAEAQAJQAPAJAGAAQAFAAATgFQgFARgOAEIhFAVQALgSARgHgAgEBtQAFggABgWQAAgigIhEQgDgbgKgwQgGghAAgGQgBgRAeg5IAQBcQARBuABA3QgBAmgaA4g");
	this.shape.setTransform(129.4,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B61F5C").s().p("AgiAHIBOghQAAAMgGAGQgGAFgZAJIgzAVQABgNAJgHg");
	this.shape_1.setTransform(127.6,54.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B61F5C").s().p("AgqCBQgVgJgygkIALgPQAoAaAdAAQASAAARgLQARgJAfgcQAsgmAAgUQAAgKgJgSQgKgUgMgMIAOhGQAlAlAAA7IAABPQAAAZgmApQgoAqgdAAQgXAAgagNg");
	this.shape_2.setTransform(112.3,35.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B61F5C").s().p("AgiAKQAAgSALgQQAKgPAOAAQAOAAAKAMQAKAMAAAPQAAAPgMAMQgMANgRAAQgcAAAAgegAgTgMQgEAGAAAGQAAAOAbAAQAPAAAAgIQAAgGgKgJQgJgJgHAAQgHAAgFAGg");
	this.shape_3.setTransform(115.9,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B61F5C").s().p("ABVCXQgQALgOADQgLADgWAAIgpAAQgfAAgPgnQgZAngrAAIglAAIAAhHIAlAAQAbAAASgPQAXgUABgpIASADIgCAqQAAAOAJAJQAKAIALAAIAeAAQAhAAANgJQAQgLAAgcQAAgKAOgKIAKgIIABAZQAAAMgEAaQASAJAdAEQAAgKgHgNQgGgPgBgEQABgIAHgLIAWgeQANAfABAhIAABiQg6gDgdgOgAAGgiIAcgyIAmATIAVgqIAwAaIgdA2IglgVIgWApgAAQhyIAag1IAxAZIgbA2g");
	this.shape_4.setTransform(90.8,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B61F5C").s().p("AAfCnQgfAAgMgZQgOgbgBhCIgBhbQAAgjgWgYIAchBQAbAqAAA8IAABDQAABdAaAAIAUAAIAABHg");
	this.shape_5.setTransform(70.4,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B61F5C").s().p("AgnB7QgmAAAAglQAAgWAFgdIAKAAQAEARAWAAIBZAAQgLhBgrgcIAShRQAiAaAOAnQANAmAAA6IAABUg");
	this.shape_6.setTransform(55.2,26);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B61F5C").s().p("AgJCqQAGgkABgSQgBgjgIhFQgGgjgHgnIgHgmQAAgRAfg6IAPBcQARBqAAA7QAAApgaA1g");
	this.shape_7.setTransform(39.3,22.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B61F5C").s().p("Ag0CJQgrAAgVgGQgVgIgOgXQgOgWAAgbQAAgRAFgWQAIgcAWgfIAOAKQgTAkAAAUQAAAOAKAMQAJAMAPAEQAUAFAjAAIC7AAQgKgdgTgYIAXg8QAUAcAGAZQAFASAAAnIAABKgAg8g/IAbgyIAmAUIAVgrIAwAbIgdA1IglgVIgUApg");
	this.shape_8.setTransform(16.5,24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B61F5C").s().p("AgaARQAAgPgKAAQgHgBgKATQAEgoASAAQASAAAAAbQABAGgEAQQAQgEASgNQgQgNAAgLQAAgMAKgMQAMgNANAAQARAAAAAQQAAASgLARQAIAGAAAFQAAALgCAMIgWgSQgbAggpAAQAPgYAAgJgAATgaQgBAGAOAMQAEgEAAgFQAAgQgMAAQgFgBAAAIg");
	this.shape_9.setTransform(11.1,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.إِرْشاداتٌ, new cjs.Rectangle(0,-0.2,133.9,57.8), null);


(lib._clic_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._clic();
	this.instance.parent = this;
	this.instance.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._clic_1, new cjs.Rectangle(4,5,256,256), null);


(lib.c60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("daronwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("rinwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("ronwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("ranwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hrwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("maamaawav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("miwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mowav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mawav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hmwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("doodenwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("diiwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("doowav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("daawav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.25,visible:true},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,37);


(lib.c1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("hdwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(43.5,18.5,1,1,0,0,0,43.5,18.5);
	this.instance.visible = false;

	this.instance_1 = new lib.c3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-177.4,-0.4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.c3(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:1,visible:false}}]}).to({state:[{t:this.instance,p:{alpha:0.25,visible:true}}]},1).to({state:[{t:this.instance,p:{alpha:0.25,visible:true}},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{alpha:1,visible:true}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,37);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		var st = document.getElementById("ch") ;
		
		this.hm.on("click", p0.bind(this));
		function p0(){this.parent.addChild(new lib.p0()); this.parent.removeChild(this); }
		
		this.pr.on("click", p2.bind(this));
		function p2(){this.parent.addChild(new lib.p2()); this.parent.removeChild(this); }
		
		this.sv.on("click", p5.bind(this));
		function p5(){this.parent.addChild(new lib.p5()); this.parent.removeChild(this);}
		
		//this.sv.on("click", p4.bind(this));
		//function p4(){this.parent.addChild(new lib.p4()); this.parent.removeChild(this);}
		
		
		this.lp.on("click", p.bind(this));
		
		function p(){
		var pg = new Array(new lib.p0(),new lib.p1(),new lib.p2(),new lib.p3(),new lib.p4(),new lib.p5());
		var t = document.getElementById("ch").value ;
		this.parent.addChild(pg[t]); this.parent.removeChild(this);}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/mystyle.css'});

	this.instance.setTransform(-104.9,274,1,1,0,0,0,50,11);

	this.lp = new lib._lp_1();
	this.lp.name = "lp";
	this.lp.parent = this;
	this.lp.setTransform(231.3,106.9,1,1,0,0,0,16,16);
	new cjs.ButtonHelper(this.lp, 0, 1, 2, false, new lib._lp_1(), 3);

	this.ch = new lib.an_TextInput({'id': 'ch', 'value':'5', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.ch.setTransform(299.8,106.7,0.7,1.454,0,0,0,50.1,10.7);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(208,86);

	this.cadre136_btn = new lib.cadre_btn();
	this.cadre136_btn.name = "cadre136_btn";
	this.cadre136_btn.parent = this;
	this.cadre136_btn.setTransform(168.3,348,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre136_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre45_btn = new lib.cadre_btn();
	this.cadre45_btn.name = "cadre45_btn";
	this.cadre45_btn.parent = this;
	this.cadre45_btn.setTransform(397.2,348,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre45_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre146_btn = new lib.cadre_btn();
	this.cadre146_btn.name = "cadre146_btn";
	this.cadre146_btn.parent = this;
	this.cadre146_btn.setTransform(168.3,395.8,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre146_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre158_btn = new lib.cadre_btn();
	this.cadre158_btn.name = "cadre158_btn";
	this.cadre158_btn.parent = this;
	this.cadre158_btn.setTransform(168.3,443.7,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre158_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre27_btn = new lib.cadre_btn();
	this.cadre27_btn.name = "cadre27_btn";
	this.cadre27_btn.parent = this;
	this.cadre27_btn.setTransform(397.2,252.4,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre27_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre35_btn = new lib.cadre_btn();
	this.cadre35_btn.name = "cadre35_btn";
	this.cadre35_btn.parent = this;
	this.cadre35_btn.setTransform(397.2,302,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre35_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre96_btn = new lib.cadre_btn();
	this.cadre96_btn.name = "cadre96_btn";
	this.cadre96_btn.parent = this;
	this.cadre96_btn.setTransform(168.3,156.6,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre96_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre106_btn = new lib.cadre_btn();
	this.cadre106_btn.name = "cadre106_btn";
	this.cadre106_btn.parent = this;
	this.cadre106_btn.setTransform(168.3,204.5,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre106_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre117_btn = new lib.cadre_btn();
	this.cadre117_btn.name = "cadre117_btn";
	this.cadre117_btn.parent = this;
	this.cadre117_btn.setTransform(168.3,252.4,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre117_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre126_btn = new lib.cadre_btn();
	this.cadre126_btn.name = "cadre126_btn";
	this.cadre126_btn.parent = this;
	this.cadre126_btn.setTransform(168.3,302,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre126_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre85_btn = new lib.cadre_btn();
	this.cadre85_btn.name = "cadre85_btn";
	this.cadre85_btn.parent = this;
	this.cadre85_btn.setTransform(397.2,542.1,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre85_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre74_btn = new lib.cadre_btn();
	this.cadre74_btn.name = "cadre74_btn";
	this.cadre74_btn.parent = this;
	this.cadre74_btn.setTransform(397.2,491.6,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre74_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre62_btn = new lib.cadre_btn();
	this.cadre62_btn.name = "cadre62_btn";
	this.cadre62_btn.parent = this;
	this.cadre62_btn.setTransform(397.2,443.7,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre62_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre54_btn = new lib.cadre_btn();
	this.cadre54_btn.name = "cadre54_btn";
	this.cadre54_btn.parent = this;
	this.cadre54_btn.setTransform(397.2,395.8,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre54_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre185_btn = new lib.cadre_btn();
	this.cadre185_btn.name = "cadre185_btn";
	this.cadre185_btn.parent = this;
	this.cadre185_btn.setTransform(168.3,542.1,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre185_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre171_btn = new lib.cadre_btn();
	this.cadre171_btn.name = "cadre171_btn";
	this.cadre171_btn.parent = this;
	this.cadre171_btn.setTransform(168.3,492.9,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre171_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre18_btn = new lib.cadre_btn();
	this.cadre18_btn.name = "cadre18_btn";
	this.cadre18_btn.parent = this;
	this.cadre18_btn.setTransform(397.2,204.5,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre18_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.cadre9_btn = new lib.cadre_btn();
	this.cadre9_btn.name = "cadre9_btn";
	this.cadre9_btn.parent = this;
	this.cadre9_btn.setTransform(397.2,156.6,1,1,0,0,0,103.7,20.9);
	new cjs.ButtonHelper(this.cadre9_btn, 0, 1, 2, false, new lib.cadre_btn(), 3);

	this.pr = new lib._sv();
	this.pr.name = "pr";
	this.pr.parent = this;
	this.pr.setTransform(467,631,1,1,0,0,180,80,40);
	new cjs.ButtonHelper(this.pr, 0, 1, 2, false, new lib._sv(), 3);

	this.sv = new lib._sv();
	this.sv.name = "sv";
	this.sv.parent = this;
	this.sv.setTransform(11.9,592.2);
	new cjs.ButtonHelper(this.sv, 0, 1, 2, false, new lib._sv(), 3);

	this.hm = new lib._hm();
	this.hm.name = "hm";
	this.hm.parent = this;
	this.hm.setTransform(17.3,22.1);
	new cjs.ButtonHelper(this.hm, 0, 1, 2, false, new lib._hm(), 3);

	this.instance_2 = new lib.p4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4,5,1.044,0.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.hm},{t:this.sv},{t:this.pr},{t:this.cadre9_btn},{t:this.cadre18_btn},{t:this.cadre171_btn},{t:this.cadre185_btn},{t:this.cadre54_btn},{t:this.cadre62_btn},{t:this.cadre74_btn},{t:this.cadre85_btn},{t:this.cadre126_btn},{t:this.cadre117_btn},{t:this.cadre106_btn},{t:this.cadre96_btn},{t:this.cadre35_btn},{t:this.cadre27_btn},{t:this.cadre158_btn},{t:this.cadre146_btn},{t:this.cadre45_btn},{t:this.cadre136_btn},{t:this.instance_1},{t:this.ch},{t:this.lp},{t:this.instance}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.4,5,709.5,670);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.hm.on("click", p0.bind(this));
		function p0(){this.parent.addChild(new lib.p0()); this.parent.removeChild(this);}
		
		this.pr.on("click", p1.bind(this));
		function p1(){this.parent.addChild(new lib.p1()); this.parent.removeChild(this);}
		
		this.sv.on("click", p3.bind(this));
		function p3(){this.parent.addChild(new lib.p3()); this.parent.removeChild(this);}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// action
	this.instance = new lib.loader_gif();
	this.instance.parent = this;
	this.instance.setTransform(156.1,317,1,1,0,0,0,122.5,122.5);

	this.text = new cjs.Text("2", "bold 23px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(268.1,633.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(1));

	// Layer_1
	this.pr = new lib._sv();
	this.pr.name = "pr";
	this.pr.parent = this;
	this.pr.setTransform(466.9,646.1,1,1,0,0,180,80,40.3);
	new cjs.ButtonHelper(this.pr, 0, 1, 2, false, new lib._sv(), 3);

	this.sv = new lib._sv();
	this.sv.name = "sv";
	this.sv.parent = this;
	this.sv.setTransform(16.1,603);
	new cjs.ButtonHelper(this.sv, 0, 1, 2, false, new lib._sv(), 3);

	this.hm = new lib._hm();
	this.hm.name = "hm";
	this.hm.parent = this;
	this.hm.setTransform(10.6,11.5);
	new cjs.ButtonHelper(this.hm, 0, 1, 2, false, new lib._hm(), 3);

	this.instance_1 = new lib._2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.hm},{t:this.sv},{t:this.pr}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(4,5,550,682.8), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pr.on("click", p0.bind(this));
		function p0(){this.parent.addChild(new lib.p0());this.parent.removeChild(this);}
		
		this.sv.on("click", p2.bind(this));
		function p2(){this.parent.addChild(new lib.p2());this.parent.removeChild(this);}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.pr = new lib._sv();
	this.pr.name = "pr";
	this.pr.parent = this;
	this.pr.setTransform(550.1,590.9,1,1,0,0,180);
	new cjs.ButtonHelper(this.pr, 0, 1, 2, false, new lib._sv(), 3);

	this.sv = new lib._sv();
	this.sv.name = "sv";
	this.sv.parent = this;
	this.sv.setTransform(7.9,593.7);
	new cjs.ButtonHelper(this.sv, 0, 1, 2, false, new lib._sv(), 3);

	this.text = new cjs.Text("1", "bold 23px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(272.2,641.6);

	this.instance = new lib.prp();
	this.instance.parent = this;
	this.instance.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text},{t:this.sv},{t:this.pr}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(4,5,550,670.7), null);


(lib.ori = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.إِرْشاداتٌ();
	this.instance.parent = this;
	this.instance.setTransform(90,41.1,1,1,0,0,0,66.8,28.7);

	this.instance_1 = new lib._cdr_n();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.2,1);

	this.instance_2 = new lib._rempR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1.2,1);

	this.instance_3 = new lib._cdr_r();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1.2,1);

	this.instance_4 = new lib._rempJ();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1.2,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{x:90,y:41.1}}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance,p:{x:89,y:43.1}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{x:90,y:41.1}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{x:90,y:41.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,80);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.hm.on("click", p0.bind(this));
		function p0(){this.parent.addChild(new lib.p0()); this.parent.removeChild(this); }
		
		this.pr.on("click", p3.bind(this));
		function p3(){this.parent.addChild(new lib.p3()); this.parent.removeChild(this); }
		
		this.sv.on("click", p6.bind(this));
		function p6(){this.parent.addChild(new lib.p6()); this.parent.removeChild(this);}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.pr = new lib._sv();
	this.pr.name = "pr";
	this.pr.parent = this;
	this.pr.setTransform(469,648.1,1,1,0,0,180,80,40);
	new cjs.ButtonHelper(this.pr, 0, 1, 2, false, new lib._sv(), 3);

	this.sv = new lib._sv();
	this.sv.name = "sv";
	this.sv.parent = this;
	this.sv.setTransform(14,606.7);
	new cjs.ButtonHelper(this.sv, 0, 1, 2, false, new lib._sv(), 3);

	this.hm = new lib._hm();
	this.hm.name = "hm";
	this.hm.parent = this;
	this.hm.setTransform(13.7,16.1);
	new cjs.ButtonHelper(this.hm, 0, 1, 2, false, new lib._hm(), 3);

	this.instance = new lib.c21();
	this.instance.parent = this;
	this.instance.setTransform(412.2,297.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.c21(), 3);

	this.instance_1 = new lib.c22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(324.4,298.7);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.c22(), 3);

	this.instance_2 = new lib.c23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(236.4,298.7);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.c23(), 3);

	this.instance_3 = new lib.c24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(145.7,298.8);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.c24(), 3);

	this.instance_4 = new lib.c25();
	this.instance_4.parent = this;
	this.instance_4.setTransform(55.5,298.7);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.c25(), 3);

	this.instance_5 = new lib.c26();
	this.instance_5.parent = this;
	this.instance_5.setTransform(412.4,338.5);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.c26(), 3);

	this.instance_6 = new lib.c27();
	this.instance_6.parent = this;
	this.instance_6.setTransform(323.9,338.5);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.c27(), 3);

	this.instance_7 = new lib.c28();
	this.instance_7.parent = this;
	this.instance_7.setTransform(235,338.5);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.c28(), 3);

	this.instance_8 = new lib.c29();
	this.instance_8.parent = this;
	this.instance_8.setTransform(145.9,338.5);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.c29(), 3);

	this.instance_9 = new lib.c30();
	this.instance_9.parent = this;
	this.instance_9.setTransform(56.5,338.6);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.c30(), 3);

	this.instance_10 = new lib.c31();
	this.instance_10.parent = this;
	this.instance_10.setTransform(412.3,378.3);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 2, false, new lib.c31(), 3);

	this.instance_11 = new lib.c32();
	this.instance_11.parent = this;
	this.instance_11.setTransform(325.1,378.3);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 2, false, new lib.c32(), 3);

	this.instance_12 = new lib.c33();
	this.instance_12.parent = this;
	this.instance_12.setTransform(236.3,378.3);
	new cjs.ButtonHelper(this.instance_12, 0, 1, 2, false, new lib.c33(), 3);

	this.instance_13 = new lib.c34();
	this.instance_13.parent = this;
	this.instance_13.setTransform(145.6,378.3);
	new cjs.ButtonHelper(this.instance_13, 0, 1, 2, false, new lib.c34(), 3);

	this.instance_14 = new lib.c35();
	this.instance_14.parent = this;
	this.instance_14.setTransform(56.8,378.3);
	new cjs.ButtonHelper(this.instance_14, 0, 1, 2, false, new lib.c35(), 3);

	this.instance_15 = new lib.c36();
	this.instance_15.parent = this;
	this.instance_15.setTransform(412.1,418.2);
	new cjs.ButtonHelper(this.instance_15, 0, 1, 2, false, new lib.c36(), 3);

	this.instance_16 = new lib.c37();
	this.instance_16.parent = this;
	this.instance_16.setTransform(323.2,418.2);
	new cjs.ButtonHelper(this.instance_16, 0, 1, 2, false, new lib.c37(), 3);

	this.instance_17 = new lib.c38();
	this.instance_17.parent = this;
	this.instance_17.setTransform(235.2,418.2);
	new cjs.ButtonHelper(this.instance_17, 0, 1, 2, false, new lib.c38(), 3);

	this.instance_18 = new lib.c39();
	this.instance_18.parent = this;
	this.instance_18.setTransform(145.5,418.2);
	new cjs.ButtonHelper(this.instance_18, 0, 1, 2, false, new lib.c39(), 3);

	this.instance_19 = new lib.c40();
	this.instance_19.parent = this;
	this.instance_19.setTransform(55.6,418.2);
	new cjs.ButtonHelper(this.instance_19, 0, 1, 2, false, new lib.c40(), 3);

	this.instance_20 = new lib.c41();
	this.instance_20.parent = this;
	this.instance_20.setTransform(412.3,458.1);
	new cjs.ButtonHelper(this.instance_20, 0, 1, 2, false, new lib.c41(), 3);

	this.instance_21 = new lib.c42();
	this.instance_21.parent = this;
	this.instance_21.setTransform(323.1,458);
	new cjs.ButtonHelper(this.instance_21, 0, 1, 2, false, new lib.c42(), 3);

	this.instance_22 = new lib.c43();
	this.instance_22.parent = this;
	this.instance_22.setTransform(235,457.9);
	new cjs.ButtonHelper(this.instance_22, 0, 1, 2, false, new lib.c43(), 3);

	this.instance_23 = new lib.c44();
	this.instance_23.parent = this;
	this.instance_23.setTransform(145.8,458);
	new cjs.ButtonHelper(this.instance_23, 0, 1, 2, false, new lib.c44(), 3);

	this.instance_24 = new lib.c45();
	this.instance_24.parent = this;
	this.instance_24.setTransform(55.6,457.9);
	new cjs.ButtonHelper(this.instance_24, 0, 1, 2, false, new lib.c45(), 3);

	this.instance_25 = new lib.c46();
	this.instance_25.parent = this;
	this.instance_25.setTransform(412.5,497.8);
	new cjs.ButtonHelper(this.instance_25, 0, 1, 2, false, new lib.c46(), 3);

	this.instance_26 = new lib.c47();
	this.instance_26.parent = this;
	this.instance_26.setTransform(325.5,497.8);
	new cjs.ButtonHelper(this.instance_26, 0, 1, 2, false, new lib.c47(), 3);

	this.instance_27 = new lib.c48();
	this.instance_27.parent = this;
	this.instance_27.setTransform(235.2,497.8);
	new cjs.ButtonHelper(this.instance_27, 0, 1, 2, false, new lib.c48(), 3);

	this.instance_28 = new lib.c49();
	this.instance_28.parent = this;
	this.instance_28.setTransform(146,497.8);
	new cjs.ButtonHelper(this.instance_28, 0, 1, 2, false, new lib.c49(), 3);

	this.instance_29 = new lib.c50();
	this.instance_29.parent = this;
	this.instance_29.setTransform(55.6,497.8);
	new cjs.ButtonHelper(this.instance_29, 0, 1, 2, false, new lib.c50(), 3);

	this.instance_30 = new lib.c51();
	this.instance_30.parent = this;
	this.instance_30.setTransform(412.5,537.6);
	new cjs.ButtonHelper(this.instance_30, 0, 1, 2, false, new lib.c51(), 3);

	this.instance_31 = new lib.c52();
	this.instance_31.parent = this;
	this.instance_31.setTransform(323.5,537.9);
	new cjs.ButtonHelper(this.instance_31, 0, 1, 2, false, new lib.c52(), 3);

	this.instance_32 = new lib.c53();
	this.instance_32.parent = this;
	this.instance_32.setTransform(235.2,537.9);
	new cjs.ButtonHelper(this.instance_32, 0, 1, 2, false, new lib.c53(), 3);

	this.instance_33 = new lib.c54();
	this.instance_33.parent = this;
	this.instance_33.setTransform(145.7,539);
	new cjs.ButtonHelper(this.instance_33, 0, 1, 2, false, new lib.c54(), 3);

	this.instance_34 = new lib.c57();
	this.instance_34.parent = this;
	this.instance_34.setTransform(323.3,577.5);
	new cjs.ButtonHelper(this.instance_34, 0, 1, 2, false, new lib.c57(), 3);

	this.instance_35 = new lib.c55();
	this.instance_35.parent = this;
	this.instance_35.setTransform(56.9,539.1);
	new cjs.ButtonHelper(this.instance_35, 0, 1, 2, false, new lib.c55(), 3);

	this.instance_36 = new lib.c56();
	this.instance_36.parent = this;
	this.instance_36.setTransform(412.5,577.6);
	new cjs.ButtonHelper(this.instance_36, 0, 1, 2, false, new lib.c56(), 3);

	this.instance_37 = new lib.c58();
	this.instance_37.parent = this;
	this.instance_37.setTransform(235.2,577.6);
	new cjs.ButtonHelper(this.instance_37, 0, 1, 2, false, new lib.c58(), 3);

	this.instance_38 = new lib.c59();
	this.instance_38.parent = this;
	this.instance_38.setTransform(145.9,577.6);
	new cjs.ButtonHelper(this.instance_38, 0, 1, 2, false, new lib.c59(), 3);

	this.instance_39 = new lib.c60();
	this.instance_39.parent = this;
	this.instance_39.setTransform(56.9,577.6);
	new cjs.ButtonHelper(this.instance_39, 0, 1, 2, false, new lib.c60(), 3);

	this.instance_40 = new lib.c20();
	this.instance_40.parent = this;
	this.instance_40.setTransform(55.6,258.5);
	new cjs.ButtonHelper(this.instance_40, 0, 1, 2, false, new lib.c20(), 3);

	this.instance_41 = new lib.c19();
	this.instance_41.parent = this;
	this.instance_41.setTransform(145.6,258.5);
	new cjs.ButtonHelper(this.instance_41, 0, 1, 2, false, new lib.c19(), 3);

	this.instance_42 = new lib.c18();
	this.instance_42.parent = this;
	this.instance_42.setTransform(235.6,258.5);
	new cjs.ButtonHelper(this.instance_42, 0, 1, 2, false, new lib.c18(), 3);

	this.instance_43 = new lib.c17();
	this.instance_43.parent = this;
	this.instance_43.setTransform(323.5,258.5);
	new cjs.ButtonHelper(this.instance_43, 0, 1, 2, false, new lib.c17(), 3);

	this.instance_44 = new lib.c16();
	this.instance_44.parent = this;
	this.instance_44.setTransform(412.5,258.5);
	new cjs.ButtonHelper(this.instance_44, 0, 1, 2, false, new lib.c16(), 3);

	this.instance_45 = new lib.c15();
	this.instance_45.parent = this;
	this.instance_45.setTransform(55.6,218.5);
	new cjs.ButtonHelper(this.instance_45, 0, 1, 2, false, new lib.c15(), 3);

	this.instance_46 = new lib.c14();
	this.instance_46.parent = this;
	this.instance_46.setTransform(145.6,218.5);
	new cjs.ButtonHelper(this.instance_46, 0, 1, 2, false, new lib.c14(), 3);

	this.instance_47 = new lib.c13();
	this.instance_47.parent = this;
	this.instance_47.setTransform(234.6,218.5);
	new cjs.ButtonHelper(this.instance_47, 0, 1, 2, false, new lib.c13(), 3);

	this.instance_48 = new lib.c12();
	this.instance_48.parent = this;
	this.instance_48.setTransform(322.5,218.5);
	new cjs.ButtonHelper(this.instance_48, 0, 1, 2, false, new lib.c12(), 3);

	this.instance_49 = new lib.c11();
	this.instance_49.parent = this;
	this.instance_49.setTransform(412.5,218.5);
	new cjs.ButtonHelper(this.instance_49, 0, 1, 2, false, new lib.c11(), 3);

	this.instance_50 = new lib.c10();
	this.instance_50.parent = this;
	this.instance_50.setTransform(55.6,178.5);
	new cjs.ButtonHelper(this.instance_50, 0, 1, 2, false, new lib.c10(), 3);

	this.instance_51 = new lib.c9();
	this.instance_51.parent = this;
	this.instance_51.setTransform(145.6,178.5);
	new cjs.ButtonHelper(this.instance_51, 0, 1, 2, false, new lib.c9(), 3);

	this.instance_52 = new lib.c8();
	this.instance_52.parent = this;
	this.instance_52.setTransform(234.6,178.5);
	new cjs.ButtonHelper(this.instance_52, 0, 1, 2, false, new lib.c8(), 3);

	this.instance_53 = new lib.c7();
	this.instance_53.parent = this;
	this.instance_53.setTransform(322.5,178.5);
	new cjs.ButtonHelper(this.instance_53, 0, 1, 2, false, new lib.c7(), 3);

	this.instance_54 = new lib.c6();
	this.instance_54.parent = this;
	this.instance_54.setTransform(411.5,178.5);
	new cjs.ButtonHelper(this.instance_54, 0, 1, 2, false, new lib.c6(), 3);

	this.instance_55 = new lib.c5();
	this.instance_55.parent = this;
	this.instance_55.setTransform(55.6,138.5);
	new cjs.ButtonHelper(this.instance_55, 0, 1, 2, false, new lib.c5(), 3);

	this.instance_56 = new lib.c4();
	this.instance_56.parent = this;
	this.instance_56.setTransform(144.6,138.5);
	new cjs.ButtonHelper(this.instance_56, 0, 1, 2, false, new lib.c4(), 3);

	this.instance_57 = new lib.c3();
	this.instance_57.parent = this;
	this.instance_57.setTransform(235.6,138.5);
	new cjs.ButtonHelper(this.instance_57, 0, 1, 2, false, new lib.c3(), 3);

	this.instance_58 = new lib.c1();
	this.instance_58.parent = this;
	this.instance_58.setTransform(412.5,138.5);
	new cjs.ButtonHelper(this.instance_58, 0, 1, 2, false, new lib.c1(), 3);

	this.instance_59 = new lib.c2();
	this.instance_59.parent = this;
	this.instance_59.setTransform(366.1,157,1,1,0,0,0,43.5,18.5);
	new cjs.ButtonHelper(this.instance_59, 0, 1, 2, false, new lib.c2(), 3);

	this.instance_60 = new lib._5();
	this.instance_60.parent = this;
	this.instance_60.setTransform(4,5,1.052,1.001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.hm},{t:this.sv},{t:this.pr}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(4,5,550,685.1), null);


(lib.p0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.sv.on("click", p1.bind(this));
		this.prp.on("click", p1.bind(this));
		function p1(){this.parent.addChild(new lib.p1());this.parent.removeChild(this);}
		
		this.ori.on("click", p2.bind(this));
		function p2(){this.parent.addChild(new lib.p2());this.parent.removeChild(this);}
		
		this.idx.on("click", p3.bind(this));
		function p3(){this.parent.addChild(new lib.p3());this.parent.removeChild(this);}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib._clic_1();
	this.instance.parent = this;
	this.instance.setTransform(73,480,0.117,0.117,0,0,0,127.6,128.8);

	this.instance_1 = new lib._clic_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.8,357.8,0.117,0.117,0,0,0,127.6,128.8);

	this.instance_2 = new lib._clic_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(70,235.3,0.117,0.117,0,0,0,127.6,128.8);

	this.ori = new lib.ori();
	this.ori.name = "ori";
	this.ori.parent = this;
	this.ori.setTransform(58,462.5,1.111,1);
	new cjs.ButtonHelper(this.ori, 0, 1, 2, false, new lib.ori(), 3);

	this.prp = new lib.prp_1();
	this.prp.name = "prp";
	this.prp.parent = this;
	this.prp.setTransform(15.9,340.7,1.222,1);
	new cjs.ButtonHelper(this.prp, 0, 1, 2, false, new lib.prp_1(), 3);

	this.idx = new lib.idx();
	this.idx.name = "idx";
	this.idx.parent = this;
	this.idx.setTransform(55.3,219.2,1.111,1);
	new cjs.ButtonHelper(this.idx, 0, 1, 2, false, new lib.idx(), 3);

	this.sv = new lib._sv();
	this.sv.name = "sv";
	this.sv.parent = this;
	this.sv.setTransform(17.4,589);
	new cjs.ButtonHelper(this.sv, 0, 1, 2, false, new lib._sv(), 3);

	this.instance_3 = new lib._0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4,5,1.032,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.sv},{t:this.idx},{t:this.prp},{t:this.ori},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p0, new cjs.Rectangle(4,5,550,670), null);


// stage content:
(lib.kourassa2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addChild(new lib.p0());
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.instance = new lib.loader_gif();
	this.instance.parent = this;
	this.instance.setTransform(288.3,84.5,0.408,0.408,0,0,0,122.5,122.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(517.3,373.5,100,100);
// library properties:
lib.properties = {
	id: '8D4C0671D4D96B4689C38B4633B478C1',
	width: 558,
	height: 678,
	fps: 24,
	color: "#990000",
	opacity: 1.00,
	manifest: [
		{src:"images/kourassa2_atlas_.png", id:"kourassa2_atlas_"},
		{src:"sounds/daawav.mp3", id:"daawav"},
		{src:"sounds/daronwav.mp3", id:"daronwav"},
		{src:"sounds/diiwav.mp3", id:"diiwav"},
		{src:"sounds/doowav.mp3", id:"doowav"},
		{src:"sounds/doodenwav.mp3", id:"doodenwav"},
		{src:"sounds/hdwav.mp3", id:"hdwav"},
		{src:"sounds/hmwav.mp3", id:"hmwav"},
		{src:"sounds/hrwav.mp3", id:"hrwav"},
		{src:"sounds/mawav.mp3", id:"mawav"},
		{src:"sounds/maamaawav.mp3", id:"maamaawav"},
		{src:"sounds/miwav.mp3", id:"miwav"},
		{src:"sounds/mowav.mp3", id:"mowav"},
		{src:"sounds/ranwav.mp3", id:"ranwav"},
		{src:"sounds/rinwav.mp3", id:"rinwav"},
		{src:"sounds/ronwav.mp3", id:"ronwav"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"},
		{src:"components/ui/src/css.js", id:"an.CSS"}
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
an.compositions['8D4C0671D4D96B4689C38B4633B478C1'] = {
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

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;