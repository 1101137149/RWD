$(function () {


    $("#MENU li").hover(function () {
        //$(對象).animate({css},時間)
        $(this).stop(true, false).animate({ top: 0 }, 150);
        $(this).prev().stop(true, false).animate({ top: 50 }, 150);
        $(this).next().stop(true, false).animate({ top: 50 }, 150);




    }, function () {
        $("#MENU li").stop(true, false).animate({ top: 100 }, 150);


    })





})