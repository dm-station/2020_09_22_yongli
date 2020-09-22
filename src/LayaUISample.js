var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var WebGL = laya.webgl.WebGL;
var Tween = Laya.Tween;
var Ease = Laya.Ease;

var os  = function(){
	var u = navigator.userAgent;
	var u2 = navigator.userAgent.toLowerCase();
	return { //移动终端版本信息
		mobile: !!u.match(/(iPhone|iPod|Android|ios|Mobile)/i), //是否为移动终端
		pc: !u.match(/(iPhone|iPod|Android|ios|Mobile)/i), //是否为pc终端
		ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //是否为ios终端
		android: u.indexOf('Android') > -1, //是否为android终端
		weixin: u2.match(/MicroMessenger/i) == "micromessenger", //是否为微信客户端
		newsapp: u.indexOf('NewsApp') > -1,//是否为网易新闻客户端
		yixin: u.indexOf('YiXin') > -1,//易信客户端
		weibo: u.indexOf('weibo') > -1,//微博客户端
		yunyuedu:u.indexOf('PRIS') > -1 //云阅读客户端
	};
};

document.body.addEventListener('touchmove', function (e) {
	e.preventDefault(); 
}, {passive: false}); 

window.alert = function(name){
  var iframe = document.createElement("IFRAME");
  iframe.style.display="none";
  iframe.setAttribute("src", 'data:text/plain,');
  document.documentElement.appendChild(iframe);
  window.frames[0].window.alert(name);
  iframe.parentNode.removeChild(iframe);
};

function getRequestParams(strname) {
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		var strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
		}
	}
	return theRequest[strname];
}

function getStageHeight(){
	var s = document.body.clientWidth / 750
	var stageW = document.body.clientWidth / s
	var stageH = document.body.clientHeight / s
	return stageH
}

function sf(type,obj,num,time) {
	var json = {};
	if(type==1){
		type = 0;
		json.scaleX =num;
		json.scaleY =num;
	}else{
		type = 1;
		json.scaleX =1;
		json.scaleY =1;
	}
	Tween.to(obj,json,time,Ease.linearIn,Handler.create(self, function(){sf(type,obj,num,time);}));
}

//x缩放比例=舞台宽度/设计宽度
var scaleRateW
//y缩放比例=舞台高度/设计高度
var scaleRateH
//token
var token = ''
// 当前层级
var zindex = 0

function p1() {
	p1UI.super(this);
	var self = this;
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth);//x缩放比例=舞台宽度/设计宽度
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight);//y缩放比例=舞台高度/设计高度
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2
}

var loadView = null;
function load() {
	var self = this;
	loadUI.super(this);
	loadView = this;
	
	scaleRateW = (Laya.stage.width / Laya.stage.designWidth)
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight)
	// if(Laya.stage.height<1289)self.y=-211
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2

	console.log('load：'+Laya.stage.width+','+Laya.stage.height,scaleRateW,scaleRateH)

// 	onTween1(self.butterfly);
//     function onTween1(obj){
// 	console.log('11111',obj)
//         Tween.clearTween(onTween1);
//         Tween.to(self.butterfly,{scaleX:0.95,scaleY:0.95},600,Ease.bounceOut,Handler.create(this,onTween2));
//     }
//     
//     function onTween2(obj){
// 	console.log('222222',obj)
//         Tween.clearTween(onTween2);
//         Tween.to(self.butterfly,{scaleX:1,scaleY:1},600,Ease.linearIn,Handler.create(this,onTween1));
//     }
}

Laya.class(load, "load", loadUI);
Laya.class(p1, "p1", p1UI);

//程序入口
getStageHeight()<1289?Laya.init(750,1500,Laya.WebGL):Laya.init(750,1500,Laya.WebGL)
//缩放模式
os().pc?Laya.stage.scaleMode='showall':Laya.stage.scaleMode='fixedwidth'
//对齐方式
Laya.stage.alignH='center';
Laya.stage.alignV='top';
// 显示fps
Laya.Stat.show(0,0);
// 背景颜色
Laya.stage.bgColor='#fff';
//背景透明
// Config.isAlpha = true;//设置画布是否透明，只对2D(WebGL)、3D有效。
// Laya.Render.isWebGL ? Laya.stage.bgColor = "none" : Laya.stage.bgColor = null;

var assets = [
	// {url:'img/p1_bg.jpg',type:Laya.Loader.IMAGE},
	{url:'res/atlas/p1.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p3.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p4.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/gift.atlas',type:Laya.Loader.ATLAS},
];

var imgs=[
	// {url:'img/p1_bg.jpg',type:Laya.Loader.IMAGE},
]

assets.push.apply(assets,imgs)

Laya.stage.on(Laya.Event.RESIZE, this, stageResize);

function stageResize(event){
	Laya.stage.off(Laya.Event.RESIZE, this, stageResize);
	trace('RESIZE:'+Laya.stage.width,Laya.stage.height,'Browser:'+Laya.Browser.clientWidth,Laya.Browser.clientHeight,'isWebGL:'+Laya.Render.isWebGL)
	Laya.loader.load(['res/atlas/load.atlas'], Handler.create(this, loading), null, Laya.Loader.ATLAS);
}

function loading() {
	Laya.stage.addChildAt(new load(),zindex);
	Laya.loader.load(assets, Handler.create(this, onAssetLoaded), Handler.create(this, onLoading, null, false));
}

// 加载结束侦听器
function onAssetLoaded(texture) {
	console.log("加载结束",texture);
	setTimeout(function() {
		// Laya.stage.removeChild(loadView);
		// Laya.stage.addChildAt(new p1(),zindex);
	}, 500);
}

// 加载进度侦听器
function onLoading(progress) {
	console.log("加载进度: " + parseInt(progress*100));
	loadView.bar.x=parseInt(358*progress)-358
	loadView.percent.text=parseInt(progress*100)+"%";//文字百分比
}

