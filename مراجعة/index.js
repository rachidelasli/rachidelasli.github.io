(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,1343,526,669],[0,672,527,669],[528,1343,523,669],[646,507,45,133],[599,507,45,133],[552,507,45,133],[552,0,550,165],[529,1186,150,150],[911,1268,3,36],[529,672,512,512],[810,167,256,256],[552,167,256,256],[0,0,550,670],[811,1186,150,80],[963,1186,150,80],[811,1268,98,69],[552,425,100,80],[681,1186,128,128]]}
];


// symbols:



(lib._006 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._008 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.clavL = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.clavN = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.clign = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.clvierico = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hm1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hm2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.p7i = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.rempRg = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.rmpjR = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.rmplblnc = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.svI = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.voix = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("ArtGQIAAsfIXbAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-75,-40,150,80), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().rr(-22.5,-66.5,45,133,19);
	this.shape.setTransform(22.5,66.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,45,133), null);


(lib.sv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.svI();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.85,0.938);

	this.instance_1 = new lib.rempRg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.567,0.938);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.85}}]}).to({state:[{t:this.instance,p:{scaleX:0.8}}]},1).to({state:[{t:this.instance,p:{scaleX:0.8}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,75);


(lib.snd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.voix();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.469,0.781);

	this.instance_1 = new lib.rmpjR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.4,1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,100);


(lib.rpr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0033").s().p("AgXAsQgNgHgGgNQgEgIgBgLQgBgQAGgLQAFgKAKgHQAKgGALAAQAGAAABgDQAOABANAJQANAJAFAOQAFAOgEAOQgEAPgMAKQgLAJgQACIgGAAQgLAAgKgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rpr, new cjs.Rectangle(-4.8,-4.9,9.7,9.8), null);


(lib.hm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hm1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.313,0.313);

	this.instance_1 = new lib.hm2();
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


(lib.clv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("لوحة المفاتيح", "bold 18px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 110;
	this.text.parent = this;
	this.text.setTransform(59.6,2);

	this.instance = new lib.clvierico();
	this.instance.parent = this;
	this.instance.setTransform(0,4,0.234,0.127);

	this.instance_1 = new lib.rmplblnc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.224,0.899);

	this.instance_2 = new lib.rmpjR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.8,0.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleY:0.127,x:0,y:4}},{t:this.text,p:{x:59.6,color:"#000000"}}]}).to({state:[{t:this.instance_2},{t:this.instance,p:{scaleY:0.117,x:4,y:7}},{t:this.text,p:{x:61,color:"#9900CC"}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleY:0.127,x:4,y:4}},{t:this.text,p:{x:61,color:"#000000"}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleY:0.127,x:4,y:4}},{t:this.text,p:{x:61,color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,69);


(lib.clignM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.clign();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.333,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},19).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,33);


