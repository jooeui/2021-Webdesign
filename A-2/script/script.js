$(document).ready(function(){
    // 메뉴
    $('.navi').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(400);
        $('.top').stop().animate({'height' : '235px'})
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(400);
        $('.top').stop().animate({'height' : '100px'})
    });
    
    // 이미지 슬라이드
    var imgCount = $('.imgslide a').length;
    var slideWidth = imgCount * 1200 + "px"
    $('.slideList').css({'width' : slideWidth});
    
    var imgIndex = 0;
    var slidePosition = 0;
    
    setInterval(function(){
        if(imgIndex < imgCount-1) {
            imgIndex++;
        } else {
            imgIndex = 0;
        }
        
        slidePosition = imgIndex * -1200 + "px";
        $('.slideList').animate({'left' : slidePosition});
    }, 3000);
    
    // 모달 레이어 팝업창
    $('.notice li:first').click(function(){
        $('#modal').show();
    });
    $('.cancleBtn').click(function(){
        $('#modal').hide();
    });
});