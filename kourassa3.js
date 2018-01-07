(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"kourassa3_atlas_", frames: [[1104,0,533,670],[0,0,550,670],[0,672,527,671],[529,672,523,669],[1312,672,154,84],[1312,758,154,84],[0,1345,3,36],[1054,672,256,256],[1054,930,256,256],[1054,1188,128,128],[552,0,550,670],[1054,1318,333,43],[1312,844,150,80],[1312,926,150,80],[1312,1008,150,80],[529,1343,100,80]]}
];


// symbols:



(lib._0 = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.p4 = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.brdnR = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.brdnS = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.clign = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hm1 = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hm2 = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.lp_i = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.prp = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.recherch = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.rempRg = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.rmpjR = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.rmprR = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.svI = function() {
	this.spriteSheet = ss["kourassa3_atlas_"];
	this.gotoAndStop(15);
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


(lib.rempRmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.rempRg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rempRmc, new cjs.Rectangle(0,0,150,80), null);


(lib.lp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lp_i();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.25,0.25);

	this.instance_1 = new lib.rempRg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.22,0.413);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


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


(lib.clignM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.clign();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.333,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},19).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,33);


(lib.btnS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.brdnR();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.039,0.952);

	this.instance_1 = new lib.rmprR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.067,0.952);

	this.instance_2 = new lib.rmpjR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1.067,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleY:0.952}},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleY:0.952}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleY:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,80);


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
	this.text = new cjs.Text("2", "bold 23px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(268.1,633.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_1
	this.pr = new lib.sv();
	this.pr.name = "pr";
	this.pr.parent = this;
	this.pr.setTransform(491.8,646.7,0.706,0.667,0,0,180,80,40.3);
	new cjs.ButtonHelper(this.pr, 0, 1, 2, false, new lib.sv(), 3);

	this.sv = new lib.sv();
	this.sv.name = "sv";
	this.sv.parent = this;
	this.sv.setTransform(9,621.2,0.706,0.667);
	new cjs.ButtonHelper(this.sv, 0, 1, 2, false, new lib.sv(), 3);

	this.hm = new lib.hm();
	this.hm.name = "hm";
	this.hm.parent = this;
	this.hm.setTransform(10.6,11.5,0.75,0.75);
	new cjs.ButtonHelper(this.hm, 0, 1, 2, false, new lib.hm(), 3);

	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.hm},{t:this.sv},{t:this.pr}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(4,5,550,670), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pr.on("click", p0.bind(this));
		this.hm.on("click", p0.bind(this));
		function p0(){this.parent.addChild(new lib.p0());this.parent.removeChild(this);}
		
		this.sv.on("click", p2.bind(this));
		function p2(){this.parent.addChild(new lib.p2());this.parent.removeChild(this);}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// action
	this.hm = new lib.hm();
	this.hm.name = "hm";
	this.hm.parent = this;
	this.hm.setTransform(8.2,7.8,0.75,0.75);
	new cjs.ButtonHelper(this.hm, 0, 1, 2, false, new lib.hm(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hm).wait(1));

	// Layer_1
	this.pr = new lib.sv();
	this.pr.name = "pr";
	this.pr.parent = this;
	this.pr.setTransform(550.1,620.3,0.706,0.667,0,0,180);
	new cjs.ButtonHelper(this.pr, 0, 1, 2, false, new lib.sv(), 3);

	this.sv = new lib.sv();
	this.sv.name = "sv";
	this.sv.parent = this;
	this.sv.setTransform(7.9,621.7,0.706,0.667);
	new cjs.ButtonHelper(this.sv, 0, 1, 2, false, new lib.sv(), 3);

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

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(4,5,550,670), null);


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
	this.text = new cjs.Text("إِرْشـاداتٌ", "bold 45px 'Arial'", "#CC0033");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 179;
	this.text.parent = this;
	this.text.setTransform(131.9,355.3);

	this.ori = new lib.btnS();
	this.ori.name = "ori";
	this.ori.parent = this;
	this.ori.setTransform(132.4,375.4,1,1,0,0,0,80,40);
	new cjs.ButtonHelper(this.ori, 0, 1, 2, false, new lib.btnS(), 3);

	this.text_1 = new cjs.Text("حَــــوْلَ\nالْــبَــرْنـامَجِ", "bold 35px 'Arial'", "#CC0033");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 179;
	this.text_1.parent = this;
	this.text_1.setTransform(171.9,237.8);

	this.prp = new lib.btnS();
	this.prp.name = "prp";
	this.prp.parent = this;
	this.prp.setTransform(169.8,270.6,1,1,0,0,0,80.5,40);
	new cjs.ButtonHelper(this.prp, 0, 1, 2, false, new lib.btnS(), 3);

	this.text_2 = new cjs.Text("الْفَهْرَسُ\nوَ الصَّفَحاتُ", "bold 35px 'Arial'", "#CC0033");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 33;
	this.text_2.lineWidth = 179;
	this.text_2.parent = this;
	this.text_2.setTransform(171.9,456.3);

	this.idx = new lib.btnS();
	this.idx.name = "idx";
	this.idx.parent = this;
	this.idx.setTransform(172.4,485,1,1,0,0,0,80,40);
	new cjs.ButtonHelper(this.idx, 0, 1, 2, false, new lib.btnS(), 3);

	this.sv = new lib.sv();
	this.sv.name = "sv";
	this.sv.parent = this;
	this.sv.setTransform(11.8,617,0.706,0.667,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.sv, 0, 1, 2, false, new lib.sv(), 3);

	this.instance = new lib._0();
	this.instance.parent = this;
	this.instance.setTransform(4,5,1.032,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.sv},{t:this.idx},{t:this.text_2},{t:this.prp},{t:this.text_1},{t:this.ori},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p0, new cjs.Rectangle(4,5,550,670), null);


