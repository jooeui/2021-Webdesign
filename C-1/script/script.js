$(document).ready(function(){
    /* 메뉴 */
    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(300);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(300);
    });
    
    /* 이미지 슬라이드 */
    $('.imgslide a:gt(0)').hide();
    
    setInterval(function(){
        $('.imgslide a:first-child').fadeOut()
            .next('a').fadeIn()
            .end().appendTo('.imgslide');
    },3000);
    
    /* 탭 메뉴 */
    $('.tabmenu>li>a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    /* 레이어 팝업창 */
    $('.notice a:first').click(function(){
        $('.popup').show();
    });
    $('.cancleBtn').click(function(){
        $('.popup').hide();
    });
});