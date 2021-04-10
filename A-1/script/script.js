$(document).ready(function(){
    // 메뉴
    $('.navi').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(400);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(400);
    });
    
    // 슬라이드 이미지
    var imgCount = $('.imgslide a').length;
    var currentIndex = 0;
    
    setInterval(function(){
        if(currentIndex < imgCount-1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        
        var slidePosition = -300 * currentIndex + "px";
        
        $('.imgList').animate({ 'top' : slidePosition });
        
    }, 3000);
    
    // 탭 메뉴
    $('.tabmenu>li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    // 공지사항의 title이 일정 글자 수가 넘어 가면 경우 ...으로
    $('.notice .n_title').each(function(){
        if($(this).text().length > 47){
            $(this).html($(this).text().substr(0, 47)+"...");
        }
    });
    
    // 레이어 팝업창
    $('.notice a:first').click(function(){
        $('.popup').show();
    });
    $('.close_btn').click(function(){
        $('.popup').hide();
    });
})