$(function() {

    // var videoElem = document.getElementById('video');
    // videoElem.addEventListener('loadedmetadata', function() {
    //     videoElem.playbackRate = 0;
    // });
    
    // video = document.getElementById('video');
    // video.playbackRate = 0.8; //速度調整

    //ハンバーガーメニュー
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        if($(this).hasClass('active')) {
            $('.nav').addClass('active');
        } else {
            $('.nav').removeClass('active');
        }
    });

    //ナビゲーション
    $('.nav__link').on('click', function() {
        if($('.nav').hasClass('active')) {
            $('.hamburger').removeClass('active');
            $('.nav').removeClass('active');
        }

        let elmHash = $(this).attr('href');
        let pos = $(elmHash).offset().top;
        let headerHeight = $('.header').innerHeight();
        //スムーススクロール
                //画面幅960px以上の時はヘッダーの高さを引いた地点までスクロール
        if(window.matchMedia('(min-width: 960px)').matches) {
            $('body, html').animate({
                scrollTop: pos - headerHeight
            }, 500);
        } else { //画面幅959px以下の時はヘッダーの高さは考慮しない
            $('body, html').animate({
                scrollTop: pos
            }, 500);
        }
    });
});