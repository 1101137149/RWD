$(function () {


    $("header h3").on("click", aaa)
    function aaa(event) {


        $("nav").toggleClass("rrr");

        //有超連結避免跳到最上面 建議要加下面這段!
        event.preventDefault();
    }





})

