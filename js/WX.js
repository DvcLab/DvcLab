$(function () {
    function share() {
        var url = { url: location.href.split('#').toString() }
        $.post("http://2m611903b0.zicp.vip/biz/users/wx/signature", { url: url }, function (result) {
            var appId = response.s.appId;                
            var timestamp = response.s.timeStamp;                
            var nonceStr = response.s.nonceStr;               
            var signature = response.s.signature;
            wx.config({                    
                debug: false,                    
                appId: appId,                    
                timestamp: timestamp,                    
                nonceStr: nonceStr,                    
                signature: signature,                    
                jsApiList: [                      
                    'onMenuShareTimeline',                        
                    'onMenuShareAppMessage',                   
                ]});
        })
    }
    share()
})




wx.ready(function () {
    var link = window.location.href;
    var protocol = window.location.protocol;
    var host = window.location.host;
    //分享朋友圈
    wx.onMenuShareTimeline({
        title: '北京数字奇迹科技有限公司',
        link: link,
        imgUrl: protocol + '//' + host + 'img/favicon.ico',// 自定义图标
        trigger: function (res) {
            // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回.
            //alert('click shared');
        },
        success: function (res) {
            alert('shared success');
            //some thing you should do
        },
        cancel: function (res) {
            //alert('shared cancle');
        },
        fail: function (res) {
            //alert(JSON.stringify(res));
        }
    });
    //分享给好友
    wx.onMenuShareAppMessage({
        title: '北京数字奇迹科技有限公司', // 分享标题
        desc: '我们致力于打造一个更快、更全、更可信的财经信息传播平台', // 分享描述
        link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: protocol + '//' + host + 'img/favicon.ico', // 自定义图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            // 用户确认分享后执行的回调函数
            alert('shared success');
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
    wx.error(function (res) {
        alert(res.errMsg);
    });
});

