$(function(){

    // ページトップに戻る

    $('.pagetop').hide();
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 700 ) {
            $('.pagetop').fadeIn();
        } else {
            $('.pagetop').fadeOut();
        }
    });

    $('.pagetop').click(function(){
        $(".body,html").animate({scrollTop: 0}, 500);
        return false;
    });

    // スクロールしたら表示する（waypoints）

    $("#about").waypoint(function(){
        if($("#about").css("visibility") == "visible"){

        } 
        else{
            $("#about").css("visibility","visible");
            // $("#about").fadeIn();
            $("#about").toggleClass("animated fadeInUp");
        }
    },{offset: "40%"});

    // スムーズスクロール

    $('.nav-link').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
});




