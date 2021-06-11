var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var loadUI=(function(_super){
		function loadUI(){
			
		    this.bar=null;
		    this.percent=null;
		    this.butterfly=null;
		    this.load_left=null;

			loadUI.__super.call(this);
		}

		CLASS$(loadUI,'ui.test.loadUI',_super);
		var __proto__=loadUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loadUI.uiView);

		}

		loadUI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"load/load_bg.png"}},{"type":"Image","props":{"y":1129,"x":176,"skin":"load/bar1.png"}},{"type":"Image","props":{"y":1129,"x":176,"width":400,"skin":"load/bar2.png","height":50},"child":[{"type":"Image","props":{"y":0,"x":-358,"var":"bar","skin":"load/bar2.png","renderType":"mask"}}]},{"type":"Label","props":{"y":1196,"x":337,"width":76,"var":"percent","text":"0%","styleSkin":"load/label.png","height":28,"fontSize":26,"color":"#ffd976","align":"center"}},{"type":"Image","props":{"y":0,"x":116,"skin":"load/load_box.png"}},{"type":"Image","props":{"y":1080,"x":580,"width":132,"var":"butterfly","skin":"load/butterfly.png","rotation":-34,"pivotY":41,"pivotX":66,"height":81}},{"type":"Image","props":{"y":0,"x":0,"var":"load_left","skin":"load/load_left.png"}}]};
		return loadUI;
	})(View);
var p1UI=(function(_super){
		function p1UI(){
			
		    this.top1=null;
		    this.top2=null;
		    this.bottom1=null;
		    this.bottom2=null;
		    this.logo=null;
		    this.p1_t1=null;
		    this.leaves=null;
		    this.butterfly=null;
		    this.p1_t2=null;
		    this.prz1=null;
		    this.prz2=null;
		    this.prz3=null;
		    this.prz4=null;
		    this.gift=null;
		    this.p1_t3=null;

			p1UI.__super.call(this);
		}

		CLASS$(p1UI,'ui.test.p1UI',_super);
		var __proto__=p1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p1UI.uiView);

		}

		p1UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p1_bg.jpg"}},{"type":"Image","props":{"y":0,"x":0,"var":"top1","skin":"p1/top1.png"}},{"type":"Image","props":{"y":0,"x":522,"var":"top2","skin":"p1/top2.png"}},{"type":"Image","props":{"y":1481,"x":27,"width":338,"var":"bottom1","skin":"p1/bottom1.png","pivotY":198,"pivotX":27,"height":217}},{"type":"Image","props":{"y":1435,"x":667,"width":183,"var":"bottom2","skin":"p1/bottom2.png","pivotY":80,"pivotX":100,"height":145}},{"type":"Image","props":{"y":71,"x":281,"var":"logo","skin":"p1/logo.png"}},{"type":"Image","props":{"y":235,"x":174,"var":"p1_t1","skin":"p1/p1_t1.png"}},{"type":"Image","props":{"y":387,"x":239,"width":70,"var":"leaves","skin":"p1/p1_leaves.png","pivotY":41,"pivotX":61,"height":54}},{"type":"Image","props":{"y":352,"x":591,"width":110,"var":"butterfly","skin":"load/butterfly.png","rotation":-27,"pivotY":34,"pivotX":55,"height":68}},{"type":"Image","props":{"y":434,"x":134,"var":"p1_t2","skin":"p1/p1_t2.png"}},{"type":"Image","props":{"y":548,"x":37,"var":"prz1","skin":"p1/prz1.png"}},{"type":"Image","props":{"y":548,"x":375,"var":"prz2","skin":"p1/prz2.png"}},{"type":"Image","props":{"y":836,"x":37,"var":"prz3","skin":"p1/prz3.png"}},{"type":"Image","props":{"y":836,"x":374,"var":"prz4","skin":"p1/prz4.png"}},{"type":"Image","props":{"y":1208,"x":368,"width":88,"var":"gift","skin":"p1/gift.png","pivotY":43,"pivotX":43,"height":84}},{"type":"Image","props":{"y":1280,"x":272,"var":"p1_t3","skin":"p1/p1_t3.png"}}]};
		return p1UI;
	})(View);
