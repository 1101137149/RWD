// $(function () {

//     $("h3").hover(function () {

//         $(this).siblings().stop(true, false).slideDown();

//     }, function () {

//         $(this).siblings().stop(true, false).slideUp();

//     })

// })


$(function () {

    $("h3").click(function () {

        $(this).siblings().stop(true, false).slideDown();

    })

})