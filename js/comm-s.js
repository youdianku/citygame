//�л�����
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

//�л����
$('.gift-box li').click(function(){
	var idx = $(this).index();
	$(this).addClass('on').siblings().removeClass('on');
	if(idx === 0){
		$('.in-bag').empty().append('<ul class="ul2 clearfix gift-audition">\
									<li class="out-li">\
										<div class="spr inmatch"></div>\
										<ul>\
											<li>5ǧ��EP</li>\
											<li>�����������3ǿBEST100����UB1ǿ��*1</li>\
											<li>LP����3ǿBEST100����UB1ǿ��*2</li>\
											<li>16EC����3ǿBEST100(��UB 1ǿ)  *2</li>\
											<li>���缶���̰�ALL��1.0~5.0�ǣ�*3</li>\
											<li>20�����鿨 *1</li>\
										</ul>\
									</li>\
									<li class="out-li">\
										<div class="spr vip"></div>\
										<p class="p1">��ѡ�����㼾������� <span>1</span> ��vip���</p>\
										<p>��ѡ�������Ǿ������ <span>3</span> ��vip���</p>\
										<ul class="in-ul2">\
											<li>2��EP</li>\
											<li>���ݴ�����Ա��  *1</li>\
											<li>20�����鿨  *2</li>\
											<li>CP����5ǿBEST100����UL 1ǿ��*1</li>\
											<li>LP����3ǿBEST100����UB1ǿ��*5</li>\
											<li>16EC����3ǿBEST100(��UL 1ǿ)  *5</li>\
										</ul>\
									</li>\
									<li class="out-li li3">\
										<div class="spr champion"></div>\
										<ul>\
											<li>10��EP</li>\
											<li>�ռ�������Ա��*1</li>\
											<li>20�����鿨*5</li>\
											<li>CP����5ǿBEST100����UL 1ǿ��*3</li>\
											<li>LP����5ǿBEST100����UL1ǿ��*3</li>\
											<li>���漶���̰�(2.0~5.0�ǣ�*10</li>\
										</ul>\
									</li>\
								</ul>');
	}
	if(idx === 1){
		
//		alert('���غ������ڴ�!');
								
//		$('.in-bag').empty().append('<ul class="ul2 clearfix">\
//									<li class="out-li">\
//										<div class="spr inmatch"></div>\
//										<ul>\
//											<li>BP*500000</li>\
//											<li>��ɫ��Ա��*3</li>\
//											<li>��ɫ��Ա��*5</li>\
//										</ul>\
//									</li>\
//									<li class="out-li">\
//										<div class="spr vip"></div>\
//										<p class="p1">�������ھ���� <span>6</span> ��vip���</p>\
//										<p>�������Ǿ���� <span>3</span> ��vip���</p>\
//										<p>������������� <span>1</span> ��vip���</p>\
//										<ul class="in-ul2">\
//											<li>BP*1000000</li>\
//											<li>��ɫ��Ա��*10</li>\
//										</ul>\
//									</li>\
//								</ul>');
	}
})