var p2UI=(function(_super){
		function p2UI(){
			
		    this.top1=null;
		    this.top2=null;
		    this.bottom1=null;
		    this.bottom2=null;
		    this.logo=null;
		    this.p1_t1=null;
		    this.leaves=null;
		    this.butterfly=null;
		    this.check=null;
		    this.p2_btn=null;
		    this.rule=null;

			p2UI.__super.call(this);
		}

		CLASS$(p2UI,'ui.test.p2UI',_super);
		var __proto__=p2UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p2UI.uiView);

		}

		p2UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p1_bg.jpg"}},{"type":"Image","props":{"y":0,"x":0,"var":"top1","skin":"p1/top1.png"}},{"type":"Image","props":{"y":0,"x":522,"var":"top2","skin":"p1/top2.png"}},{"type":"Image","props":{"y":1481,"x":27,"width":338,"var":"bottom1","skin":"p1/bottom1.png","pivotY":198,"pivotX":27,"height":217}},{"type":"Image","props":{"y":1435,"x":667,"width":183,"var":"bottom2","skin":"p1/bottom2.png","pivotY":80,"pivotX":100,"height":145}},{"type":"Image","props":{"y":71,"x":281,"var":"logo","skin":"p1/logo.png"}},{"type":"Image","props":{"y":213,"x":150,"var":"p1_t1","skin":"p1/p1_t1.png"}},{"type":"Image","props":{"y":365,"x":215,"width":70,"var":"leaves","skin":"p1/p1_leaves.png","pivotY":41,"pivotX":61,"height":54}},{"type":"Image","props":{"y":330,"x":567,"width":110,"var":"butterfly","skin":"load/butterfly.png","rotation":-27,"pivotY":34,"pivotX":55,"height":68}},{"type":"Image","props":{"y":1122,"x":125,"var":"check","skin":"p2/p2_check.png"}},{"type":"Image","props":{"y":1224,"x":200,"var":"p2_btn","skin":"p2/p2_btn.png"}},{"type":"Image","props":{"y":446,"x":97,"skin":"p2/rule_bg.png"}},{"type":"Panel","props":{"y":445,"x":92,"width":570,"var":"rule","vScrollBarSkin":"p2/vscroll.png","height":649},"child":[{"type":"Image","props":{"skin":"img/rule1.png"}},{"type":"Image","props":{"y":2000,"x":0,"skin":"img/rule2.png"}},{"type":"Image","props":{"y":4000,"x":0,"skin":"img/rule3.png"}},{"type":"Image","props":{"y":6000,"x":0,"skin":"img/rule4.png"}}]}]};
		return p2UI;
	})(View);
var p3UI=(function(_super){
		function p3UI(){
			
		    this.gift=null;
		    this.butterfly=null;
		    this.butterfly2=null;
		    this.flower1=null;
		    this.flower2=null;
		    this.flower3=null;
		    this.light=null;
		    this.gift_box=null;
		    this.win=null;
		    this.butterfly3=null;
		    this.p3_t1=null;
		    this.prize=null;
		    this.p3_btn=null;
		    this.losing=null;
		    this.butterfly4=null;
		    this.flower4=null;
		    this.p4_leaves=null;
		    this.p4_t1=null;
		    this.top1=null;
		    this.top2=null;
		    this.bottom1=null;
		    this.bottom2=null;
		    this.logo=null;

			p3UI.__super.call(this);
		}

		CLASS$(p3UI,'ui.test.p3UI',_super);
		var __proto__=p3UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p3UI.uiView);

		}

		p3UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"gift"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p1_bg.jpg"}},{"type":"Image","props":{"y":543.1681958810595,"x":468,"width":132,"var":"butterfly","skin":"load/butterfly.png","rotation":40,"pivotY":41,"pivotX":66,"height":81}},{"type":"Image","props":{"y":730.1681958810595,"x":540,"width":166,"var":"butterfly2","skin":"load/butterfly.png","rotation":-28,"pivotY":51,"pivotX":83,"height":102}},{"type":"Image","props":{"y":640.1681958810595,"x":491,"width":40,"var":"flower1","skin":"gift/flower.png","pivotY":20,"pivotX":20,"height":40}},{"type":"Image","props":{"y":791.1681958810595,"x":299,"width":26,"var":"flower2","skin":"gift/flower.png","pivotY":13,"pivotX":13,"height":26}},{"type":"Image","props":{"y":770.1681958810595,"x":410,"width":34,"var":"flower3","skin":"gift/flower.png","pivotY":17,"pivotX":17,"height":34}},{"type":"Image","props":{"y":878.1681958810595,"x":377,"width":549,"var":"light","skin":"gift/light.png","pivotY":309,"pivotX":275,"height":327}},{"type":"Image","props":{"y":801.1681958810595,"x":249,"skin":"gift/gift_box.png"}},{"type":"Image","props":{"y":775.1681958810595,"x":192,"width":239,"var":"gift_box","skin":"gift/gift_box2.png","pivotY":190,"height":193}}]},{"type":"Box","props":{"y":0,"x":0,"var":"win"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p3_bg.jpg"}},{"type":"Image","props":{"y":373,"x":566,"width":110,"var":"butterfly3","skin":"load/butterfly.png","rotation":-27,"pivotY":34,"pivotX":55,"height":68}},{"type":"Image","props":{"y":400,"x":216,"var":"p3_t1","skin":"p3/p3_t1.png"}},{"type":"Image","props":{"y":581,"x":2,"var":"prize","skin":"p3/prize1.png"}},{"type":"Image","props":{"y":1063,"x":369,"width":319,"var":"p3_btn","skin":"p3/p3_btn.png","pivotY":42,"pivotX":160,"height":85}}]},{"type":"Box","props":{"y":0,"x":0,"var":"losing"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p3_bg.jpg"}},{"type":"Image","props":{"y":600,"x":578,"width":110,"var":"butterfly4","skin":"load/butterfly.png","rotation":-27,"pivotY":34,"pivotX":55,"height":68}},{"type":"Image","props":{"y":772,"x":125,"width":40,"var":"flower4","skin":"gift/flower.png","pivotY":20,"pivotX":20,"height":40}},{"type":"Image","props":{"y":923,"x":171,"width":182,"var":"p4_leaves","skin":"p4/p4_leaves.png","pivotY":171,"pivotX":125,"height":174}},{"type":"Image","props":{"y":650,"x":186,"var":"p4_t1","skin":"p4/p4_t1.png"}}]},{"type":"Image","props":{"y":0,"x":0,"var":"top1","skin":"p1/top1.png"}},{"type":"Image","props":{"y":0,"x":522,"var":"top2","skin":"p1/top2.png"}},{"type":"Image","props":{"y":1481,"x":27,"width":338,"var":"bottom1","skin":"p1/bottom1.png","pivotY":198,"pivotX":27,"height":217}},{"type":"Image","props":{"y":1435,"x":667,"width":183,"var":"bottom2","skin":"p1/bottom2.png","pivotY":80,"pivotX":100,"height":145}},{"type":"Image","props":{"y":71,"x":281,"var":"logo","skin":"p1/logo.png"}}]};
		return p3UI;
	})(View);
