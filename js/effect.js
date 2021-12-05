$(document).ready(function () {
    var ScreenHeight = document.body.clientHeight;
    var ScreenWidth = document.body.clientWidth;
    var HeaderHeight = $('.index-header').height();
    $('body').append('<a href="#" class="helper helper-l"></+>');
    $('.helper-l').not('.helper-m').append('<i class="fas fa-exclamation-circle"></i><span>小幫手</span>');

    $('body').append('<a href="#" class="helper helper-m"></+>');
    $('.helper-m').append('<i class="fas fa-exclamation-circle"></i><span>小幫手</span>');
    
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