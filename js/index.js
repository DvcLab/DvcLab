const BGURL = './img/dvclab/pg1.png'
const SMBGURL = './img/dvclab/pg1@0.5x.png'

$(function () {
	var wrap = document.getElementById("wrap");
	var main = document.getElementById("main");
	var pages = main.getElementsByClassName("page");
	var titles = document.getElementsByClassName("titlebar")
	var tags = document.getElementsByClassName('swiper_li')[0];
	var tagsLi = tags.getElementsByTagName('li');
	var pageLen = pages.length;
	var pageH = document.body.clientHeight || document.documentElement.clientHeight;
	var pageW = document.body.clientWidth || document.documentElement.clientWidth;
	var topHeight = $('#main').scrollTop();
	var arr = []; //创建一个空数组,盛放五个数据的高度
	
	$('.dw_homepage_mainimage').fadeIn(600)

	wrap.style.height = pageH + "px"; //注意

	// console.log(titles)

	$(window).scroll = function () {
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(t)
	}
	
function testWidth(){
	console.log('!!!!!!!!');
	wrap.style.height = pageH + "px"; //注意
	if (pageW <= 768) {
		console.log('宽度小于规定阀值')
		$('#main').css('overflow-y', 'auto');

		// $('#pageTitle').width(411 * (pageW / 1920) + 'px')
		// $('#pageTitle').height(411 * (pageW / 1920) * 0.37 + 'px')
		$('#wrap').css('overflow', 'auto');
		$('.swiper_li').hide();
		for (var i = 0; i < pages.length; i++) { //每页高度
			pages[i].style.height = 'auto';
			arr[i] = $(pages[i]).height();
		}
		if (pageW <= 768) {
			// $('.dw_homepage_mainimage').attr('src', './img/dw_homepage_mainimage@0.5x.png')
			$('.dw_homepage_mainimage').attr('src', SMBGURL)
		} else {
			// $('.dw_homepage_mainimage').attr('src', './img/dw_homepage_mainimage.png')
			$('.dw_homepage_mainimage').attr('src', BGURL)
			$('.swiper_li').show();
			console.log("显示分页器")
		}
		$('#main').scrollTop(0)
	} else {
		console.log('宽度大于指定阀值')
		$('#main').css('overflow-y', 'hidden');

		// $('#pageTitle').width(411 * (pageW / 1920) + 'px')
		// $('#pageTitle').height(411 * (pageW / 1920) * 0.37 + 'px')
		$('#wrap').css('overflow', 'auto');
		$('.swiper_li').show();
		for (var i = 0; i < pages.length; i++) { //每页高度
			pages[i].style.height = pageH + "px";
			arr[i] = pages[i].offsetTop;
		}
		//第一个页面数据样式
		$('.page1_p1>h1').css('font-size', pageW / 32 + 'px');
		$('.page1_p1>h1').css('line-height', pageW / 24 + 'px');
		$('.page1_p1>p').css('font-size', pageW / 90 + 'px');
		$('.page1_p1>p').css('line-height', pageW / 48 + 'px');
		//第二个页面的数据样式
		// $('#pageTitle').width(411 * (pageW / 1920) + 'px')
		// $('#pageTitle').height(411 * (pageW / 1920) * 0.37 + 'px')
		$('#main').scrollTop(now)
	};
	//计算屏幕初始高度
	if (pageH < 780) {
		console.log('高度小于执行阀值')
		$('#main').css('overflow-y', 'auto');
		$('.swiper_li').hide();
		for (var i = 0; i < pages.length; i++) { //每页高度
			pages[i].style.height = 'auto';
			arr[i] = $(pages[i]).height();
		}
		if (pageW <= 768) {
			// $('.dw_homepage_mainimage').attr('src', './img/dw_homepage_mainimage@0.5x.png')
			$('.dw_homepage_mainimage').attr('src', SMBGURL)
		} else {
			// $('.dw_homepage_mainimage').attr('src', './img/dw_homepage_mainimage.png')
			$('.dw_homepage_mainimage').attr('src', BGURL)
		}
		$('#main').scrollTop(0)
	}
}
testWidth()
	
	var pageIndex = 0;
	var startTime = 0, //滚动起始时间  
		endTime = 0, //滚动结束
		now = 0; //当前时间
	for (let i = 0, len = tagsLi.length; i < len; i++) {
		tagsLi[i].onclick = (event) => {
			if (pageIndex !== i) {
				let type = pageIndex > i ? 'up' : 'down',
					num = Math.abs(pageIndex - i),
					states = null;
				if (num === 1) {
					states = 'nolmal'
				} else if (num === 2) {
					states = 'esay'
				} else if (num === 3) {
					states = 'quikily'
				} else if (num === 4) {
					states = 'fast'
				}
				var pageH = document.body.clientHeight || document.documentElement.clientHeight;
				pageIndex = i; //赋值变化
				now = pageIndex * pageH;
				let everyHeight = [],
					everyTop = [];
				for (let i = 0; i < 5; i++) {
					everyHeight[i] = pages[i].style.height
					everyTop[i] = pages[i].scrollTop;
				}
				toPage(now, type, states); //页面滚动
				$('.swiper_li>li').eq(pageIndex).addClass('on').siblings().removeClass('on'); //更改样式
			}
		}
	}
	let firstType = true;
	$(window).resize(function (event) {
		console.log("resize");

		pageH = document.body.clientHeight || document.documentElement.clientHeight;
		pageW = document.body.clientWidth || document.documentElement.clientWidth;
		for (var i = 0; i < pages.length; i++) { //每页高度
			pages[i].style.height = pageH + "px";
			arr[i] = pages[i].offsetTop;
			console.log(arr[i])
		}
		testWidth()
		return false;
		if (pageH < 780 || pageW < 768) {
			$('.swiper_li').hide()
		} else {
			$('.swiper_li').show()
		}
		$('#wrap').css('overflow', 'auto');
		if (pageH < 780) { $('.swiper_li').hide() }
		if (pageW <= 768) {
			// $('.dw_homepage_mainimage').attr('src', './img/dw_homepage_mainimage@0.5x.png')
			$('.dw_homepage_mainimage').attr('src', SMBGURL)
		} else {
			// $('.dw_homepage_mainimage').attr('src', './img/dw_homepage_mainimage.png')
			$('.dw_homepage_mainimage').attr('src', BGURL)
		}
		
		//第二个页面的数据样式
		// $('#pageTitle').width(411 * (pageW / 1920) + 'px')
		// $('#pageTitle').height(411 * (pageW / 1920) * 0.37 + 'px')
		/* Act on the event */
		let oldPageH = pageH,
			oldPageW = pageW; //之前的页面高度和页面宽度
	
		wrap.style.height = pageH + "px";
		if (oldPageH < pageH || oldPageH > pageH) { //高度发生变化
			if (pageH < 780) {
				console.log(pageH,'small--')
				$('#main').css('overflow-y', 'auto');
				$('.swiper_li').hide();
				for (var i = 0; i < pages.length; i++) { //每页高度
					pages[i].style.height = 'auto';
					arr[i] = $(pages[i]).height();
					console.log('resize2')
				}
				if (pageW <= 768) {
					// $('.dw_homepage_mainimage').attr('src', './img/dw_homepage_mainimage@0.5x.png')
					$('.dw_homepage_mainimage').attr('src', SMBGURL)
				} else {
					// $('.dw_homepage_mainimage').attr('src', './img/dw_homepage_mainimage.png')
					$('.dw_homepage_mainimage').attr('src', BGURL)
				}
				//$('#main').scrollTop(0)
			} else {
				console.log(pageH,'big++')
				$('#wrap').css('overflow', 'hidden');
				
				for (var i = 0; i < pages.length; i++) { //每页高度
					pages[i].style.height = pageH + "px";
					arr[i] = pages[i].offsetTop;
				}
				
				//第一个页面数据样式
				$('.page1_p1>h1').css('font-size', pageW / 32 + 'px');
				$('.page1_p1>h1').css('line-height', pageW / 24 + 'px');
				$('.page1_p1>p').css('font-size', pageW / 90 + 'px');
				$('.page1_p1>p').css('line-height', pageW / 48 + 'px');
				//第二个页面的数据样式
				// $('#pageTitle').width(411 * (pageW / 1920) + 'px')
				// $('#pageTitle').height(411 * (pageW / 1920) * 0.37 + 'px')
				//$('#main').scrollTop(0)
			}
		} else if (oldPageW < pageW || oldPageW > pageW) {
			if (pageW < 768 && oldPageW > pageW) { //处于小屏幕状态下,方向向左,向左拉伸中
				$('#wrap').css('overflow', 'auto');
				$('.swiper_li').hide();
				for (var i = 0; i < pages.length; i++) { //每页高度
					pages[i].style.height = 'auto'; // arr[i] = $(pages[i]).height();
					arr[i] = pages[i].offsetTop;
				}
				//$('#main').scrollTop(arr[pageIndex]);

			} else if (pageW < 768 && oldPageW < pageW) { //小屏幕情况下,方向向右,向右拉伸

			} else if (pageW >= 768 && oldPageW < pageW) { //处于正常宽度下,方向向右,也就是向右边拉伸
				let ChangeTop = false;
				//第一个页面数据调整
				$('.page1_p1>h1').css('font-size', pageW / 32 + 'px');
				$('.page1_p1>h1').css('line-height', pageW / 24 + 'px');
				if (!firstType) {
					firstType = true;
					for (let i = 0, len = arr.length - 1; i < len; i++) {
						if (main.scrollTop >= arr[i] && main.scrollTop < arr[i + 1]) {
							ChangeTop = true;
							if (main.scrollTop <= (arr[i] + arr[i + 1]) / 2) {
								pageIndex = i;
								now = pageH * pageIndex;
								$('.swiper_li>li').eq(pageIndex).addClass('on').siblings().removeClass('on');
								break;
							} else {
								pageIndex = i + 1;
								now = pageH * pageIndex;
								$('.swiper_li>li').eq(pageIndex).addClass('on').siblings().removeClass('on');
								break;
							}
						}
					}
				}

				// $('#wrap').css('overflow', 'hidden');
				$('.swiper_li').show();
				
				for (var i = 0; i < pages.length; i++) { //每页高度
					pages[i].style.height = pageH + "px";
					// arr[i] = pageH;
					arr[i] = pages[i].offsetTop;
				}
				if (ChangeTop) {
					ChangeTop = false;
					$('#main').scrollTop(now);
					console.log(now,"if changeTop")
				}
			} else if (pageW >= 990 && oldPageW > pageW) { //处于正常宽度的时候,方向向左,也就是向左边拉伸
				//第一个页面数据调整
				$('.page1_p1>h1').css('font-size', pageW / 32 + 'px');
				$('.page1_p1>h1').css('line-height', pageW / 24 + 'px');
				$('.page1_p1>p').css('font-size', pageW / 90 + 'px');
				$('.page1_p1>p').css('line-height', pageW / 48 + 'px');
				// $('.swiper_li').show();
			};
			//书写样式
			if (pageW > 1200) { //lg样式

			} else if (pageW < 1200 && pageW > 992) { //md样式

			} else if (pageW < 992 && pageW > 768) { //

			}

			topHeight = $('#main').scrollTop();
		}
	});
	var scrollFun = (event) => {
		if (pageW < 768 || pageH < 780)  return false  
		startTime = new Date().getTime(); //和endTime组成阀值
		var delta = event.detail || (-event.wheelDelta); //向上滚动为负，向下滚动为正
		if ((endTime - startTime) < -1000) { //1s之内
			// console.log('条件符合，执行方法')
			// console.log(startTime,endTime,endTime - startTime)
			if (delta > 0 && parseInt($('#main').scrollTop()) < (pageH * (pageLen - 1))) {
				//向下滚动
				now = now + pageH; //向下翻过一页
				pageIndex++;
				$('.swiper_li>li').eq(pageIndex).addClass('on').siblings().removeClass('on')
				toPage(now, "down");
			}
			if (delta < 0 && parseInt($('#main').scrollTop()) > 0) {
				//向上滚动
				now = now - pageH;
				pageIndex--;
				$('.swiper_li>li').eq(pageIndex).addClass('on').siblings().removeClass('on')
				toPage(now, "up");
			}
			endTime = new Date().getTime(); //重置时间
		} else {
			// console.log('错误事件，不允许执行')
			return false;
		}
	}

	if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
		document.addEventListener("DOMMouseScroll", scrollFun, false);
	} else if (document.addEventListener) {
		document.addEventListener("mousewheel", scrollFun, false);
	} else if (document.attachEvent) {
		document.attachEvent("onmousewheel", scrollFun);
	} else {
		document.onmousewheel = scrollFun;
	}
	var sliderTime = null;

	function toPage(now, direction, states = 'nolmal') {
		var scrollFun = function () { console.log("置空滚动函数") }
		var step = Math.abs(topHeight - now) / 20;//一个总长度，然后又一个固定滚动步数20步，剩下的就是每一步要走的距离
		let stepNum = 0;//要走20步
		clearInterval(sliderTime); //执行当前动画同时清除之前的动画
		sliderTime = setInterval(() => {
			console.log('该方法，将会在点击的时候出发事件')
			if (stepNum === 20) {
				$('#main').scrollTop(topHeight);
				clearInterval(sliderTime);
			} else {
				if (direction == "down") { //明天,开始处理一下下面的数据,让数据能够完整显示出来
					topHeight += step;
					$('#main').scrollTop(topHeight);
				} else {
					topHeight -= step;
					$('#main').scrollTop(topHeight);
				}
				stepNum++
			}
		}, 10);
	}

	function adjustImg() {
		pageH = document.body.clientHeight || document.documentElement.clientHeight;
		pageW = document.body.clientWidth || document.documentElement.clientWidth;
		if (pageW <= 990) {
			$('.page4_card').addClass('page4_cardM')
			$('.page5_box').addClass('page5_boxM')
			$('#photo1').width(200 * (pageW / 990))
			$('#photo1').height(200 * (pageW / 990))
			$('#photo2').width(200 * (pageW / 990))
			$('#photo2').height(200 * (pageW / 990))
			$('.page4_p1').height(700 + 'px')
		} else if (pageW > 991) {
			$('.page4_card').removeClass('page4_cardM')
			$('.page4_card').addClass('page4_card')
			$('.page5_box').removeClass('page5_boxM')
			$('.page5_box').addClass('page5_box')
		}
	}
	adjustImg()
	$(window).resize(
		function adjustImg() {
			pageH = document.body.clientHeight || document.documentElement.clientHeight;
			pageW = document.body.clientWidth || document.documentElement.clientWidth;
			if (pageW <= 990) {
				$('.page4_card').addClass('page4_cardM')
				$('.page5_box').addClass('page5_boxM')
				$('#photo1').width(200 * (pageW / 990))
				$('#photo1').height(200 * (pageW / 990))
				$('#photo2').width(200 * (pageW / 990))
				$('#photo2').height(200 * (pageW / 990))
				$('.page4_p1').height(700 + 'px')
			} else if (pageW >= 990) {
				$('.page4_card').removeClass('page4_cardM')
				$('.page4_card').addClass('page4_card')
				$('.page5_box').removeClass('page5_boxM')
				$('.page5_box').addClass('page5_box')
			}
		}
	)
	let menuFlag = 0
	let menuBtn = document.getElementById('menuBtn')
	menuBtn.addEventListener('click', function () {
		if (menuFlag === 0) {
			$('#menu').show()
			$('#wrap').addClass('bulr')
			menuFlag = 1
		} else if (menuFlag === 1) {
			$('#menu').hide()
			$('#wrap').removeClass('bulr')
			menuFlag = 0
		}
	}, false)
		$('#menu').click(() => {
			$('#menu').hide()
			$('#wrap').removeClass('bulr')
			menuFlag = 0
		})
	let pageList = document.getElementsByClassName('item')
	
		for (let i = 0; i < pages.length; i++) {
			 pageList[i].addEventListener('click', 
			(event) => {
				pageH = document.body.clientHeight || document.documentElement.clientHeight;
				pageW = document.body.clientWidth || document.documentElement.clientWidth;
				// console.log(pageW,pageH,'讲道理，我应该是大于990 和 780的数据')
					if (pageW <= 768) {
						this.index = i;
								let nowScrollTop = $('#main').scrollTop();
								for (let j = 0; j < pages.length; j++) { //每页高度
									arr[j] = pages[j].offsetTop;
								}
								if (nowScrollTop > arr[i]) {
									let now = Math.abs(nowScrollTop - arr[i]) / 20, stepNum = 0;
									let timer = setInterval(() => {
										if (stepNum === 20) {
											clearInterval(timer)
										} else {
											nowScrollTop -= now
											$('#main').scrollTop(nowScrollTop);
											stepNum++;
										}
									}, 20)
								} else if (nowScrollTop < arr[i]) {
									let now = Math.abs(nowScrollTop - arr[i]) / 20, stepNum = 0;
									let timer = setInterval(() => {
										if (stepNum === 20) {
											clearInterval(timer)
										} else {
											nowScrollTop += now
											$('#main').scrollTop(nowScrollTop);
											stepNum++;
										}
									}, 20)
								} else if (nowScrollTop === arr[i]) {
									$('#menu').hide()
									$('#wrap').removeClass('bulr')
									menuFlag = 0
									return false;
								}
								$('#menu').hide()
								$('#wrap').removeClass('bulr')
								menuFlag = 0
					} else if (pageW > 768) {
						if (pageIndex !== i) {
							let type = pageIndex > i ? 'up' : 'down',
								num = Math.abs(pageIndex - i),
								states = null;
							if (num === 1) {
								states = 'nolmal'
							} else if (num === 2) {
								states = 'esay'
							} else if (num === 3) {
								states = 'quikily'
							} else if (num === 4) {
								states = 'fast'
							}
							pageIndex = i; //赋值变化
							now = pageIndex * pageH;
							// now = pages[i]
							toPage(now, type, states); //页面滚动
							$('.swiper_li>li').eq(pageIndex).addClass('on').siblings().removeClass('on'); //更改样式
							$('#menu').hide()
							menuFlag = 0
						}	
					}
			}, false)
	}	                                            
	document.getElementById('main').addEventListener('click',
		function () {
			$('#menu').hide()
			menuFlag = 0
		}, false)
})
       
   
               
    