var TestPageUI=(function(_super){
		function TestPageUI(){
			
		    this.btn=null;
		    this.clip=null;
		    this.combobox=null;
		    this.tab=null;
		    this.list=null;
		    this.btn2=null;
		    this.check=null;
		    this.radio=null;
		    this.box=null;

			TestPageUI.__super.call(this);
		}

		CLASS$(TestPageUI,'ui.test.TestPageUI',_super);
		var __proto__=TestPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TestPageUI.uiView);

		}

		TestPageUI.uiView={"type":"View","child":[{"props":{"x":0,"y":0,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","width":600,"height":400},"type":"Image"},{"props":{"x":41,"y":56,"skin":"comp/button.png","label":"点我赋值","width":150,"height":37,"sizeGrid":"4,4,4,4","var":"btn"},"type":"Button"},{"props":{"x":401,"y":56,"skin":"comp/clip_num.png","clipX":10,"var":"clip"},"type":"Clip"},{"props":{"x":220,"y":143,"skin":"comp/combobox.png","labels":"select1,select2,selecte3","selectedIndex":1,"sizeGrid":"4,20,4,4","width":200,"height":23,"var":"combobox"},"type":"ComboBox"},{"props":{"x":220,"y":96,"skin":"comp/tab.png","labels":"tab1,tab2,tab3","var":"tab"},"type":"Tab"},{"props":{"x":259,"y":223,"skin":"comp/vscroll.png","height":150},"type":"VScrollBar"},{"props":{"x":224,"y":223,"skin":"comp/vslider.png","height":150},"type":"VSlider"},{"type":"List","child":[{"type":"Box","child":[{"props":{"skin":"load/label.png","text":"this is a list","x":26,"y":5,"width":78,"height":20,"fontSize":14,"name":"label"},"type":"Label"},{"props":{"x":0,"y":2,"skin":"comp/clip_num.png","clipX":10,"name":"clip"},"type":"Clip"}],"props":{"name":"render","x":0,"y":0,"width":112,"height":30}}],"props":{"x":452,"y":68,"width":128,"height":299,"vScrollBarSkin":"comp/vscroll.png","repeatX":1,"var":"list"}},{"props":{"x":563,"y":4,"skin":"comp/btn_close.png","name":"close"},"type":"Button"},{"props":{"x":41,"y":112,"skin":"comp/button.png","label":"点我赋值","width":150,"height":66,"sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"var":"btn2"},"type":"Button"},{"props":{"x":220,"y":188,"skin":"comp/checkbox.png","label":"checkBox1","var":"check"},"type":"CheckBox"},{"props":{"x":220,"y":61,"skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3","var":"radio"},"type":"RadioGroup"},{"type":"Panel","child":[{"props":{"skin":"comp/image.png"},"type":"Image"}],"props":{"x":299,"y":223,"width":127,"height":150,"vScrollBarSkin":"comp/vscroll.png"}},{"props":{"x":326,"y":188,"skin":"comp/checkbox.png","label":"checkBox2","labelColors":"#ff0000"},"type":"CheckBox"},{"type":"Box","child":[{"props":{"y":70,"skin":"comp/progress.png","width":150,"height":14,"sizeGrid":"4,4,4,4","name":"progress"},"type":"ProgressBar"},{"props":{"y":103,"skin":"load/label.png","text":"This is a Label","width":137,"height":26,"fontSize":20,"name":"label"},"type":"Label"},{"props":{"y":148,"skin":"comp/textinput.png","text":"textinput","width":150,"name":"input"},"type":"TextInput"},{"props":{"skin":"comp/hslider.png","width":150,"name":"slider"},"type":"HSlider"},{"props":{"y":34,"skin":"comp/hscroll.png","width":150,"name":"scroll"},"type":"HScrollBar"}],"props":{"x":41,"y":197,"var":"box"}}],"props":{"width":600,"height":400}};
		return TestPageUI;
	})(View);