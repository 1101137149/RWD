$(function () {

    $(".small img").click(function () {
        var N = $(this).index();

        //使用淡入效果顯示被選到的元素
        $(".big img").eq(N).fadeIn();

        //使用淡出效果来隱藏被選到的元素
        $(".big img").eq(N).siblings().fadeOut();

        //  可以寫在同一行
        //$(".big img").eq(N).fadeIn().siblings().fadeOut();

    })





})