(lib.nav = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		np=0;
		var pags = this.parent.parent.getChildByName('pags');
		var navs = this.parent.parent.getChildByName('navs');
		
		var pg = [new lib.p5() , new lib.p6(),new lib.p7(),new lib.p8()];
		
		this.hm.on("click", gop0.bind(this));
		function gop0(){
			window.open("../index.html", "_self");
		}
		
		this.sv.on("click", ps.bind(this));
		function ps(){
			this.pr.visible=true;
			np += 1;
			pags.removeAllChildren();pags.addChild(pg[np]);
			   if(np <pg.length-1){this.sv.visible=true;}
			   else{this.sv.visible=false;}	
		}
			
		this.pr.on("click", pr.bind(this));
		function pr(){
			this.sv.visible=true;
			np -= 1;
			pags.removeAllChildren();pags.addChild(pg[np]);
			 if(np == 0){this.pr.visible=false;}
			 else{this.pr.visible=true;}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.pr = new lib.sv();
	this.pr.name = "pr";
	this.pr.parent = this;
	this.pr.setTransform(550.5,622.5,0.588,0.6,0,0,180,-0.1,0.1);
	new cjs.ButtonHelper(this.pr, 0, 1, 2, false, new lib.sv(), 3);

	this.sv = new lib.sv();
	this.sv.name = "sv";
	this.sv.parent = this;
	this.sv.setTransform(1,622.5,0.588,0.6,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.sv, 0, 1, 2, false, new lib.sv(), 3);

	this.hm = new lib.hm();
	this.hm.name = "hm";
	this.hm.parent = this;
	this.hm.setTransform(425.5,621.5,0.562,0.562,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.hm, 0, 1, 2, false, new lib.hm(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hm},{t:this.sv},{t:this.pr}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nav, new cjs.Rectangle(0.9,621.4,549.6,46), null);


(lib.btnTr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(75,40);
	this.instance.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.301},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,80);


(lib.btnchkTr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(22.5,66.5,1,1,0,0,0,22.5,66.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,133);


(lib.p8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var btns = new Array(this.s61, this.s62, this.s63, this.s64, this.s65, this.s66, this.s67, 
		this.s68, this.s69, this.s70, this.s71, this.s72, this.s73, this.s74,this.s75,this.s76);
		                      
		
		for (var i=0; i < btns.length ; i++){
			
			btns[i].on("click" , plS);
			}
			function plS(e){
				playSound(e.currentTarget.name);
				}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.s76 = new lib.btnTr();
	this.s76.name = "s76";
	this.s76.parent = this;
	this.s76.setTransform(66.1,473.1,0.68,1.4,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.s76, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s75 = new lib.btnTr();
	this.s75.name = "s75";
	this.s75.parent = this;
	this.s75.setTransform(171.1,473.1,0.68,1.4,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.s75, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s74 = new lib.btnTr();
	this.s74.name = "s74";
	this.s74.parent = this;
	this.s74.setTransform(275.1,473.1,0.68,1.4,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.s74, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s73 = new lib.btnTr();
	this.s73.name = "s73";
	this.s73.parent = this;
	this.s73.setTransform(379.1,473.1,0.68,1.4,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.s73, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s64 = new lib.btnTr();
	this.s64.name = "s64";
	this.s64.parent = this;
	this.s64.setTransform(66.1,136.2,0.68,1.387,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.s64, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s63 = new lib.btnTr();
	this.s63.name = "s63";
	this.s63.parent = this;
	this.s63.setTransform(171.1,136.2,0.68,1.387,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.s63, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s62 = new lib.btnTr();
	this.s62.name = "s62";
	this.s62.parent = this;
	this.s62.setTransform(275.1,136.2,0.68,1.387,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.s62, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s61 = new lib.btnTr();
	this.s61.name = "s61";
	this.s61.parent = this;
	this.s61.setTransform(379.1,136.2,0.68,1.387,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.s61, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s72 = new lib.btnTr();
	this.s72.name = "s72";
	this.s72.parent = this;
	this.s72.setTransform(66.1,360.1,0.68,1.4,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.s72, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s71 = new lib.btnTr();
	this.s71.name = "s71";
	this.s71.parent = this;
	this.s71.setTransform(171.1,360.1,0.68,1.4,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.s71, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s70 = new lib.btnTr();
	this.s70.name = "s70";
	this.s70.parent = this;
	this.s70.setTransform(275.1,360.1,0.68,1.4,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.s70, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s69 = new lib.btnTr();
	this.s69.name = "s69";
	this.s69.parent = this;
	this.s69.setTransform(379.1,360.1,0.68,1.4,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.s69, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s68 = new lib.btnTr();
	this.s68.name = "s68";
	this.s68.parent = this;
	this.s68.setTransform(66.1,248.2,0.68,1.387,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.s68, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s67 = new lib.btnTr();
	this.s67.name = "s67";
	this.s67.parent = this;
	this.s67.setTransform(171.1,248.2,0.68,1.387,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.s67, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s66 = new lib.btnTr();
	this.s66.name = "s66";
	this.s66.parent = this;
	this.s66.setTransform(275.1,248.2,0.68,1.387,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.s66, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s65 = new lib.btnTr();
	this.s65.name = "s65";
	this.s65.parent = this;
	this.s65.setTransform(379.1,248.2,0.68,1.387,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.s65, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s1 = new lib.btnTr();
	this.s1.name = "s1";
	this.s1.parent = this;
	this.s1.setTransform(66.1,135.3,0.68,1.374,0,0,0,0.1,0.4);
	new cjs.ButtonHelper(this.s1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s1_1 = new lib.btnTr();
	this.s1_1.name = "s1_1";
	this.s1_1.parent = this;
	this.s1_1.setTransform(171.1,135.3,0.68,1.374,0,0,0,0.1,0.4);
	new cjs.ButtonHelper(this.s1_1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s1_2 = new lib.btnTr();
	this.s1_2.name = "s1_2";
	this.s1_2.parent = this;
	this.s1_2.setTransform(275.1,135.3,0.68,1.374,0,0,0,0.1,0.4);
	new cjs.ButtonHelper(this.s1_2, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s1_3 = new lib.btnTr();
	this.s1_3.name = "s1_3";
	this.s1_3.parent = this;
	this.s1_3.setTransform(379.1,135.3,0.68,1.374,0,0,0,0.1,0.4);
	new cjs.ButtonHelper(this.s1_3, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance = new lib._008();
	this.instance.parent = this;
	this.instance.setTransform(0,1,1.044,1.001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.s1_3},{t:this.s1_2},{t:this.s1_1},{t:this.s1},{t:this.s65},{t:this.s66},{t:this.s67},{t:this.s68},{t:this.s69},{t:this.s70},{t:this.s71},{t:this.s72},{t:this.s61},{t:this.s62},{t:this.s63},{t:this.s64},{t:this.s73},{t:this.s74},{t:this.s75},{t:this.s76}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p8, new cjs.Rectangle(0,1,550,670), null);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var btns = new Array(this.s1, this.s2, this.s3, this.s4, this.s5, this.s6, this.s7, this.s8, this.s9, this.s10, this.s11, this.s12, this.s13, this.s14,
		this.s15,this.s16, this.s17, this.s18, this.s19, this.s20, this.s21, this.s22, this.s23, this.s24, this.s25, this.s26, this.s27, this.s28, this.s29, this.s30,
		this.s31, this.s32, this.s33, this.s34, this.s35, this.s36, this.s37, this.s38, this.s39, this.s40, this.s41, this.s42, this.s43, this.s44, this.s45,
		this.s46, this.s47, this.s48, this.s49, this.s50, this.s51, this.s52, this.s53, this.s54, this.s55, this.s56, this.s57, this.s58, this.s59, this.s60);
		                      
		
		for (var i=0; i < btns.length ; i++){
			
			btns[i].on("click" , plS);
			}
			function plS(e){
				  createjs.Sound.stop();
				playSound(e.currentTarget.name);
				}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.snd = new lib.snd();
	this.snd.name = "snd";
	this.snd.parent = this;
	this.snd.setTransform(156,100.1,0.422,0.422,0,0,0,64,64);
	new cjs.ButtonHelper(this.snd, 0, 1, 2, false, new lib.snd(), 3);

	this.s45 = new lib.btnTr();
	this.s45.name = "s45";
	this.s45.parent = this;
	this.s45.setTransform(52.6,452.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s45, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s44 = new lib.btnTr();
	this.s44.name = "s44";
	this.s44.parent = this;
	this.s44.setTransform(141.8,452.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s44, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s43 = new lib.btnTr();
	this.s43.name = "s43";
	this.s43.parent = this;
	this.s43.setTransform(231,452.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s43, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s42 = new lib.btnTr();
	this.s42.name = "s42";
	this.s42.parent = this;
	this.s42.setTransform(320.3,452.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s42, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s60 = new lib.btnTr();
	this.s60.name = "s60";
	this.s60.parent = this;
	this.s60.setTransform(52.6,573.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s60, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s59 = new lib.btnTr();
	this.s59.name = "s59";
	this.s59.parent = this;
	this.s59.setTransform(141.8,573.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s59, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s58 = new lib.btnTr();
	this.s58.name = "s58";
	this.s58.parent = this;
	this.s58.setTransform(231,573.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s58, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s57 = new lib.btnTr();
	this.s57.name = "s57";
	this.s57.parent = this;
	this.s57.setTransform(320.3,573.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s57, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s56 = new lib.btnTr();
	this.s56.name = "s56";
	this.s56.parent = this;
	this.s56.setTransform(409.5,573.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s56, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s55 = new lib.btnTr();
	this.s55.name = "s55";
	this.s55.parent = this;
	this.s55.setTransform(52.6,533.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s55, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s54 = new lib.btnTr();
	this.s54.name = "s54";
	this.s54.parent = this;
	this.s54.setTransform(141.8,533.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s54, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s53 = new lib.btnTr();
	this.s53.name = "s53";
	this.s53.parent = this;
	this.s53.setTransform(231,533.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s53, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s52 = new lib.btnTr();
	this.s52.name = "s52";
	this.s52.parent = this;
	this.s52.setTransform(320.3,533.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s52, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s51 = new lib.btnTr();
	this.s51.name = "s51";
	this.s51.parent = this;
	this.s51.setTransform(409.5,533.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s51, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s50 = new lib.btnTr();
	this.s50.name = "s50";
	this.s50.parent = this;
	this.s50.setTransform(52.6,493.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s50, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s49 = new lib.btnTr();
	this.s49.name = "s49";
	this.s49.parent = this;
	this.s49.setTransform(141.8,493.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s49, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s48 = new lib.btnTr();
	this.s48.name = "s48";
	this.s48.parent = this;
	this.s48.setTransform(231,493.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s48, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s47 = new lib.btnTr();
	this.s47.name = "s47";
	this.s47.parent = this;
	this.s47.setTransform(320.3,493.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s47, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s46 = new lib.btnTr();
	this.s46.name = "s46";
	this.s46.parent = this;
	this.s46.setTransform(409.5,493.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s46, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s41 = new lib.btnTr();
	this.s41.name = "s41";
	this.s41.parent = this;
	this.s41.setTransform(409.5,452.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s41, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s40 = new lib.btnTr();
	this.s40.name = "s40";
	this.s40.parent = this;
	this.s40.setTransform(52.6,412.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s40, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s39 = new lib.btnTr();
	this.s39.name = "s39";
	this.s39.parent = this;
	this.s39.setTransform(141.8,412.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s39, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s38 = new lib.btnTr();
	this.s38.name = "s38";
	this.s38.parent = this;
	this.s38.setTransform(231,412.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s38, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s37 = new lib.btnTr();
	this.s37.name = "s37";
	this.s37.parent = this;
	this.s37.setTransform(320.3,412.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s37, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s36 = new lib.btnTr();
	this.s36.name = "s36";
	this.s36.parent = this;
	this.s36.setTransform(409.5,412.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s36, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s35 = new lib.btnTr();
	this.s35.name = "s35";
	this.s35.parent = this;
	this.s35.setTransform(52.6,372.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s35, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s34 = new lib.btnTr();
	this.s34.name = "s34";
	this.s34.parent = this;
	this.s34.setTransform(141.8,372.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s34, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s33 = new lib.btnTr();
	this.s33.name = "s33";
	this.s33.parent = this;
	this.s33.setTransform(231,372.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s33, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s32 = new lib.btnTr();
	this.s32.name = "s32";
	this.s32.parent = this;
	this.s32.setTransform(320.3,372.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s32, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s31 = new lib.btnTr();
	this.s31.name = "s31";
	this.s31.parent = this;
	this.s31.setTransform(409.5,372.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s31, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s30 = new lib.btnTr();
	this.s30.name = "s30";
	this.s30.parent = this;
	this.s30.setTransform(52.6,333,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s30, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s29 = new lib.btnTr();
	this.s29.name = "s29";
	this.s29.parent = this;
	this.s29.setTransform(141.8,333,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s29, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s28 = new lib.btnTr();
	this.s28.name = "s28";
	this.s28.parent = this;
	this.s28.setTransform(231,333,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s28, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s27 = new lib.btnTr();
	this.s27.name = "s27";
	this.s27.parent = this;
	this.s27.setTransform(320.3,333,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s27, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s26 = new lib.btnTr();
	this.s26.name = "s26";
	this.s26.parent = this;
	this.s26.setTransform(409.5,333,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s26, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s25 = new lib.btnTr();
	this.s25.name = "s25";
	this.s25.parent = this;
	this.s25.setTransform(52.6,293,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s25, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s24 = new lib.btnTr();
	this.s24.name = "s24";
	this.s24.parent = this;
	this.s24.setTransform(141.8,293,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s24, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s23 = new lib.btnTr();
	this.s23.name = "s23";
	this.s23.parent = this;
	this.s23.setTransform(231,293,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s23, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s22 = new lib.btnTr();
	this.s22.name = "s22";
	this.s22.parent = this;
	this.s22.setTransform(320.3,293,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s22, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s21 = new lib.btnTr();
	this.s21.name = "s21";
	this.s21.parent = this;
	this.s21.setTransform(409.5,293,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s21, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s20 = new lib.btnTr();
	this.s20.name = "s20";
	this.s20.parent = this;
	this.s20.setTransform(52.6,253,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s20, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s19 = new lib.btnTr();
	this.s19.name = "s19";
	this.s19.parent = this;
	this.s19.setTransform(141.8,253,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s19, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s18 = new lib.btnTr();
	this.s18.name = "s18";
	this.s18.parent = this;
	this.s18.setTransform(231,253,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s18, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s17 = new lib.btnTr();
	this.s17.name = "s17";
	this.s17.parent = this;
	this.s17.setTransform(320.3,253,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s17, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s16 = new lib.btnTr();
	this.s16.name = "s16";
	this.s16.parent = this;
	this.s16.setTransform(409.5,253,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s16, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s15 = new lib.btnTr();
	this.s15.name = "s15";
	this.s15.parent = this;
	this.s15.setTransform(52.6,212,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s15, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s14 = new lib.btnTr();
	this.s14.name = "s14";
	this.s14.parent = this;
	this.s14.setTransform(141.8,212,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s14, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s13 = new lib.btnTr();
	this.s13.name = "s13";
	this.s13.parent = this;
	this.s13.setTransform(231,212,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s13, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s12 = new lib.btnTr();
	this.s12.name = "s12";
	this.s12.parent = this;
	this.s12.setTransform(320.3,212,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s12, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s11 = new lib.btnTr();
	this.s11.name = "s11";
	this.s11.parent = this;
	this.s11.setTransform(409.5,212,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s11, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s10 = new lib.btnTr();
	this.s10.name = "s10";
	this.s10.parent = this;
	this.s10.setTransform(52.6,172,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s10, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s9 = new lib.btnTr();
	this.s9.name = "s9";
	this.s9.parent = this;
	this.s9.setTransform(141.8,172,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s9, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s8 = new lib.btnTr();
	this.s8.name = "s8";
	this.s8.parent = this;
	this.s8.setTransform(231,172,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s8, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s7 = new lib.btnTr();
	this.s7.name = "s7";
	this.s7.parent = this;
	this.s7.setTransform(320.3,172,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s7, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s6 = new lib.btnTr();
	this.s6.name = "s6";
	this.s6.parent = this;
	this.s6.setTransform(409.5,172,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s6, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s5 = new lib.btnTr();
	this.s5.name = "s5";
	this.s5.parent = this;
	this.s5.setTransform(52.6,132,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s5, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s4 = new lib.btnTr();
	this.s4.name = "s4";
	this.s4.parent = this;
	this.s4.setTransform(141.8,132,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s4, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s3 = new lib.btnTr();
	this.s3.name = "s3";
	this.s3.parent = this;
	this.s3.setTransform(231,132,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s3, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s2 = new lib.btnTr();
	this.s2.name = "s2";
	this.s2.parent = this;
	this.s2.setTransform(320.3,132,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s2, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s1 = new lib.btnTr();
	this.s1.name = "s1";
	this.s1.parent = this;
	this.s1.setTransform(409.5,132,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.052,1.001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.s1},{t:this.s2},{t:this.s3},{t:this.s4},{t:this.s5},{t:this.s6},{t:this.s7},{t:this.s8},{t:this.s9},{t:this.s10},{t:this.s11},{t:this.s12},{t:this.s13},{t:this.s14},{t:this.s15},{t:this.s16},{t:this.s17},{t:this.s18},{t:this.s19},{t:this.s20},{t:this.s21},{t:this.s22},{t:this.s23},{t:this.s24},{t:this.s25},{t:this.s26},{t:this.s27},{t:this.s28},{t:this.s29},{t:this.s30},{t:this.s31},{t:this.s32},{t:this.s33},{t:this.s34},{t:this.s35},{t:this.s36},{t:this.s37},{t:this.s38},{t:this.s39},{t:this.s40},{t:this.s41},{t:this.s46},{t:this.s47},{t:this.s48},{t:this.s49},{t:this.s50},{t:this.s51},{t:this.s52},{t:this.s53},{t:this.s54},{t:this.s55},{t:this.s56},{t:this.s57},{t:this.s58},{t:this.s59},{t:this.s60},{t:this.s42},{t:this.s43},{t:this.s44},{t:this.s45},{t:this.snd}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(0,0,550,670), null);


(lib.clavN_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var numero = new Array(this.ح0 , this.ح1 ,this.ح2 , this.ح3 , this.ح4 , this.ح5 , 
		this.ح6 , this.ح7 , this.ح8 ,this.ح9 , this.supr);
		
				var letter = "";
		for(var i=0 ; i< numero.length ; i++){
			numero[i].on("click", write.bind(this));}
		function write(e){
		letter  = e.currentTarget.name ;
		word = letter.substr(1,1);
				if(letter == "supr"){ var vtxt=this.parent.txt.text;this.parent.txt.text= vtxt.substr(0, vtxt.length - 1)}
			    else {this.parent.txt.text += word ;}
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.ح9 = new lib.btnTr();
	this.ح9.name = "ح9";
	this.ح9.parent = this;
	this.ح9.setTransform(1.6,123.6,0.347,0.487,0,0,0,0.6,0.3);
	new cjs.ButtonHelper(this.ح9, 0, 1, 2, false, new lib.btnTr(), 3);

	this.ح6 = new lib.btnTr();
	this.ح6.name = "ح6";
	this.ح6.parent = this;
	this.ح6.setTransform(1.6,83.6,0.347,0.487,0,0,0,0.6,0.3);
	new cjs.ButtonHelper(this.ح6, 0, 1, 2, false, new lib.btnTr(), 3);

	this.ح3 = new lib.btnTr();
	this.ح3.name = "ح3";
	this.ح3.parent = this;
	this.ح3.setTransform(1.6,41.6,0.347,0.487,0,0,0,0.6,0.3);
	new cjs.ButtonHelper(this.ح3, 0, 1, 2, false, new lib.btnTr(), 3);

	this.ح8 = new lib.btnTr();
	this.ح8.name = "ح8";
	this.ح8.parent = this;
	this.ح8.setTransform(57.6,123.6,0.347,0.487,0,0,0,0.6,0.3);
	new cjs.ButtonHelper(this.ح8, 0, 1, 2, false, new lib.btnTr(), 3);

	this.ح5 = new lib.btnTr();
	this.ح5.name = "ح5";
	this.ح5.parent = this;
	this.ح5.setTransform(57.6,83.6,0.347,0.487,0,0,0,0.6,0.3);
	new cjs.ButtonHelper(this.ح5, 0, 1, 2, false, new lib.btnTr(), 3);

	this.ح2 = new lib.btnTr();
	this.ح2.name = "ح2";
	this.ح2.parent = this;
	this.ح2.setTransform(57.6,41.6,0.347,0.487,0,0,0,0.6,0.3);
	new cjs.ButtonHelper(this.ح2, 0, 1, 2, false, new lib.btnTr(), 3);

	this.ح7 = new lib.btnTr();
	this.ح7.name = "ح7";
	this.ح7.parent = this;
	this.ح7.setTransform(113.6,123.6,0.347,0.487,0,0,0,0.6,0.3);
	new cjs.ButtonHelper(this.ح7, 0, 1, 2, false, new lib.btnTr(), 3);

	this.ح4 = new lib.btnTr();
	this.ح4.name = "ح4";
	this.ح4.parent = this;
	this.ح4.setTransform(113.6,83.6,0.347,0.487,0,0,0,0.6,0.3);
	new cjs.ButtonHelper(this.ح4, 0, 1, 2, false, new lib.btnTr(), 3);

	this.ح1 = new lib.btnTr();
	this.ح1.name = "ح1";
	this.ح1.parent = this;
	this.ح1.setTransform(113.6,41.6,0.347,0.487,0,0,0,0.6,0.3);
	new cjs.ButtonHelper(this.ح1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.frm = new lib.btnTr();
	this.frm.name = "frm";
	this.frm.parent = this;
	this.frm.setTransform(0.6,0.6,0.347,0.487,0,0,0,0.6,0.3);
	new cjs.ButtonHelper(this.frm, 0, 1, 2, false, new lib.btnTr(), 3);

	this.supr = new lib.btnTr();
	this.supr.name = "supr";
	this.supr.parent = this;
	this.supr.setTransform(57.6,1.6,0.347,0.487,0,0,0,0.6,0.3);
	new cjs.ButtonHelper(this.supr, 0, 1, 2, false, new lib.btnTr(), 3);

	this.ح0 = new lib.btnTr();
	this.ح0.name = "ح0";
	this.ح0.parent = this;
	this.ح0.setTransform(113.6,1.6,0.347,0.487,0,0,0,0.6,0.3);
	new cjs.ButtonHelper(this.ح0, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance = new lib.clavN();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.119,1.087);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.ح0},{t:this.supr},{t:this.frm},{t:this.ح1},{t:this.ح4},{t:this.ح7},{t:this.ح2},{t:this.ح5},{t:this.ح8},{t:this.ح3},{t:this.ح6},{t:this.ح9}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clavN_1, new cjs.Rectangle(0,0,167.9,163), null);


(lib.clavL_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var btxt = new Array(this.parent.btxt1, this.parent.btxt2 , this.parent.btxt3, this.parent.btxt4 , this.parent.btxt5,this.parent.btxt6 );
		var txt = new Array(this.parent.txt1, this.parent.txt2 , this.parent.txt3, this.parent.txt4 , this.parent.txt5, this.parent.txt6);
		
		for(var i = 0 ; i < btxt.length ; i++) {btxt[i].on("click",selectedT.bind(this));}
			
			window.txtactif = 1;
		function selectedT(e){
			    
				switch(e.target.name) {
		        case "btxt1": window.txtactif= 1; this.parent.clign.x= this.parent.btxt1.x + 10 ; this.parent.clign.y= this.parent.btxt1.y +20; TweenMax.to(this.parent.clavL,3,{y:0,ease:Elastic.easeOut}); break;
				case "btxt2": window.txtactif= 2; this.parent.clign.x= this.parent.btxt2.x + 10 ; this.parent.clign.y= this.parent.btxt2.y +20; TweenMax.to(this.parent.clavL,3,{y:0,ease:Elastic.easeOut}); break;
		        case "btxt3": window.txtactif= 3; this.parent.clign.x= this.parent.btxt3.x + 10 ; this.parent.clign.y= this.parent.btxt3.y +20; TweenMax.to(this.parent.clavL,3,{y:0,ease:Elastic.easeOut}); break;
		        case "btxt4": window.txtactif= 4; this.parent.clign.x= this.parent.btxt4.x + 10 ; this.parent.clign.y= this.parent.btxt4.y +20; TweenMax.to(this.parent.clavL,3,{y:0,ease:Elastic.easeOut}); break;
		        case "btxt5": window.txtactif= 5; this.parent.clign.x= this.parent.btxt5.x + 10 ; this.parent.clign.y= this.parent.btxt5.y +20; TweenMax.to(this.parent.clavL,3,{y:0,ease:Elastic.easeOut}); break;
				case "btxt6": window.txtactif= 6; this.parent.clign.x= this.parent.btxt6.x + 10 ; this.parent.clign.y= this.parent.btxt6.y +20; TweenMax.to(this.parent.clavL,3,{y:0,ease:Elastic.easeOut}); break;
		        default: window.txtactif= 1 ;this.parent.clign.x= this.parent.btxt1.x + 20 ; this.parent.clign.y= this.parent.btxt1.y +10;}
				/*
				for(var i=0;i<btxt.length;i++){
					if(e.target.name=='btxt'+i){
		            window.txtactif= i + 1; this.parent.clign.x= this.btxt[i].x + 10 ; this.clign.y= this.btxt[i].y +20; this.clavL.y= 0; break;
		            }
				}
				*/
		}
		
		var letters = new Array(this.حب , this.حت , this.حث ,this.حج , this.حح , this.حخ , this.حد , this.حذ , this.حر , this.حز ,
		 this.حس , this.حش , this.حص , this.حض , this.حط , this.حظ , this.حع , this.حغ , this.حف , this.حق , this.حك , this.حل ,
		 this.حم , this.حن , this.حه , this.حآ , this.حة , this.حأ ,this.حإ , this.حئ , this.حؤ , this.حء , this.حا , this.حو , this.حي ,
		 this.حى , this.حـ , this.حَ , this.حِ , this.حُ , this.حً , this.حٍ , this.حٌ , this.حْ , this.حّ , this.supr , this.esp  );
		
			
		
		this.frm.on("click", frm.bind(this));
		function frm(){ 
			this.parent.clavL.y = this.parent.rpr.y;}
				
		var letter = "";
		for(var i=0 ; i< letters.length ; i++){
			letters[i].on("click", write.bind(this));}
		function write(e){
		letter  = e.currentTarget.name ;
		word = letter.substr(1,1);
		
			for(var i = 0 ; i< txt.length ; i++){
			    if (window.txtactif== i+1){
				if(letter == "supr"){ vtxt= txt[i].text;txt[i].text = vtxt.substr(0, vtxt.length - 1);txt[i].color='blue';}
				else if (letter == "esp") { txt[i].text += " "; txt[i].color='blue';}	
			    else {txt[i].text += word ; txt[i].color='blue';}
			}
		}
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.supr = new lib.btnTr();
	this.supr.name = "supr";
	this.supr.parent = this;
	this.supr.setTransform(1.8,125.1,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.supr, 0, 1, 2, false, new lib.btnTr(), 3);

	this.esp = new lib.btnTr();
	this.esp.name = "esp";
	this.esp.parent = this;
	this.esp.setTransform(49.4,125.1,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.esp, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حة = new lib.btnTr();
	this.حة.name = "حة";
	this.حة.parent = this;
	this.حة.setTransform(92.8,125.1,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حة, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حآ = new lib.btnTr();
	this.حآ.name = "حآ";
	this.حآ.parent = this;
	this.حآ.setTransform(139.4,125.1,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حآ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حؤ = new lib.btnTr();
	this.حؤ.name = "حؤ";
	this.حؤ.parent = this;
	this.حؤ.setTransform(185.2,125.1,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حؤ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حئ = new lib.btnTr();
	this.حئ.name = "حئ";
	this.حئ.parent = this;
	this.حئ.setTransform(231.4,125.1,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حئ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حء = new lib.btnTr();
	this.حء.name = "حء";
	this.حء.parent = this;
	this.حء.setTransform(276.2,125.1,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حء, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حأ = new lib.btnTr();
	this.حأ.name = "حأ";
	this.حأ.parent = this;
	this.حأ.setTransform(321.6,125.1,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حأ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حإ = new lib.btnTr();
	this.حإ.name = "حإ";
	this.حإ.parent = this;
	this.حإ.setTransform(368,125.1,0.293,0.462,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.حإ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حـ = new lib.btnTr();
	this.حـ.name = "حـ";
	this.حـ.parent = this;
	this.حـ.setTransform(413.4,125.1,0.293,0.462,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.حـ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حّ = new lib.btnTr();
	this.حّ.name = "حّ";
	this.حّ.parent = this;
	this.حّ.setTransform(458.3,125.1,0.293,0.462,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.حّ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حْ = new lib.btnTr();
	this.حْ.name = "حْ";
	this.حْ.parent = this;
	this.حْ.setTransform(503.9,125.1,0.293,0.462,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.حْ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حى = new lib.btnTr();
	this.حى.name = "حى";
	this.حى.parent = this;
	this.حى.setTransform(1.8,83.2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.حى, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حي = new lib.btnTr();
	this.حي.name = "حي";
	this.حي.parent = this;
	this.حي.setTransform(48.4,84.2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.حي, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حو = new lib.btnTr();
	this.حو.name = "حو";
	this.حو.parent = this;
	this.حو.setTransform(93.8,83.2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.حو, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حه = new lib.btnTr();
	this.حه.name = "حه";
	this.حه.parent = this;
	this.حه.setTransform(139.4,83.2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.حه, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حن = new lib.btnTr();
	this.حن.name = "حن";
	this.حن.parent = this;
	this.حن.setTransform(184.8,84.2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.حن, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حم = new lib.btnTr();
	this.حم.name = "حم";
	this.حم.parent = this;
	this.حم.setTransform(230,83.2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.حم, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حل = new lib.btnTr();
	this.حل.name = "حل";
	this.حل.parent = this;
	this.حل.setTransform(276.2,84.2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.حل, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حك = new lib.btnTr();
	this.حك.name = "حك";
	this.حك.parent = this;
	this.حك.setTransform(321.6,84.2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.حك, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حق = new lib.btnTr();
	this.حق.name = "حق";
	this.حق.parent = this;
	this.حق.setTransform(368,84.1,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حق, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حف = new lib.btnTr();
	this.حف.name = "حف";
	this.حف.parent = this;
	this.حف.setTransform(413.4,84.1,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حف, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حٍ = new lib.btnTr();
	this.حٍ.name = "حٍ";
	this.حٍ.parent = this;
	this.حٍ.setTransform(458.7,84.1,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حٍ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حِ = new lib.btnTr();
	this.حِ.name = "حِ";
	this.حِ.parent = this;
	this.حِ.setTransform(503.9,84.1,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حِ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حغ = new lib.btnTr();
	this.حغ.name = "حغ";
	this.حغ.parent = this;
	this.حغ.setTransform(1.8,42.5,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حغ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حع = new lib.btnTr();
	this.حع.name = "حع";
	this.حع.parent = this;
	this.حع.setTransform(49.4,42.5,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حع, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حظ = new lib.btnTr();
	this.حظ.name = "حظ";
	this.حظ.parent = this;
	this.حظ.setTransform(92.8,42.5,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حظ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حط = new lib.btnTr();
	this.حط.name = "حط";
	this.حط.parent = this;
	this.حط.setTransform(139.4,42.5,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حط, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حض = new lib.btnTr();
	this.حض.name = "حض";
	this.حض.parent = this;
	this.حض.setTransform(184.8,42.5,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حض, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حص = new lib.btnTr();
	this.حص.name = "حص";
	this.حص.parent = this;
	this.حص.setTransform(230,42.5,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حص, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حش = new lib.btnTr();
	this.حش.name = "حش";
	this.حش.parent = this;
	this.حش.setTransform(276.2,43.5,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حش, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حس = new lib.btnTr();
	this.حس.name = "حس";
	this.حس.parent = this;
	this.حس.setTransform(321.6,43.5,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حس, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حز = new lib.btnTr();
	this.حز.name = "حز";
	this.حز.parent = this;
	this.حز.setTransform(368,42.5,0.293,0.462,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.حز, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حر = new lib.btnTr();
	this.حر.name = "حر";
	this.حر.parent = this;
	this.حر.setTransform(413.4,42.5,0.293,0.462,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.حر, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حٌ = new lib.btnTr();
	this.حٌ.name = "حٌ";
	this.حٌ.parent = this;
	this.حٌ.setTransform(458.7,42.5,0.293,0.462,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.حٌ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حُ = new lib.btnTr();
	this.حُ.name = "حُ";
	this.حُ.parent = this;
	this.حُ.setTransform(503.9,42.5,0.293,0.462,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.حُ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.frm = new lib.btnTr();
	this.frm.name = "frm";
	this.frm.parent = this;
	this.frm.setTransform(3.2,2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.frm, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حذ = new lib.btnTr();
	this.حذ.name = "حذ";
	this.حذ.parent = this;
	this.حذ.setTransform(49.4,2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.حذ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حد = new lib.btnTr();
	this.حد.name = "حد";
	this.حد.parent = this;
	this.حد.setTransform(92.8,2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.حد, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حخ = new lib.btnTr();
	this.حخ.name = "حخ";
	this.حخ.parent = this;
	this.حخ.setTransform(140.4,2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.حخ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حح = new lib.btnTr();
	this.حح.name = "حح";
	this.حح.parent = this;
	this.حح.setTransform(184.8,2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.حح, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حج = new lib.btnTr();
	this.حج.name = "حج";
	this.حج.parent = this;
	this.حج.setTransform(230,2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.حج, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حث = new lib.btnTr();
	this.حث.name = "حث";
	this.حث.parent = this;
	this.حث.setTransform(276.2,2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.حث, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حت = new lib.btnTr();
	this.حت.name = "حت";
	this.حت.parent = this;
	this.حت.setTransform(321.6,2,0.293,0.462,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.حت, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حب = new lib.btnTr();
	this.حب.name = "حب";
	this.حب.parent = this;
	this.حب.setTransform(368,1.9,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حب, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حا = new lib.btnTr();
	this.حا.name = "حا";
	this.حا.parent = this;
	this.حا.setTransform(413.4,1.9,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حا, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حً = new lib.btnTr();
	this.حً.name = "حً";
	this.حً.parent = this;
	this.حً.setTransform(458.7,1.9,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حً, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حَ = new lib.btnTr();
	this.حَ.name = "حَ";
	this.حَ.parent = this;
	this.حَ.setTransform(503.9,1.9,0.293,0.462,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حَ, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance = new lib.clavL();
	this.instance.parent = this;

	this.frm_1 = new lib.btnTr();
	this.frm_1.name = "frm_1";
	this.frm_1.parent = this;
	this.frm_1.setTransform(3.2,2.9,0.293,0.45,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.frm_1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حذ_1 = new lib.btnTr();
	this.حذ_1.name = "حذ_1";
	this.حذ_1.parent = this;
	this.حذ_1.setTransform(49.4,2.9,0.293,0.45,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حذ_1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حد_1 = new lib.btnTr();
	this.حد_1.name = "حد_1";
	this.حد_1.parent = this;
	this.حد_1.setTransform(92.8,2.9,0.293,0.45,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حد_1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حخ_1 = new lib.btnTr();
	this.حخ_1.name = "حخ_1";
	this.حخ_1.parent = this;
	this.حخ_1.setTransform(140.4,2.9,0.293,0.45,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حخ_1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حح_1 = new lib.btnTr();
	this.حح_1.name = "حح_1";
	this.حح_1.parent = this;
	this.حح_1.setTransform(183.8,2.9,0.293,0.45,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حح_1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حج_1 = new lib.btnTr();
	this.حج_1.name = "حج_1";
	this.حج_1.parent = this;
	this.حج_1.setTransform(230,2.9,0.293,0.45,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حج_1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حث_1 = new lib.btnTr();
	this.حث_1.name = "حث_1";
	this.حث_1.parent = this;
	this.حث_1.setTransform(276.2,2.9,0.293,0.45,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حث_1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حت_1 = new lib.btnTr();
	this.حت_1.name = "حت_1";
	this.حت_1.parent = this;
	this.حت_1.setTransform(321.6,1.9,0.293,0.45,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.حت_1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حب_1 = new lib.btnTr();
	this.حب_1.name = "حب_1";
	this.حب_1.parent = this;
	this.حب_1.setTransform(368,2.8,0.293,0.45,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.حب_1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حا_1 = new lib.btnTr();
	this.حا_1.name = "حا_1";
	this.حا_1.parent = this;
	this.حا_1.setTransform(413.4,2.8,0.293,0.45,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.حا_1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حً_1 = new lib.btnTr();
	this.حً_1.name = "حً_1";
	this.حً_1.parent = this;
	this.حً_1.setTransform(458.7,2.8,0.293,0.45,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.حً_1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.حَ_1 = new lib.btnTr();
	this.حَ_1.name = "حَ_1";
	this.حَ_1.parent = this;
	this.حَ_1.setTransform(503.9,2.8,0.293,0.45,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.حَ_1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_1 = new lib.clavL();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.حَ_1},{t:this.حً_1},{t:this.حا_1},{t:this.حب_1},{t:this.حت_1},{t:this.حث_1},{t:this.حج_1},{t:this.حح_1},{t:this.حخ_1},{t:this.حد_1},{t:this.حذ_1},{t:this.frm_1},{t:this.instance},{t:this.حَ},{t:this.حً},{t:this.حا},{t:this.حب},{t:this.حت},{t:this.حث},{t:this.حج},{t:this.حح},{t:this.حخ},{t:this.حد},{t:this.حذ},{t:this.frm},{t:this.حُ},{t:this.حٌ},{t:this.حر},{t:this.حز},{t:this.حس},{t:this.حش},{t:this.حص},{t:this.حض},{t:this.حط},{t:this.حظ},{t:this.حع},{t:this.حغ},{t:this.حِ},{t:this.حٍ},{t:this.حف},{t:this.حق},{t:this.حك},{t:this.حل},{t:this.حم},{t:this.حن},{t:this.حه},{t:this.حو},{t:this.حي},{t:this.حى},{t:this.حْ},{t:this.حّ},{t:this.حـ},{t:this.حإ},{t:this.حأ},{t:this.حء},{t:this.حئ},{t:this.حؤ},{t:this.حآ},{t:this.حة},{t:this.esp},{t:this.supr}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clavL_1, new cjs.Rectangle(0,0,550,165), null);


(lib.p7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var btxt = new Array(this.btxt1, this.btxt2 , this.btxt3, this.btxt4 , this.btxt5 );
		var txt = new Array(this.txt1, this.txt2 , this.txt3, this.txt4 , this.txt5 );
		/*
		for(var i = 0 ; i< btxt.length ; i++){
			btxt[i].on("click",selectedT.bind(this));}
			
			window.txtactif = 1;
			function selectedT(e){
				switch(e.target.name) {
		        case "btxt1": window.txtactif= 1; this.clign.x= this.btxt1.x + 10 ; this.clign.y= this.btxt1.y +20; this.clavL.y= 0; break;
				case "btxt2": window.txtactif= 2; this.clign.x= this.btxt2.x + 10 ; this.clign.y= this.btxt2.y +20; this.clavL.y= 0; break;
		        case "btxt3": window.txtactif= 3; this.clign.x= this.btxt3.x + 10 ; this.clign.y= this.btxt3.y +20; this.clavL.y= 0; break;
		        case "btxt4": window.txtactif= 4; this.clign.x= this.btxt4.x + 10 ; this.clign.y= this.btxt4.y +20; this.clavL.y= 0; break;
		        case "btxt5": window.txtactif= 5; this.clign.x= this.btxt5.x + 10 ; this.clign.y= this.btxt5.y +20; this.clavL.y= 0; break;
				default: window.txtactif= 1 ;this.clign.x= this.btxt1.x + 20 ; this.clign.y= this.btxt1.y +10;}
				}
		*/
		
		
		this.clv.on("click", clv.bind(this));
		function clv(){
			TweenMax.to(this.clavL,3,{y:0,ease:Elastic.easeOut});}
		
		
		this.verif.on("click" , verif.bind(this));
		function verif(){
			if(this.txt1.text == "صُ" || this.txt1.text == "صُـ" || this.txt1.text == "صـُ" ){ this.txt1.color = 'green';}
				else{this.txt1.color = 'red';}
			
				if(this.txt2.text == "ذُ"){ this.txt2.color = 'green';}
				else{this.txt2.color = 'red';}
				
				if(this.txt3.text == "طَ" || this.txt3.text == "طَـ"){ this.txt3.color = 'green';}
				else{this.txt3.color = 'red';}
				
				if(this.txt4.text == "زِ"){ this.txt4.color = 'green';}
				else{this.txt4.color = 'red';}
				
				if(this.txt5.text == "ضِ" || this.txt5.text == "ضِـ"){ this.txt5.color = 'green';}
				else{this.txt5.color = 'red';}
				
				if(this.txt1.text == "" || this.txt2.text == "" ||this.txt3.text == "" ||this.txt4.text == "" ||this.txt5.text == ""){
				
		        }		
				else if(this.txt1.color=='red' || this.txt2.color=='red' ||this.txt3.color=='red' ||this.txt4.color=='red' ||this.txt5.color=='red'){
					playSound("s9002");
				}
				else{playSound("s9001");}
			}
			
			this.repre.on("click" , repre.bind(this));
			
			function repre(){
				this.txt1.color ='blue';this.txt2.color ='blue' ;this.txt3.color ='blue' ;this.txt4.color ='blue' ;this.txt5.color ='blue';
				this.txt1.text="";this.txt2.text="";this.txt3.text="";this.txt4.text="";this.txt5.text="";
				}
				
			this.rep.on("click" , rep.bind(this));
			function rep(){
			this.txt1.color ='green';this.txt2.color ='green' ;this.txt3.color ='green' ;this.txt4.color ='green' ;this.txt5.color ='green';
			this.txt1.text="صُـ";this.txt2.text="ذُ";this.txt3.text="طَـ";this.txt4.text="زِ";this.txt5.text="ضِـ";
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt6 = new cjs.Text("", "40px 'Arial'", "#3300CC");
	this.txt6.name = "txt6";
	this.txt6.textAlign = "center";
	this.txt6.lineHeight = 47;
	this.txt6.lineWidth = 100;
	this.txt6.parent = this;
	this.txt6.setTransform(658.1,337.3);

	this.btxt6 = new lib.btnTr();
	this.btxt6.name = "btxt6";
	this.btxt6.parent = this;
	this.btxt6.setTransform(584.9,319.4,0.933,0.975,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.btxt6, 0, 1, 2, false, new lib.btnTr(), 3);

	this.rep = new lib.btnchkTr();
	this.rep.name = "rep";
	this.rep.parent = this;
	this.rep.setTransform(25.5,495.5,1,1,0,0,0,22.5,66.5);
	new cjs.ButtonHelper(this.rep, 0, 1, 2, false, new lib.btnchkTr(), 3);

	this.repre = new lib.btnchkTr();
	this.repre.name = "repre";
	this.repre.parent = this;
	this.repre.setTransform(25.5,361.5,1,1,0,0,0,22.5,66.5);
	new cjs.ButtonHelper(this.repre, 0, 1, 2, false, new lib.btnchkTr(), 3);

	this.verif = new lib.btnchkTr();
	this.verif.name = "verif";
	this.verif.parent = this;
	this.verif.setTransform(25.5,228.5,1,1,0,0,0,22.5,66.5);
	new cjs.ButtonHelper(this.verif, 0, 1, 2, false, new lib.btnchkTr(), 3);

	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(3,428);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,295);

	this.instance_2 = new lib.Bitmap1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3,162);

	this.clavL = new lib.clavL_1();
	this.clavL.name = "clavL";
	this.clavL.parent = this;
	this.clavL.setTransform(0,-196.3,0.996,0.848,0,0,0,0,-0.2);

	this.clv = new lib.clv();
	this.clv.name = "clv";
	this.clv.parent = this;
	this.clv.setTransform(285.8,35.1,0.878,0.778,0,0,0,49,42.1);
	new cjs.ButtonHelper(this.clv, 0, 1, 2, false, new lib.clv(), 3);

	this.txt5 = new cjs.Text("", "40px 'Arial'", "#3300CC");
	this.txt5.name = "txt5";
	this.txt5.textAlign = "center";
	this.txt5.lineHeight = 47;
	this.txt5.lineWidth = 100;
	this.txt5.parent = this;
	this.txt5.setTransform(131.6,569.5);

	this.txt4 = new cjs.Text("", "40px 'Arial'", "#3300CC");
	this.txt4.name = "txt4";
	this.txt4.textAlign = "center";
	this.txt4.lineHeight = 47;
	this.txt4.lineWidth = 100;
	this.txt4.parent = this;
	this.txt4.setTransform(281,569.5);

	this.txt3 = new cjs.Text("", "40px 'Arial'", "#3300CC");
	this.txt3.name = "txt3";
	this.txt3.textAlign = "center";
	this.txt3.lineHeight = 47;
	this.txt3.lineWidth = 100;
	this.txt3.parent = this;
	this.txt3.setTransform(426.5,569.5);

	this.txt2 = new cjs.Text("", "40px 'Arial'", "#3300CC");
	this.txt2.name = "txt2";
	this.txt2.textAlign = "center";
	this.txt2.lineHeight = 47;
	this.txt2.lineWidth = 100;
	this.txt2.parent = this;
	this.txt2.setTransform(125.8,321.3);

	this.txt1 = new cjs.Text("", "40px 'Arial'", "#3300CC");
	this.txt1.name = "txt1";
	this.txt1.textAlign = "center";
	this.txt1.lineHeight = 47;
	this.txt1.lineWidth = 100;
	this.txt1.parent = this;
	this.txt1.setTransform(274,321.3);

	this.rpr = new lib.rpr();
	this.rpr.name = "rpr";
	this.rpr.parent = this;
	this.rpr.setTransform(0.8,-142.7);

	this.clign = new lib.clignM();
	this.clign.name = "clign";
	this.clign.parent = this;
	this.clign.setTransform(210.5,323.4,3,1);

	this.btxt5 = new lib.btnTr();
	this.btxt5.name = "btxt5";
	this.btxt5.parent = this;
	this.btxt5.setTransform(59.1,551.9,0.933,0.975,0,0,0,0.1,0.4);
	new cjs.ButtonHelper(this.btxt5, 0, 1, 2, false, new lib.btnTr(), 3);

	this.btxt4 = new lib.btnTr();
	this.btxt4.name = "btxt4";
	this.btxt4.parent = this;
	this.btxt4.setTransform(207.4,551.9,0.933,0.975,0,0,0,0.4,0.4);
	new cjs.ButtonHelper(this.btxt4, 0, 1, 2, false, new lib.btnTr(), 3);

	this.btxt3 = new lib.btnTr();
	this.btxt3.name = "btxt3";
	this.btxt3.parent = this;
	this.btxt3.setTransform(353.3,551.6,0.933,0.975,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.btxt3, 0, 1, 2, false, new lib.btnTr(), 3);

	this.btxt2 = new lib.btnTr();
	this.btxt2.name = "btxt2";
	this.btxt2.parent = this;
	this.btxt2.setTransform(56.9,309.6,0.933,0.975,0,0,0,0.1,0.4);
	new cjs.ButtonHelper(this.btxt2, 0, 1, 2, false, new lib.btnTr(), 3);

	this.btxt1 = new lib.btnTr();
	this.btxt1.name = "btxt1";
	this.btxt1.parent = this;
	this.btxt1.setTransform(203.6,308.9,0.934,0.975,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btxt1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_3 = new lib.p7i();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.btxt1},{t:this.btxt2},{t:this.btxt3},{t:this.btxt4},{t:this.btxt5},{t:this.clign},{t:this.rpr},{t:this.txt1},{t:this.txt2},{t:this.txt3},{t:this.txt4},{t:this.txt5},{t:this.clv},{t:this.clavL},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.verif},{t:this.repre},{t:this.rep},{t:this.btxt6},{t:this.txt6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p7, new cjs.Rectangle(-4,-196.1,728.5,866.2), null);


(lib.p6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		var btxt = new Array(this.btxt1, this.btxt2 , this.btxt3, this.btxt4 , this.btxt5 );
		var txt = new Array(this.txt1, this.txt2 , this.txt3, this.txt4 , this.txt5 );
		
		for(var i = 0 ; i< btxt.length ; i++){
			btxt[i].on("click",selectedT.bind(this));}
			
			window.txtactif = 1;
			function selectedT(e){
				switch(e.target.name) {
		        case "btxt1": window.txtactif= 1; this.clign.x= this.btxt1.x + 10 ; this.clign.y= this.btxt1.y +20; this.clavL.y= 0; break;
				case "btxt2": window.txtactif= 2; this.clign.x= this.btxt2.x + 10 ; this.clign.y= this.btxt2.y +20; this.clavL.y= 0; break;
		        case "btxt3": window.txtactif= 3; this.clign.x= this.btxt3.x + 10 ; this.clign.y= this.btxt3.y +20; this.clavL.y= 0; break;
		        case "btxt4": window.txtactif= 4; this.clign.x= this.btxt4.x + 10 ; this.clign.y= this.btxt4.y +20; this.clavL.y= 0; break;
		        case "btxt5": window.txtactif= 5; this.clign.x= this.btxt5.x + 10 ; this.clign.y= this.btxt5.y +20; this.clavL.y= 0; break;
				default: window.txtactif= 1 ;this.clign.x= this.btxt1.x + 20 ; this.clign.y= this.btxt1.y +10;}
				}
		
		*/
		
		
		this.clv.on("click", clv.bind(this));
		function clv(){
			
			TweenMax.to(this.clavL,3,{y:0,ease:Elastic.easeOut});
			//this.clavL.y=0;
			}
		
		
		this.verif.on("click" , verif.bind(this));
		function verif(){
			if(this.txt1.text == "ما"){ this.txt1.color = 'green';}
				else{this.txt1.color = 'red';}
			
				if(this.txt2.text == "رُ"){ this.txt2.color = 'green';}
				else{this.txt2.color = 'red';}
				
				if(this.txt3.text == "با"){ this.txt3.color = 'green';}
				else{this.txt3.color = 'red';}
				
				if(this.txt4.text == "سو"){ this.txt4.color = 'green';}
				else{this.txt4.color = 'red';}
				
				if(this.txt5.text == "في" || this.txt5.text == "فيـ"){ this.txt5.color = 'green';}
				else{this.txt5.color = 'red';}
				
				if(this.txt1.text == "" || this.txt2.text == "" ||this.txt3.text == "" ||this.txt4.text == "" ||this.txt5.text == ""){
				
		        }
				else if(this.txt1.color=='red' || this.txt2.color=='red' ||this.txt3.color=='red' ||this.txt4.color=='red' ||this.txt5.color=='red'){
					playSound("s9002");
				}
				else{playSound("s9001");}
			}
			
			this.repre.on("click" , repre.bind(this));
			
			function repre(){
				this.txt1.color ='blue';this.txt2.color ='blue' ;this.txt3.color ='blue' ;this.txt4.color ='blue' ;this.txt5.color ='blue';
				this.txt1.text="";this.txt2.text="";this.txt3.text="";this.txt4.text="";this.txt5.text="";
				}
				
			this.rep.on("click" , rep.bind(this));
			function rep(){
			this.txt1.color ='green';this.txt2.color ='green' ;this.txt3.color ='green' ;this.txt4.color ='green' ;this.txt5.color ='green';
			this.txt1.text="ما";this.txt2.text="رُ";this.txt3.text="با";this.txt4.text="سو";this.txt5.text="فيـ";
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt6 = new cjs.Text("", "40px 'Arial'", "#3300CC");
	this.txt6.name = "txt6";
	this.txt6.textAlign = "center";
	this.txt6.lineHeight = 47;
	this.txt6.lineWidth = 100;
	this.txt6.parent = this;
	this.txt6.setTransform(651,157.4);

	this.btxt6 = new lib.btnTr();
	this.btxt6.name = "btxt6";
	this.btxt6.parent = this;
	this.btxt6.setTransform(582.6,144,0.934,0.975,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btxt6, 0, 1, 2, false, new lib.btnTr(), 3);

	this.txt5 = new cjs.Text("", "40px 'Arial'", "#3300CC");
	this.txt5.name = "txt5";
	this.txt5.textAlign = "center";
	this.txt5.lineHeight = 47;
	this.txt5.lineWidth = 100;
	this.txt5.parent = this;
	this.txt5.setTransform(125.6,560);

	this.txt4 = new cjs.Text("", "40px 'Arial'", "#3300CC");
	this.txt4.name = "txt4";
	this.txt4.textAlign = "center";
	this.txt4.lineHeight = 47;
	this.txt4.lineWidth = 100;
	this.txt4.parent = this;
	this.txt4.setTransform(268,560);

	this.txt3 = new cjs.Text("", "40px 'Arial'", "#3300CC");
	this.txt3.name = "txt3";
	this.txt3.textAlign = "center";
	this.txt3.lineHeight = 47;
	this.txt3.lineWidth = 100;
	this.txt3.parent = this;
	this.txt3.setTransform(417.5,560.5);

	this.txt2 = new cjs.Text("", "40px 'Arial'", "#3300CC");
	this.txt2.name = "txt2";
	this.txt2.textAlign = "center";
	this.txt2.lineHeight = 47;
	this.txt2.lineWidth = 100;
	this.txt2.parent = this;
	this.txt2.setTransform(125.8,313.3);

	this.txt1 = new cjs.Text("", "40px 'Arial'", "#3300CC");
	this.txt1.name = "txt1";
	this.txt1.textAlign = "center";
	this.txt1.lineHeight = 47;
	this.txt1.lineWidth = 100;
	this.txt1.parent = this;
	this.txt1.setTransform(268,313.3);

	this.rep = new lib.btnchkTr();
	this.rep.name = "rep";
	this.rep.parent = this;
	this.rep.setTransform(25.5,495.5,1,1,0,0,0,22.5,66.5);
	new cjs.ButtonHelper(this.rep, 0, 1, 2, false, new lib.btnchkTr(), 3);

	this.repre = new lib.btnchkTr();
	this.repre.name = "repre";
	this.repre.parent = this;
	this.repre.setTransform(25.5,361.5,1,1,0,0,0,22.5,66.5);
	new cjs.ButtonHelper(this.repre, 0, 1, 2, false, new lib.btnchkTr(), 3);

	this.verif = new lib.btnchkTr();
	this.verif.name = "verif";
	this.verif.parent = this;
	this.verif.setTransform(25.5,228.5,1,1,0,0,0,22.5,66.5);
	new cjs.ButtonHelper(this.verif, 0, 1, 2, false, new lib.btnchkTr(), 3);

	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(3,428);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,295);

	this.instance_2 = new lib.Bitmap1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3,162);

	this.clavL = new lib.clavL_1();
	this.clavL.name = "clavL";
	this.clavL.parent = this;
	this.clavL.setTransform(0,-150.1,0.996,0.848);

	this.clv = new lib.clv();
	this.clv.name = "clv";
	this.clv.parent = this;
	this.clv.setTransform(285.8,35.1,0.878,0.778,0,0,0,49,42.1);
	new cjs.ButtonHelper(this.clv, 0, 1, 2, false, new lib.clv(), 3);

	this.rpr = new lib.rpr();
	this.rpr.name = "rpr";
	this.rpr.parent = this;
	this.rpr.setTransform(0.8,-195.7);

	this.clign = new lib.clignM();
	this.clign.name = "clign";
	this.clign.parent = this;
	this.clign.setTransform(207.5,299.4,3,1);

	this.btxt5 = new lib.btnTr();
	this.btxt5.name = "btxt5";
	this.btxt5.parent = this;
	this.btxt5.setTransform(54.1,545.9,0.933,0.975,0,0,0,0.1,0.4);
	new cjs.ButtonHelper(this.btxt5, 0, 1, 2, false, new lib.btnTr(), 3);

	this.btxt4 = new lib.btnTr();
	this.btxt4.name = "btxt4";
	this.btxt4.parent = this;
	this.btxt4.setTransform(199.4,545.9,0.933,0.975,0,0,0,0.4,0.4);
	new cjs.ButtonHelper(this.btxt4, 0, 1, 2, false, new lib.btnTr(), 3);

	this.btxt3 = new lib.btnTr();
	this.btxt3.name = "btxt3";
	this.btxt3.parent = this;
	this.btxt3.setTransform(350.3,545.6,0.933,0.975,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.btxt3, 0, 1, 2, false, new lib.btnTr(), 3);

	this.btxt2 = new lib.btnTr();
	this.btxt2.name = "btxt2";
	this.btxt2.parent = this;
	this.btxt2.setTransform(53.9,299.6,0.933,0.975,0,0,0,0.1,0.4);
	new cjs.ButtonHelper(this.btxt2, 0, 1, 2, false, new lib.btnTr(), 3);

	this.btxt1 = new lib.btnTr();
	this.btxt1.name = "btxt1";
	this.btxt1.parent = this;
	this.btxt1.setTransform(199.6,299.9,0.934,0.975,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btxt1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_3 = new lib._006();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1.046,1.001);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AFB1B4").ss(2.8,1,1).p("EghJgTSIUAAAEghFATTIUAAAANKTTIUAAAAqbTTIT/AAAqLzIIT/AA");
	this.shape.setTransform(271.3,466.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.btxt1},{t:this.btxt2},{t:this.btxt3},{t:this.btxt4},{t:this.btxt5},{t:this.clign},{t:this.rpr},{t:this.clv},{t:this.clavL},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.verif},{t:this.repre},{t:this.rep},{t:this.txt1},{t:this.txt2},{t:this.txt3},{t:this.txt4},{t:this.txt5},{t:this.btxt6},{t:this.txt6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p6, new cjs.Rectangle(-4,-200.6,726.6,870.7), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver(10);
		stage.mouseMoveOutside = true;
		
		var firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
		if (firefox && createjs)
		{
		  createjs.Text.prototype._drawTextLine = function(ctx, text, y)
		  {
		  // Adjust text position only if textBaseline is "top"
		  if (this.textBaseline === "top")
		  {
		  var lineHeight = this.lineHeight || this.getMeasuredLineHeight();
		  y += lineHeight * 0.06;
		  }
		  // Chrome 17 will fail to draw the text if the last param is included but null, so we feed it a large value instead:
		  if (this.outline) { ctx.strokeText(text, 0, y, this.maxWidth||0xFFFF); }
		  else { ctx.fillText(text, 0, y, this.maxWidth||0xFFFF); }
		  };
		}
		var pg = [new lib.p5() , new lib.p6(),new lib.p7(),new lib.p8()];
		
		var np; var txtactif=1;
		var container1 = new createjs.Container();
		var container2 = new createjs.Container();
		container1.name = 'pags';
		container2.name = 'navs';
		
		this.addChild(container1,container2);
		container1.x =5; container1.y=5; container2.x=5 , container2.y=5;
		
		p5 = new lib.p5();
		p5.name= 'p5';
		container1.addChild(p5);
		
		var nav = new lib.nav(); 
		nav.name = 'nav';
		nav.pr.visible=false; 
		container2.addChild(nav);
		
		this.setChildIndex( container2, this.getNumChildren()-1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '8D4C0671D4D96B4689C38B4633B478C1',
	width: 560,
	height: 680,
	fps: 24,
	color: "#996666",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1519563375039", id:"index_atlas_"}
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;