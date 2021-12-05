$(document).ready(function () {
    $(window).resize(function () {
        var ScreenHeight = document.body.clientHeight;
        var ScreenWidth = document.body.clientWidth;
        var HeaderHeight = $('.index-header').height();
        if (ScreenHeight < 500 && ScreenWidth < 1000) {
            $('body').css('overflow-y', 'hidden');
            $('body').append("<section class='screen-alert'></section>");
            $('.screen-alert').append("<div class='screen-alert-content'></div>");
            $('.screen-alert-content').append("<i class='fas fa-mobile-alt'></i>");
            $('.screen-alert-content').append("<p>為了最佳的使用體驗，<br>請旋轉您的手機為直立瀏覽</p>");
        } else {
            $('.screen-alert').remove();
            $('body').css('overflow-y', 'auto');
        }
        if (ScreenHeight < ScreenWidth) {
            $('.main-vision').height(ScreenHeight - HeaderHeight);
            $('.main-vision-character').height(ScreenHeight - HeaderHeight);
            $('.main-vision-books').height(ScreenHeight - HeaderHeight);
        } else {
            $('.main-vision').height(ScreenHeight - HeaderHeight);
            $('.main-vision-character').height(ScreenWidth - HeaderHeight);
            $('.main-vision-books').height(ScreenWidth - HeaderHeight);
        }
    });
});