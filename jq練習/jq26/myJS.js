$(function () {

    $("header h3").on("click", show);
    function show(event) {
        $("header nav").stop(true, false).slideToggle();
        $("section").on("click", hide)
        event.preventDefault();

    }

    function hide() {
        /*隱藏選單 */
        $("header nav").stop(true, false).slideUp();

        /*把原本on("click", show)事件 關閉 */
        /*要把原本的on關閉是因為 
        手機板的功能 如果on沒有關閉  就不能用選取文字 複製的功能 所以要關閉! */
        $("section").off("click")
    }




})