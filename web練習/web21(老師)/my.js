$(function () {
    $(".header h3").on("click", show)


    function show() {
        $(".header ul").show();
        $(".header .close").on("click", hide);
    }



    function hide() {
        $(".header ul").hide();

    }

    //on 直接寫function執行
    $(window).on("resize", function () {
        var N = $(window).width();

        //螢幕超過768的話 就要出現選單
        if (N >= 768) {
            $(".header ul").show();

        } else {
            $(".header ul").hide();

        }


    })









})
