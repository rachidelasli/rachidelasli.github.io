(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,672,533,670],[0,0,550,670],[1320,824,154,84],[1062,930,389,148],[535,1342,550,165],[1320,672,150,150],[0,1344,256,256],[258,1344,256,256],[1062,672,256,256],[552,0,550,670],[535,672,525,668],[1104,0,550,670],[1472,672,150,80],[1062,1080,150,80],[1087,1162,150,80],[1214,1080,100,80]]}
];


// symbols:



(lib._0 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.brdnR = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.capt = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.clavL = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.clavN = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hm1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hm2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.p3i = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.p4i = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.prp = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.rempRg = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.rmpjR = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.rmprR = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.svI = function() {
	this.spriteSheet = ss["index_atlas_"];
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


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.capt();
	this.instance.parent = this;
	this.instance.setTransform(31,172,1.221,1.351);

	this.text = new cjs.Text("بطاقة تقنية", "bold 56px 'Arial'", "#0033FF");
	this.text.textAlign = "center";
	this.text.lineHeight = 65;
	this.text.lineWidth = 363;
	this.text.parent = this;
	this.text.setTransform(253.7,30.4);

	this.instance_1 = new lib.p4i();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.048,1.003);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,0,550,670), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("2", "bold 23px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(268.1,633.2);

	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,550,670), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("ArtGQIAAsfIXbAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-75,-40,150,80), null);


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


(lib.p0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var pg = [new lib.p0(),new lib.p1(),new lib.p2(),new lib.p3(),new lib.p4()];
		
		var pags = this.parent.parent.getChildByName('pags');
		var navs = this.parent.parent.getChildByName('navs');
		var nav = navs.getChildByName('nav');
		    
		nav.sv.visible=true;nav.hm.visible=false;nav.pr.visible=false;
		
		this.prp.on("click", p1.bind(this));
		this.ori.on("click", p2.bind(this));
		this.idx.on("click", p3.bind(this));
		function p1(){
			np=1;
			nav.sv.visible=true;nav.hm.visible=true;nav.pr.visible=true;
			pags.removeAllChildren();pags.addChild(pg[1]);
			//this.parent.parent.setChildIndex( navs, this.parent.parent.getNumChildren()-1);
			}
		function p2(){
			np=2;
			nav.sv.visible=true;nav.hm.visible=true;nav.pr.visible=true;
			pags.removeAllChildren();pags.addChild(pg[2]);
			//this.parent.parent.setChildIndex( navs, this.parent.parent.getNumChildren()-1);
			}
		function p3(){
			nav.sv.visible=true;nav.hm.visible=true;nav.pr.visible=true;
			np=3;
			pags.removeAllChildren();pags.addChild(pg[3]);
			//this.parent.parent.setChildIndex( navs, this.parent.parent.getNumChildren()-1);
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(42,446,0.117,0.117);

	this.instance_1 = new lib.hand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14,333,0.117,0.117);

	this.instance_2 = new lib.hand();
	this.instance_2.parent = this;
	this.instance_2.setTransform(52,227,0.117,0.117);

	this.text = new cjs.Text("إِرْشـاداتٌ", "bold 45px 'Arial'", "#CC0033");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 179;
	this.text.parent = this;
	this.text.setTransform(105.9,348.2,1,0.903);

	this.ori = new lib.btnS();
	this.ori.name = "ori";
	this.ori.parent = this;
	this.ori.setTransform(108.4,368.4,1.175,1,0,0,0,80,40);
	new cjs.ButtonHelper(this.ori, 0, 1, 2, false, new lib.btnS(), 3);

	this.text_1 = new cjs.Text("حَــــوْلَ\nالْــبَــرْنـامَجِ", "bold 35px 'Arial'", "#CC0033");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 179;
	this.text_1.parent = this;
	this.text_1.setTransform(150.9,229,1,0.871);

	this.prp = new lib.btnS();
	this.prp.name = "prp";
	this.prp.parent = this;
	this.prp.setTransform(149.8,260.6,1.214,1,0,0,0,80.5,40);
	new cjs.ButtonHelper(this.prp, 0, 1, 2, false, new lib.btnS(), 3);

	this.text_2 = new cjs.Text("الْفَهْرَسُ\nوَ الصَّفَحاتُ", "bold 35px 'Arial'", "#CC0033");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 33;
	this.text_2.lineWidth = 179;
	this.text_2.parent = this;
	this.text_2.setTransform(142.9,447.8,1,0.95);

	this.idx = new lib.btnS();
	this.idx.name = "idx";
	this.idx.parent = this;
	this.idx.setTransform(145.4,480,1.288,1,0,0,0,80,40);
	new cjs.ButtonHelper(this.idx, 0, 1, 2, false, new lib.btnS(), 3);

	this.instance_3 = new lib._0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1.032,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.idx},{t:this.text_2},{t:this.prp},{t:this.text_1},{t:this.ori},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p0, new cjs.Rectangle(0,0,550,670), null);


