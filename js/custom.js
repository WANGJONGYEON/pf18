$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        navigation: {
            nextEl: ".main_visual .arrows .next",
            prevEl: ".main_visual .arrows .prev",
        },
    })
});

$(function () {
    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    })

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($(this).next().is('ul') && $('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul>li ul').slideUp();
            $(this).next().stop().slideDown();

        }
    })

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on')
        $('.header .gnb>ul>li ul').removeAttr('style')
    })
});

$(function () {
    $('.main_content .txt_box a').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.main_content .txt_box a').removeClass('on')
        $(this).addClass('on')
        $('.main_content .finale .more_box').removeClass('on')
        $('.main_content .finale .more_box').eq(idx).addClass('on')

    })
})



