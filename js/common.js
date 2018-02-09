var url = location.href.split('#')[0];
var timestamp = "";
var nonceStr = "";
var signature = "";
$.ajax({
    url: "https://2018nianyun.yicuichina.com/api/yicui/v1",
    type: "post",
    async: false,
    data: JSON.stringify({
        type: "sign",
        data: {
            url: url
        }
    }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
        var data1 = data.data;
        timestamp = data1.timestamp;
        nonceStr = data1.nonceStr;
        signature = data1.signature;
    },
    error: function (e) {
    }
})

wx.config({
    debug: false,
    appId: 'wx5708b1cabe40f6cd',
    timestamp: timestamp,
    nonceStr: nonceStr,
    signature: signature,
    jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage'
    ]
});
wx.ready(function () {
    // 在这里调用 API
    wx.checkJsApi({
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
        success: function (res) {
        }
    });
    // 分享到朋友圈
    wx.onMenuShareTimeline({
        title: "最文艺的新年占卜驾到，朕已亲测有效", // 分享描述
        link: 'http://2018nianyun.yicuichina.com/index.html',// 分享链接
        imgUrl: "https://2018nianyun.yicuichina.com/images/logo1.png", // 分享图标不能为本地
        success: function () {
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            // createStatWithParamlog(window.location.href, "/wxTimelineResult.html", "1", window.location.search);
        },
        fail: function () {
            // 用户取消分享后执行的回调函数
            // createStatWithParamlog(window.location.href, "/wxTimelineResult.html", "2", window.location.search);
        }
    });
    //转发给好友
    wx.onMenuShareAppMessage({
        title: "狗年就是旺", // 分享标题
        desc: "最文艺的新年占卜驾到，朕已亲测有效", // 分享描述
        link: 'http://2018nianyun.yicuichina.com/index.html',
        imgUrl: "https://2018nianyun.yicuichina.com/images/logo1.png",//分享图标不能为本地
        success: function () {
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            // createStatWithParamlog(window.location.href, "/wxFriendResult.html", "1", window.location.search);
        },
        fail: function () {
            // 用户取消分享后执行的回调函数
            // createStatWithParamlog(window.location.href, "/wxFriendResult.html", "2", window.location.search);
        }
    });
})
wx.error(function () {
});