(lib.nav = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		np=0;
		var pags = this.parent.parent.getChildByName('pags');
		var navs = this.parent.parent.getChildByName('navs');
		
		
		
		
		var pg = [new lib.p0(),new lib.p1(),new lib.p2(),new lib.p3(),new lib.p4()];
		
		this.hm.on("click", gop0.bind(this));
		function gop0(){
			
			this.sv.visible=true;this.hm.visible=false;this.pr.visible=false;
			np=0;
			pags.removeAllChildren();pags.addChild(pg[0]);
		}
		
		this.sv.on("click", ps.bind(this));
		function ps(){
			this.pr.visible=true;this.hm.visible=true;
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
			 if(np == 0){this.pr.visible=false;this.hm.visible=false;}
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
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(75,40);
	this.instance.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.301},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,80);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var pg = [new lib.p0(),new lib.p1(),new lib.p2(),new lib.p3(),new lib.p4()];
			
		var pags = this.parent.parent.getChildByName('pags');
		var navs = this.parent.parent.getChildByName('navs');
		var nav = navs.getChildByName('nav');
		
		this.gop1.on("click", gop1.bind(this));
		function gop1(){
			pags.removeAllChildren();pags.addChild(pg[1]);}
		
		this.gop2.on("click", gop2.bind(this));
		function gop2(){
			pags.removeAllChildren();pags.addChild(pg[2]);}
		
		this.gop4.on("click", gop4.bind(this));
		function gop4(){
			pags.removeAllChildren();pags.addChild(pg[4]);}
			
			this.gop5.on("click", gop5.bind(this));
		function gop5(){
			window.open("./مراجعة/index.html", "_self");}
			
			this.gop9.on("click", gop9.bind(this));
		function gop9(){
			window.open("./النون/index.html", "_self");}
			
			this.gop18.on("click", gop18.bind(this));
		function gop18(){
			window.open("./العين/index.html", "_self");}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.gop18 = new lib.btnTr();
	this.gop18.name = "gop18";
	this.gop18.parent = this;
	this.gop18.setTransform(294.4,279.7,1.307,0.475,0,0,0,0.1,40.1);
	new cjs.ButtonHelper(this.gop18, 0, 1, 2, false, new lib.btnTr(), 3);

	this.gop9 = new lib.btnTr();
	this.gop9.name = "gop9";
	this.gop9.parent = this;
	this.gop9.setTransform(294.4,232.7,1.307,0.475,0,0,0,0.1,40.1);
	new cjs.ButtonHelper(this.gop9, 0, 1, 2, false, new lib.btnTr(), 3);

	this.gop1 = new lib.btnTr();
	this.gop1.name = "gop1";
	this.gop1.parent = this;
	this.gop1.setTransform(295.3,61,1.307,0.475,0,0,0,0.1,40.2);
	new cjs.ButtonHelper(this.gop1, 0, 1, 2, false, new lib.btnTr(), 3);

	this.gop2 = new lib.btnTr();
	this.gop2.name = "gop2";
	this.gop2.parent = this;
	this.gop2.setTransform(295.3,101.5,1.307,0.475,0,0,0,0.1,40.2);
	new cjs.ButtonHelper(this.gop2, 0, 1, 2, false, new lib.btnTr(), 3);

	this.gop4 = new lib.btnTr();
	this.gop4.name = "gop4";
	this.gop4.parent = this;
	this.gop4.setTransform(295.3,144.7,1.307,0.475,0,0,0,0.1,40.2);
	new cjs.ButtonHelper(this.gop4, 0, 1, 2, false, new lib.btnTr(), 3);

	this.gop5 = new lib.btnTr();
	this.gop5.name = "gop5";
	this.gop5.parent = this;
	this.gop5.setTransform(294.4,186.7,1.307,0.475,0,0,0,0.1,40.1);
	new cjs.ButtonHelper(this.gop5, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance = new lib.p3i();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.gop5},{t:this.gop4},{t:this.gop2},{t:this.gop1},{t:this.gop9},{t:this.gop18}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,550,670), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.name='p';
		this.btnfc.on("click", fc.bind(this));
		function fc(){ window.open("https://www.facebook.com/didi.rachid", "_blank"); }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AClAAQAABEgxAwQgvAxhFAAQhEAAgwgxQgwgwAAhEQAAhEAwgwQAwgwBEAAQBFAAAvAwQAxAwAABEg");
	this.shape.setTransform(263.5,627.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("1", "bold 30px 'Arial'", "#CC0033");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(263,611.3);

	this.btnfc = new lib.btnTr();
	this.btnfc.name = "btnfc";
	this.btnfc.parent = this;
	this.btnfc.setTransform(1.1,292.6,3.679,0.518,0,0,0,0.3,40.6);
	new cjs.ButtonHelper(this.btnfc, 0, 1, 2, false, new lib.btnTr(), 3);

	this.instance = new lib.prp();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btnfc},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,551.8,670), null);


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
		        case "btxt1": window.txtactif= 1; this.parent.clign.x= this.parent.btxt1.x + 10 ; this.parent.clign.y= this.parent.btxt1.y +20; this.parent.clavL.y= 0; break;
				case "btxt2": window.txtactif= 2; this.parent.clign.x= this.parent.btxt2.x + 10 ; this.parent.clign.y= this.parent.btxt2.y +20; this.parent.clavL.y= 0; break;
		        case "btxt3": window.txtactif= 3; this.parent.clign.x= this.parent.btxt3.x + 10 ; this.parent.clign.y= this.parent.btxt3.y +20; this.parent.clavL.y= 0; break;
		        case "btxt4": window.txtactif= 4; this.parent.clign.x= this.parent.btxt4.x + 10 ; this.parent.clign.y= this.parent.btxt4.y +20; this.parent.clavL.y= 0; break;
		        case "btxt5": window.txtactif= 5; this.parent.clign.x= this.parent.btxt5.x + 10 ; this.parent.clign.y= this.parent.btxt5.y +20; this.parent.clavL.y= 0; break;
				case "btxt6": window.txtactif= 6; this.parent.clign.x= this.parent.btxt6.x + 10 ; this.parent.clign.y= this.parent.btxt6.y +20; this.parent.clavL.y= 0; break;
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
		var pg = [new lib.p0(),new lib.p1(),new lib.p2(),new lib.p3(),new lib.p4()];
		
		
		var np; var txtactif=1;
		var container1 = new createjs.Container();
		var container2 = new createjs.Container();
		container1.name = 'pags';
		container2.name = 'navs';
		
		this.addChild(container1,container2);
		container1.x =5; container1.y=5; container2.x=5 , container2.y=5;
		
		p0 = new lib.p0();
		p0.name= 'p0';
		container1.addChild(p0);
		
		var nav = new lib.nav(); 
		nav.name = 'nav';
		nav.pr.visible=false; nav.hm.visible=false;
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
		{src:"images/index_atlas_.png?1519371810999", id:"index_atlas_"}
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