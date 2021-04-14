$(document).ready(function(){
    /* 메뉴 - 서브메뉴 아래로 */
    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(300);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(300);
    });
    
    /* 이미지 슬라이드 - 페이드인아웃 */
    $('.imgslide a:gt(0)').hide();
    setInterval(function(){
        $('.imgslide a:first-child').fadeOut()
            .next('a').fadeIn()
            .end().appendTo('.imgslide');
    }, 3000);
})