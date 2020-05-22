/* --------------------------------
 * ハンバーガーメニュー
 * -------------------------------- */
$(".menu-toggler").click(function(){

    var topVal = 0;
    if($(this).hasClass("active")) {
        topVal = -700;
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }

    $("#menu").stop().animate({
        top: topVal
    }, 200);
});

 /* --------------------------------
 * スムーズスクロール
 * -------------------------------- */
$('a[href^="#"]').click(function(){

  var speed = 400;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href); 
  var position = target.offset().top;

  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
});



/* --------------------------------
 * 製品紹介のページ遷移
 * -------------------------------- */
$(function(){
	if($('main').attr('id') === 'capacitor'){
		$('[data-capacitor]').each(function(index, el) {
			const capacitor_id = location.search.replace('?id=', '');    //URLのページid
			let capacitor_key = $(this).attr('data-capacitor');
						
			$(this).text(capacitor[capacitor_id - 1][capacitor_key]);
		});
	}	
});


/* --------------------------------
 * トップページ/タブ切り替え
 * -------------------------------- */
const showTab = (selector) => {
		$('.tabs-menu div').removeClass('active');
	
		if (selector === '#tabs-a') {
			$('#tab-menu-a').addClass('active');

		} else if (selector === "#tabs-b") {
			$('#tab-menu-b').addClass('active');

		} else {
			$('#tab-menu-c').addClass('active');
		}

		$('.tabs-content > div').hide();
		$(selector).show();
	};

	$('.tabs-menu div').on('click', (e) => {

		const eventId = event.target.id;
	 
		if (eventId == "tab-menu-a") {
			console.log("タブA");
			showTab('#tabs-a');
	
		} else if (eventId == "tab-menu-b") {
			console.log("タブB");
			showTab('#tabs-b');
			
		} else {
			console.log("タブC");
			showTab('#tabs-c');
		}
	});
	
	showTab('#tabs-a');
	
	