(lib.btnTr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.brdnS();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.974,0.952);

	this.instance_1 = new lib.rempRmc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75,40,1,1,0,0,0,75,40);
	this.instance_1.alpha = 0.211;

	this.instance_2 = new lib.rempRg();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1,p:{alpha:0.211}}]},1).to({state:[{t:this.instance_1,p:{alpha:0.121}}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,80);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		root=this;
		this.hm.on("click", p0.bind(this));
		function p0(){this.parent.addChild(new lib.p0()); this.parent.removeChild(this); }
		
		this.pr.on("click", p3.bind(this));
		function p3(){this.parent.addChild(new lib.p3()); this.parent.removeChild(this); }
		
		this.sv.on("click", p6.bind(this));
		function p6(){this.parent.addChild(new lib.p6()); this.parent.removeChild(this);}
		var btns = new Array(this.s1, this.s2, this.s3, this.s4, this.s5, this.s6, this.s7, this.s8, this.s9, this.s10, this.s11, this.s12, this.s13, this.s14,
		this.s15,this.s16, this.s17, this.s18, this.s19, this.s20, this.s21, this.s22, this.s23, this.s24, this.s25, this.s26, this.s27, this.s28, this.s29, this.s30,
		this.s31, this.s32, this.s33, this.s34, this.s35, this.s36, this.s37, this.s38, this.s39, this.s40, this.s41, this.s42, this.s43, this.s44, this.s45,
		this.s46, this.s47, this.s48, this.s49, this.s50, this.s51, this.s52, this.s53, this.s54, this.s55, this.s56, this.s57, this.s58, this.s59, this.s60);
		                      
		
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
	this.s45 = new lib.btnTr();
	this.s45.name = "s45";
	this.s45.parent = this;
	this.s45.setTransform(56.6,457.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s45, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s44 = new lib.btnTr();
	this.s44.name = "s44";
	this.s44.parent = this;
	this.s44.setTransform(145.8,457.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s44, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s43 = new lib.btnTr();
	this.s43.name = "s43";
	this.s43.parent = this;
	this.s43.setTransform(235,457.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s43, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s42 = new lib.btnTr();
	this.s42.name = "s42";
	this.s42.parent = this;
	this.s42.setTransform(324.3,457.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s42, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s60 = new lib.btnTr();
	this.s60.name = "s60";
	this.s60.parent = this;
	this.s60.setTransform(56.6,578.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s60, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s59 = new lib.btnTr();
	this.s59.name = "s59";
	this.s59.parent = this;
	this.s59.setTransform(145.8,578.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s59, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s58 = new lib.btnTr();
	this.s58.name = "s58";
	this.s58.parent = this;
	this.s58.setTransform(235,578.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s58, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s57 = new lib.btnTr();
	this.s57.name = "s57";
	this.s57.parent = this;
	this.s57.setTransform(324.3,578.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s57, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s56 = new lib.btnTr();
	this.s56.name = "s56";
	this.s56.parent = this;
	this.s56.setTransform(413.5,578.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s56, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s55 = new lib.btnTr();
	this.s55.name = "s55";
	this.s55.parent = this;
	this.s55.setTransform(56.6,538.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s55, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s54 = new lib.btnTr();
	this.s54.name = "s54";
	this.s54.parent = this;
	this.s54.setTransform(145.8,538.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s54, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s53 = new lib.btnTr();
	this.s53.name = "s53";
	this.s53.parent = this;
	this.s53.setTransform(235,538.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s53, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s52 = new lib.btnTr();
	this.s52.name = "s52";
	this.s52.parent = this;
	this.s52.setTransform(324.3,538.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s52, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s51 = new lib.btnTr();
	this.s51.name = "s51";
	this.s51.parent = this;
	this.s51.setTransform(413.5,538.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s51, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s50 = new lib.btnTr();
	this.s50.name = "s50";
	this.s50.parent = this;
	this.s50.setTransform(56.6,498.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s50, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s49 = new lib.btnTr();
	this.s49.name = "s49";
	this.s49.parent = this;
	this.s49.setTransform(145.8,498.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s49, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s48 = new lib.btnTr();
	this.s48.name = "s48";
	this.s48.parent = this;
	this.s48.setTransform(235,498.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s48, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s47 = new lib.btnTr();
	this.s47.name = "s47";
	this.s47.parent = this;
	this.s47.setTransform(324.3,498.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s47, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s46 = new lib.btnTr();
	this.s46.name = "s46";
	this.s46.parent = this;
	this.s46.setTransform(413.5,498.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s46, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s41 = new lib.btnTr();
	this.s41.name = "s41";
	this.s41.parent = this;
	this.s41.setTransform(413.5,457.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s41, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s40 = new lib.btnTr();
	this.s40.name = "s40";
	this.s40.parent = this;
	this.s40.setTransform(56.6,417.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s40, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s39 = new lib.btnTr();
	this.s39.name = "s39";
	this.s39.parent = this;
	this.s39.setTransform(145.8,417.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s39, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s38 = new lib.btnTr();
	this.s38.name = "s38";
	this.s38.parent = this;
	this.s38.setTransform(235,417.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s38, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s37 = new lib.btnTr();
	this.s37.name = "s37";
	this.s37.parent = this;
	this.s37.setTransform(324.3,417.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s37, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s36 = new lib.btnTr();
	this.s36.name = "s36";
	this.s36.parent = this;
	this.s36.setTransform(413.5,417.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s36, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s35 = new lib.btnTr();
	this.s35.name = "s35";
	this.s35.parent = this;
	this.s35.setTransform(56.6,377.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s35, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s34 = new lib.btnTr();
	this.s34.name = "s34";
	this.s34.parent = this;
	this.s34.setTransform(145.8,377.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s34, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s33 = new lib.btnTr();
	this.s33.name = "s33";
	this.s33.parent = this;
	this.s33.setTransform(235,377.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s33, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s32 = new lib.btnTr();
	this.s32.name = "s32";
	this.s32.parent = this;
	this.s32.setTransform(324.3,377.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s32, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s31 = new lib.btnTr();
	this.s31.name = "s31";
	this.s31.parent = this;
	this.s31.setTransform(413.5,377.5,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s31, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s30 = new lib.btnTr();
	this.s30.name = "s30";
	this.s30.parent = this;
	this.s30.setTransform(56.6,338,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s30, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s29 = new lib.btnTr();
	this.s29.name = "s29";
	this.s29.parent = this;
	this.s29.setTransform(145.8,338,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s29, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s28 = new lib.btnTr();
	this.s28.name = "s28";
	this.s28.parent = this;
	this.s28.setTransform(235,338,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s28, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s27 = new lib.btnTr();
	this.s27.name = "s27";
	this.s27.parent = this;
	this.s27.setTransform(324.3,338,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s27, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s26 = new lib.btnTr();
	this.s26.name = "s26";
	this.s26.parent = this;
	this.s26.setTransform(413.5,338,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s26, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s25 = new lib.btnTr();
	this.s25.name = "s25";
	this.s25.parent = this;
	this.s25.setTransform(56.6,298,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s25, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s24 = new lib.btnTr();
	this.s24.name = "s24";
	this.s24.parent = this;
	this.s24.setTransform(145.8,298,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s24, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s23 = new lib.btnTr();
	this.s23.name = "s23";
	this.s23.parent = this;
	this.s23.setTransform(235,298,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s23, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s22 = new lib.btnTr();
	this.s22.name = "s22";
	this.s22.parent = this;
	this.s22.setTransform(324.3,298,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s22, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s21 = new lib.btnTr();
	this.s21.name = "s21";
	this.s21.parent = this;
	this.s21.setTransform(413.5,298,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s21, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s20 = new lib.btnTr();
	this.s20.name = "s20";
	this.s20.parent = this;
	this.s20.setTransform(56.6,258,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s20, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s19 = new lib.btnTr();
	this.s19.name = "s19";
	this.s19.parent = this;
	this.s19.setTransform(145.8,258,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s19, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s18 = new lib.btnTr();
	this.s18.name = "s18";
	this.s18.parent = this;
	this.s18.setTransform(235,258,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s18, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s17 = new lib.btnTr();
	this.s17.name = "s17";
	this.s17.parent = this;
	this.s17.setTransform(324.3,258,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s17, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s16 = new lib.btnTr();
	this.s16.name = "s16";
	this.s16.parent = this;
	this.s16.setTransform(413.5,258,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s16, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s15 = new lib.btnTr();
	this.s15.name = "s15";
	this.s15.parent = this;
	this.s15.setTransform(56.6,217,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s15, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s14 = new lib.btnTr();
	this.s14.name = "s14";
	this.s14.parent = this;
	this.s14.setTransform(145.8,217,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s14, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s13 = new lib.btnTr();
	this.s13.name = "s13";
	this.s13.parent = this;
	this.s13.setTransform(235,217,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s13, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s12 = new lib.btnTr();
	this.s12.name = "s12";
	this.s12.parent = this;
	this.s12.setTransform(324.3,217,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s12, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s11 = new lib.btnTr();
	this.s11.name = "s11";
	this.s11.parent = this;
	this.s11.setTransform(413.5,217,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s11, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s10 = new lib.btnTr();
	this.s10.name = "s10";
	this.s10.parent = this;
	this.s10.setTransform(56.6,177,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s10, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s9 = new lib.btnTr();
	this.s9.name = "s9";
	this.s9.parent = this;
	this.s9.setTransform(145.8,177,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s9, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s8 = new lib.btnTr();
	this.s8.name = "s8";
	this.s8.parent = this;
	this.s8.setTransform(235,177,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s8, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s7 = new lib.btnTr();
	this.s7.name = "s7";
	this.s7.parent = this;
	this.s7.setTransform(324.3,177,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s7, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s6 = new lib.btnTr();
	this.s6.name = "s6";
	this.s6.parent = this;
	this.s6.setTransform(413.5,177,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s6, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s5 = new lib.btnTr();
	this.s5.name = "s5";
	this.s5.parent = this;
	this.s5.setTransform(56.6,137,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s5, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s4 = new lib.btnTr();
	this.s4.name = "s4";
	this.s4.parent = this;
	this.s4.setTransform(145.8,137,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s4, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s3 = new lib.btnTr();
	this.s3.name = "s3";
	this.s3.parent = this;
	this.s3.setTransform(235,137,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s3, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s2 = new lib.btnTr();
	this.s2.name = "s2";
	this.s2.parent = this;
	this.s2.setTransform(324.3,137,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s2, 0, 1, 2, false, new lib.btnTr(), 3);

	this.s1 = new lib.btnTr();
	this.s1.name = "s1";
	this.s1.parent = this;
	this.s1.setTransform(413.5,137,0.58,0.475,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.s1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.pr = new lib.sv();
	this.pr.name = "pr";
	this.pr.parent = this;
	this.pr.setTransform(489.8,647.3,0.706,0.667,0,0,180,79.9,40.2);
	new cjs.ButtonHelper(this.pr, 0, 1, 2, false, new lib.sv(), 3);

	this.sv = new lib.sv();
	this.sv.name = "sv";
	this.sv.parent = this;
	this.sv.setTransform(14,620.7,0.706,0.667,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.sv, 0, 1, 2, false, new lib.sv(), 3);

	this.hm = new lib.hm();
	this.hm.name = "hm";
	this.hm.parent = this;
	this.hm.setTransform(13.7,16.1,0.75,0.75);
	new cjs.ButtonHelper(this.hm, 0, 1, 2, false, new lib.hm(), 3);

	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(4,5,1.052,1.001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.hm},{t:this.sv},{t:this.pr},{t:this.s1},{t:this.s2},{t:this.s3},{t:this.s4},{t:this.s5},{t:this.s6},{t:this.s7},{t:this.s8},{t:this.s9},{t:this.s10},{t:this.s11},{t:this.s12},{t:this.s13},{t:this.s14},{t:this.s15},{t:this.s16},{t:this.s17},{t:this.s18},{t:this.s19},{t:this.s20},{t:this.s21},{t:this.s22},{t:this.s23},{t:this.s24},{t:this.s25},{t:this.s26},{t:this.s27},{t:this.s28},{t:this.s29},{t:this.s30},{t:this.s31},{t:this.s32},{t:this.s33},{t:this.s34},{t:this.s35},{t:this.s36},{t:this.s37},{t:this.s38},{t:this.s39},{t:this.s40},{t:this.s41},{t:this.s46},{t:this.s47},{t:this.s48},{t:this.s49},{t:this.s50},{t:this.s51},{t:this.s52},{t:this.s53},{t:this.s54},{t:this.s55},{t:this.s56},{t:this.s57},{t:this.s58},{t:this.s59},{t:this.s60},{t:this.s42},{t:this.s43},{t:this.s44},{t:this.s45}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(4,5,550,670), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		//var st = document.getElementById("ch") ;
		
		this.hm.on("click", p0.bind(this));
		function p0(){this.parent.addChild(new lib.p0()); this.parent.removeChild(this); }
		
		this.pr.on("click", p2.bind(this));
		function p2(){this.parent.addChild(new lib.p2()); this.parent.removeChild(this); }
		
		this.sv.on("click", p5.bind(this));
		function p5(){this.parent.addChild(new lib.p5()); this.parent.removeChild(this);}
		
		//this.sv.on("click", p4.bind(this));
		//function p4(){this.parent.addChild(new lib.p4()); this.parent.removeChild(this);}
		
		/*
		this.lp.on("click", p.bind(this));
		
		function p(){
		var pg = new Array(new lib.p0(),new lib.p1(),new lib.p2(),new lib.p3(),new lib.p4(),new lib.p5());
		var t = document.getElementById("ch").value ;
		this.parent.addChild(pg[t]); this.parent.removeChild(this);}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.text = new cjs.Text("أُراجِــــعُ : ..................   5", "bold 18px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.lineWidth = 184;
	this.text.parent = this;
	this.text.setTransform(187.1,92.1);

	this.instance = new lib.btnTr();
	this.instance.parent = this;
	this.instance.setTransform(174.5,105,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_1 = new lib.btnTr();
	this.instance_1.parent = this;
	this.instance_1.setTransform(65.5,540.8,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_2 = new lib.btnTr();
	this.instance_2.parent = this;
	this.instance_2.setTransform(65.5,491.9,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_3 = new lib.btnTr();
	this.instance_3.parent = this;
	this.instance_3.setTransform(65.5,442.9,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_4 = new lib.btnTr();
	this.instance_4.parent = this;
	this.instance_4.setTransform(65.5,394.9,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_5 = new lib.btnTr();
	this.instance_5.parent = this;
	this.instance_5.setTransform(65.5,346.9,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_6 = new lib.btnTr();
	this.instance_6.parent = this;
	this.instance_6.setTransform(65.5,298.9,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_7 = new lib.btnTr();
	this.instance_7.parent = this;
	this.instance_7.setTransform(65.5,250.9,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_8 = new lib.btnTr();
	this.instance_8.parent = this;
	this.instance_8.setTransform(65.5,202.9,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_9 = new lib.btnTr();
	this.instance_9.parent = this;
	this.instance_9.setTransform(65.5,155,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_10 = new lib.btnTr();
	this.instance_10.parent = this;
	this.instance_10.setTransform(293.1,539.9,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_11 = new lib.btnTr();
	this.instance_11.parent = this;
	this.instance_11.setTransform(293.1,490.9,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_12 = new lib.btnTr();
	this.instance_12.parent = this;
	this.instance_12.setTransform(293.1,441.9,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_12, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_13 = new lib.btnTr();
	this.instance_13.parent = this;
	this.instance_13.setTransform(293.1,393.9,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_13, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_14 = new lib.btnTr();
	this.instance_14.parent = this;
	this.instance_14.setTransform(293.1,345.9,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_14, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_15 = new lib.btnTr();
	this.instance_15.parent = this;
	this.instance_15.setTransform(293.1,297.9,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_15, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_16 = new lib.btnTr();
	this.instance_16.parent = this;
	this.instance_16.setTransform(293.1,249.9,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_16, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_17 = new lib.btnTr();
	this.instance_17.parent = this;
	this.instance_17.setTransform(293.1,201.9,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_17, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_18 = new lib.btnTr();
	this.instance_18.parent = this;
	this.instance_18.setTransform(293.1,154.1,1.393,0.55,0,0,0,0,40);
	new cjs.ButtonHelper(this.instance_18, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance_19 = new lib.clignM();
	this.instance_19.parent = this;
	this.instance_19.setTransform(204.1,17,1,0.694,0,0,0,0.2,0);

	this.text_1 = new cjs.Text("", "25px 'Arial-BoldMT'", "#009966");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 30;
	this.text_1.lineWidth = 66;
	this.text_1.parent = this;
	this.text_1.setTransform(205,19);

	this.text_2 = new cjs.Text("الْبَحْثُ عَنْ رَقْمِ الصَّفْحَةِ", "bold 20px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 203;
	this.text_2.parent = this;
	this.text_2.setTransform(345.5,21);

	this.instance_20 = new lib.lp();
	this.instance_20.parent = this;
	this.instance_20.setTransform(133.1,13);
	new cjs.ButtonHelper(this.instance_20, 0, 1, 2, false, new lib.lp(), 3);

	this.instance_21 = new lib.recherch();
	this.instance_21.parent = this;
	this.instance_21.setTransform(123,8);

	this.pr = new lib.sv();
	this.pr.name = "pr";
	this.pr.parent = this;
	this.pr.setTransform(493.4,647.1,0.706,0.667,0,0,180,80,40.3);
	new cjs.ButtonHelper(this.pr, 0, 1, 2, false, new lib.sv(), 3);

	this.sv = new lib.sv();
	this.sv.name = "sv";
	this.sv.parent = this;
	this.sv.setTransform(9.1,620.2,0.706,0.667);
	new cjs.ButtonHelper(this.sv, 0, 1, 2, false, new lib.sv(), 3);

	this.hm = new lib.hm();
	this.hm.name = "hm";
	this.hm.parent = this;
	this.hm.setTransform(467,12,0.75,0.75,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.hm, 0, 1, 2, false, new lib.hm(), 3);

	this.instance_22 = new lib.p4();
	this.instance_22.parent = this;
	this.instance_22.setTransform(4,5,1.044,0.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.hm},{t:this.sv},{t:this.pr},{t:this.instance_21},{t:this.instance_20},{t:this.text_2},{t:this.text_1},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(4,5,550,670), null);


// stage content:
(lib.kourassa3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var assetsPath = "./sounds/";
			var sounds = [{src:"spriteAudio.mp3", data: { audioSprite: [
		{id:"s1", startTime:0, duration:1210},
		{id:"s2", startTime:1223, duration:1088},
		{id:"s3", startTime:2352, duration: 1177},
		{id:"s4", startTime:3581, duration: 1129},
		{id:"s5", startTime:4840, duration: 1190},
		{id:"s6", startTime:6017, duration: 1275},
		{id:"s7", startTime:7292, duration: 556},
		{id:"s8", startTime:7862, duration: 547},
		{id:"s9", startTime:8438, duration: 561},
		{id:"s10", startTime:9003, duration: 1146},
		{id:"s11", startTime:10159, duration: 1083},
		{id:"s12", startTime:11247, duration: 633},
		{id:"s13", startTime:11894, duration: 622},
		{id:"s14", startTime:12551, duration: 642},
		{id:"s15", startTime:13179, duration: 1170},
		{id:"s16", startTime:14339, duration: 1208},
		{id:"s17", startTime:15557, duration: 997},
		{id:"s18", startTime:16554, duration: 1098},
		{id:"s19", startTime:17657, duration: 964},
		{id:"s20", startTime:18625, duration: 1069},
		{id:"s21", startTime:19675, duration: 1232},
		{id:"s22", startTime:20902, duration: 1069},
		{id:"s23", startTime:21943, duration: 1136},
		{id:"s24", startTime:23074, duration: 1127},
		{id:"s25", startTime:24201, duration: 1294},
		{id:"s26", startTime:25485, duration: 1218},
		{id:"s27", startTime:26732, duration: 628},
		{id:"s28", startTime:27379, duration: 647},
		{id:"s29", startTime:28012, duration: 705},
		{id:"s30", startTime:28717, duration: 1175},
		{id:"s31", startTime:29982, duration: 1290},
		{id:"s32", startTime:31253, duration: 657},
		{id:"s33", startTime:32034, duration: 499},
		{id:"s34", startTime:32595, duration: 628},
		{id:"s35", startTime:33266, duration: 1285},
		{id:"s36", startTime:34575, duration: 1237},
		{id:"s37", startTime:35797, duration: 609},
		{id:"s38", startTime:36377, duration: 657},
		{id:"s39", startTime:37034, duration: 710},
		{id:"s40", startTime:37758, duration: 1242},
		{id:"s41", startTime:38995, duration: 1280},
		{id:"s42", startTime:40265, duration: 623},
		{id:"s43", startTime:40894, duration: 628},
		{id:"s44", startTime:41526, duration: 599},
		{id:"s45", startTime:42092, duration: 1529},
		{id:"s46", startTime:43607, duration: 1338},
		{id:"s47", startTime:44935, duration: 710},
		{id:"s48", startTime:45625, duration: 609},
		{id:"s49", startTime:46239, duration: 503},
		{id:"s50", startTime:46771, duration: 1175},
		{id:"s51", startTime:47960, duration: 1179},
		{id:"s52", startTime:49135, duration: 978},
		{id:"s53", startTime:50117, duration: 954},
		{id:"s54", startTime:51071, duration: 523},
		{id:"s55", startTime:51599, duration: 1232},
		{id:"s56", startTime:52836, duration: 1256},
		{id:"s57", startTime:54720, duration: 820},
		{id:"s58", startTime:55539, duration: 1055},
		{id:"s59", startTime:56608, duration: 566},
		{id:"s60", startTime:57174, duration: 1122}
						
						]}}];
			
			createjs.Sound.registerSounds(sounds, assetsPath);
		
		this.addChild(new lib.p0());
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.hm = new lib.hm();
	this.hm.name = "hm";
	this.hm.parent = this;
	this.hm.setTransform(6.5,5.4);
	new cjs.ButtonHelper(this.hm, 0, 1, 2, false, new lib.hm(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hm).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(285.5,344.4,80,80);
// library properties:
lib.properties = {
	id: '8D4C0671D4D96B4689C38B4633B478C1',
	width: 558,
	height: 678,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/kourassa3_atlas_.png", id:"kourassa3_atlas_"}
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