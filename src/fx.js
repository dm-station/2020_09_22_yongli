﻿$.ajax({
	url: "//api.slb.moneplus.cn/jssdk/real_list.php",
	type: "GET",
	dataType: 'jsonp',
	jsonp: 'callback',
	data: {
		'url':window.location.protocol+'//'+ location.hostname + location.pathname + location.search
		//  'url': location.hostname + location.pathname + location.search
	},
	success: function(result){
		console.log(result)
		wx.config({
			debug: false,
			appId: result.appId,
			timestamp: result.timestamp,
			nonceStr: result.nonceStr,
			signature: result.signature,
			jsApiList: [
				'onMenuShareTimeline',
				'getLocation',
				'onMenuShareAppMessage'
			]
		})
		updata();
	},
	error:function(res){
		alert(res);
	}
});

var title = '赵露思同款卸妆油等你来领'
var desc = 'ATTENIR艾天然 | 天然好卸，彩妆从此不粘人'
var link = 'http://campaign.realh5.cn/2020/yongli/index.html'
var imgUrl = 'http://cdn.campaign.realh5.cn/2020/yongli/share.jpg'

// 微信分享
function updata(){
    console.log('link',link)
    wx.ready(function (e) {
        // wxReady();
        wx.onMenuShareTimeline({//分享到朋友圈
            title:title,
            desc: desc,
            link: link,
            imgUrl: imgUrl,
            success: function () {
                _czc.push(['_trackEvent', '微信分享', '朋友圈', '成功'])
                console.log('onMenuShareTimeline')
            },
            cancel: function () {
                // _hmt.push(['_trackEvent', '微信分享', '朋友圈', '取消']);
            }
        })
        
        wx.onMenuShareAppMessage({//分享好友
            title: title,
            desc: desc,
            link: link,
            imgUrl: imgUrl,
            success: function () {
                // 用户确认分享后执行的回调函数
                _czc.push(['_trackEvent', '微信分享', '好友', '成功'])
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                // _hmt.push(['_trackEvent', '微信分享', '好友', '取消']);
            }
        });
    });
}