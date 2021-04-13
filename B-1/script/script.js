$(document).ready(function(){
    // 메뉴
    $('.navi').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(400);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(400);
    });
    
    // 이미지 슬라이드
    var imgCount = $('.imgslide a').length;
    var slideWidth = imgCount * 1200 + "px";
    $('.slideList').css({'width' : slideWidth});
    
    var imgIndex = 0;
    var slidePosition = 0;
    
    setInterval(function(){
        if(imgIndex < imgCount-1){
            imgIndex++;
        } else {
            imgIndex = 0;
        }
        
        slidePosition = imgIndex * -1200 + "px";
        
        $('.slideList').animate({'left' : slidePosition});
    }, 3000);
    
    // 탭 메뉴
    $('.tabmenu>li>a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    // 레이어 팝업창
    $('.notice a:first').click(function(){
        $('.popup').show();
    });
    $('.cancleBtn').click(function(){
        $('.popup').hide();
    });
})