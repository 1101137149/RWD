$(function () {
    $('.AA').click(function () {

        //不包含自己的同代
        // $(this).siblings().css({ 'background-color': 'rgb(0, 83, 102)' })

        //我的下一個同代
        //$(this).next().css({ 'background-color': 'rgb(0, 83, 102)' })

        //我的下一個同代以後的全部
        //$(this).nextAll().css({ 'background-color': 'rgb(0, 83, 102)' })

        //我的下一個同代以後的 直到.TT為止(不包含.TT)
        //$(this).nextUntil('.TT').css({ 'background-color': 'rgb(0, 83, 102)' })

        //我的上一個同代
        //$(this).prev().css({ 'background-color': 'rgb(0, 83, 102)' })

        //我的上一個同代以前的全部
        //$(this).prevAll().css({ 'background-color': 'rgb(0, 83, 102)' })

        //我的上一個同代以前的 直到.CC為止(不包含.CC)
        //$(this).prevUntil('.CC').css({ 'background-color': 'rgb(0, 83, 102)' })

        //我的同代的第一個
        //$(this).siblings().first().css({ 'background-color': 'rgb(0, 83, 102)' })

        //我的同代的最後一個
        //$(this).siblings().last().css({ 'background-color': 'rgb(0, 83, 102)' })

        //eq從0算起 不包含自己
        //$(this).siblings().eq(3).css({ 'background-color': 'rgb(0, 83, 102)' })

        //你的爸爸會被選到
        //$(this).parent().css({ 'background-color': 'rgb(0, 83, 102)' })

        //你的祖宗18代都會被選到
        //$(this).parents().css({ 'background-color': 'rgb(0, 83, 102)' })

        //你的祖宗18代都會被選到 到#BOX為止(不包含#BOX)
        //$(this).parentsUntil("#BOX").css({ 'background-color': 'rgb(0, 83, 102)' })

        //你的爸爸的第一個兄弟(同代)  不包含自己
        //$(this).parent().siblings().first().css({ 'background-color': 'rgb(0, 83, 102)' })

        //你的爸爸的第一個兄弟(同代)  不包含自己
        //$(this).parent().siblings().eq(2).css({ 'background-color': 'rgb(0, 83, 102)' })

        //你的爸爸的第一個兄弟(同代)的所有小孩  不包含自己 有以下兩種 但find要給予標籤名稱
        //$(this).parent().siblings().eq(0).children().css({ 'background-color': 'rgb(0, 83, 102)' })
        //$(this).parent().siblings().eq(0).find("li").css({ 'background-color': 'rgb(0, 83, 102)' })

        //同代不包含自己 從第四個以後的全部
        //$(this).siblings().slice(4).css({ 'background-color': 'rgb(0, 83, 102)' })

        //你的爸爸 的同代的第一個兄弟(不包含自己) 的小孩的第二個(包含)以後的全部
        //$(this).parent().siblings().eq(1).children().slice(2).css({ 'background-color': 'rgb(0, 83, 102)' })

        //你的爸爸 的同代的第0個兄弟(不包含自己) 的小孩全部 但不要P跟h2標籤
        //$(this).parent().siblings().eq(0).children().not("p,h2").css({ 'background-color': 'rgb(0, 83, 102)' })


        //你的爸爸 的同代的第0個兄弟(不包含自己) 的小孩全部 但不要P跟h2標籤 並加入body標籤
        //$(this).parent().siblings().eq(0).children().not("p,h2").add("body").css({ 'background-color': 'rgb(0, 83, 102)' })

        //你的爸爸 的同代的第1個兄弟(不包含自己) 的小孩  但只抓基數的小孩
        $(this).parent().siblings().eq(1).children().filter(":odd").css({ 'background-color': 'rgb(0, 83, 102)' })
    })














})