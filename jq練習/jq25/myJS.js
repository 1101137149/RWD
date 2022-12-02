$(function () {
    //touchend click  手機觸控
    //click 一般點擊
    $(".box h3").on("click", show)


    function show(event) {

        $(this).siblings().stop(true, false).slideToggle();
        $(this).parent().siblings().find(".content").slideUp();

        //如果在CSS 裡下 cursor: pointer; 就不需要下下面這段
        //如果在卷軸下面按超連結 會跳到最上面
        //加入事件  阻擋預設事件
        //event.preventDefault();

    }








});


