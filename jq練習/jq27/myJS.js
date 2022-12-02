$(function () {
    $("header h3").on("click", show)
    function show(event) {

        $("nav").removeClass("CLOSE").addClass("OPEN");
        $("nav h3,section").on("click", hide);
        event.preventDefault()
    }



    function hide() {

        $("nav").removeClass("OPEN").addClass("CLOSE");

        //$("nav h3").off("click");


    }








})
