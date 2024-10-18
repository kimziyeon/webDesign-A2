$(function () {

    $('.pop_on').click(function () {
        $('.popup').show();
        return false;
    })

    $('.xbtn').click(function () {
        $('.popup').hide();
    })

    $('nav ul li').mouseenter(function () {
        $('.sub,.sub_bg').stop().slideDown();
    })

    $('nav').mouseleave(function () {
        $('.sub,.sub_bg').stop().slideUp();
    })

    $('nav ul li a').focusin(function () {
        $('.sub,.sub_bg').stop().slideDown();

    })

    $('.sub li').focusin(function () {
        $(this).addClass('on');
    })

    $('.sub li').focusout(function () {
        $(this).removeClass('on');
    })

    $('.sub li:last-child').focusout(function () {
        $('.sub,.sub_bg').stop().slideUp();
    })




    function slide() {
        $('.slide ul').animate({ left: '-1200px' }, 1000, function () {
            $('.slide ul').append(
                $('.slide ul li').first());
            $('.slide ul').css({ left: '0' })
        })
    }
    setInterval(slide, 3000)


})