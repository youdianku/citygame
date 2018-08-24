//切换奖金
var $span1 = $('.cup .span1'),
	$span2 = $('.cup .span2'),
	$span3 = $('.cup .span3');
$('.award-box li').click(function(){
	var idx = $(this).index();
	$(this).addClass('on').siblings().removeClass('on');
	if (idx === 0) {
		$span1.text('500');
		$span2.text('800');
		$span3.text('300');
	}
	if (idx === 1) {
		$span1.text('3000');
		$span2.text('5000');
		$span3.text('2000');
	}
	if (idx === 2) {
		$span1.text('200,000');
		$span2.text('300,000');
		$span3.text('100,000');
	}
})

//切换礼包
$('.gift-box li').click(function(){
	var idx = $(this).index();
	$(this).addClass('on').siblings().removeClass('on');
	if(idx === 0){
		$('.in-bag').empty().append('<ul class="ul2 clearfix gift-audition">\
									<li class="out-li">\
										<div class="spr inmatch"></div>\
										<ul>\
											<li>5千万EP</li>\
											<li>最佳赛季巨星3强BEST100（含UB1强）*1</li>\
											<li>LP巨星3强BEST100（含UB1强）*2</li>\
											<li>16EC巨星3强BEST100(含UB 1强)  *2</li>\
											<li>世界级助教包ALL（1.0~5.0星）*3</li>\
											<li>20级经验卡 *1</li>\
										</ul>\
									</li>\
									<li class="out-li">\
										<div class="spr vip"></div>\
										<p class="p1">海选赛赛点季军将获得 <span>1</span> 个vip礼包</p>\
										<p>海选赛赛点亚军将获得 <span>3</span> 个vip礼包</p>\
										<ul class="in-ul2">\
											<li>2亿EP</li>\
											<li>阶梯传奇球员卡  *1</li>\
											<li>20级经验卡  *2</li>\
											<li>CP巨星5强BEST100（含UL 1强）*1</li>\
											<li>LP巨星3强BEST100（含UB1强）*5</li>\
											<li>16EC巨星3强BEST100(含UL 1强)  *5</li>\
										</ul>\
									</li>\
									<li class="out-li li3">\
										<div class="spr champion"></div>\
										<ul>\
											<li>10亿EP</li>\
											<li>终极传奇球员包*1</li>\
											<li>20级经验卡*5</li>\
											<li>CP巨星5强BEST100（含UL 1强）*3</li>\
											<li>LP巨星5强BEST100（含UL1强）*3</li>\
											<li>传奇级助教包(2.0~5.0星）*10</li>\
										</ul>\
									</li>\
								</ul>');
	}
	if(idx === 1){
		
//		alert('神秘好礼敬请期待!');
								
//		$('.in-bag').empty().append('<ul class="ul2 clearfix">\
//									<li class="out-li">\
//										<div class="spr inmatch"></div>\
//										<ul>\
//											<li>BP*500000</li>\
//											<li>金色球员包*3</li>\
//											<li>银色球员包*5</li>\
//										</ul>\
//									</li>\
//									<li class="out-li">\
//										<div class="spr vip"></div>\
//										<p class="p1">大区赛冠军获得 <span>6</span> 个vip礼包</p>\
//										<p>大区赛亚军获得 <span>3</span> 个vip礼包</p>\
//										<p>大区赛季军获得 <span>1</span> 个vip礼包</p>\
//										<ul class="in-ul2">\
//											<li>BP*1000000</li>\
//											<li>金色球员包*10</li>\
//										</ul>\
//									</li>\
//								</ul>');
	}
})