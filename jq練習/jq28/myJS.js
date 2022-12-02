$(function () {
    $("Header h3").on("click", aaa)


    function aaa() {

        $("nav").animate({ left: 0 }, 300)
        $("section").on("click", bbb)


    }

    function bbb() {

        $("nav").animate({ left: -180 }, 300)


    }








})

