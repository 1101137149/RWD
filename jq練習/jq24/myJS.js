$(
    function () {

        $(".BANNER").click(function () {
            //slideDown使用滑動效果，顯示"隱藏的被選元素"
            //slideUp使用滑動效果，隱藏的"被選元素"


            $(this).find(".BOX").slideDown(300);
            $(this).siblings().find(".BOX").slideUp(300);

            //可以寫在同一行
            //$(this).find(".BOX").slideDown(300).end().siblings().find(".BOX").slideUp(300);

        })


    }

)