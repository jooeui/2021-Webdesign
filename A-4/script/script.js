$(document).ready(function(){
    // 메뉴
    $('.navi').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(400);
        $('.top').stop().animate({'height' : '230px'});
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(400);
        $('.top').stop().animate({'height' : '100px'});
    });
    
    // 이미지 슬라이드
    $('.imgslide a:gt(0)').hide();
    
    setInterval(function(){
        $('.imgslide a:first-child').fadeOut()
            .next('a').fadeIn()
            .end().appendTo('.imgslide');
    }, 3000);
    
    // 레이어 팝업창
    $('.notice a:first').click(function(){
        $('.popup').show();
    });
    $('.canclebtn').click(function(){
        $('.popup').hide();
    });
})