$(document).ready(function () {
    $('body').css({ 'overflow-y': 'hidden' });
    $('.start-content-btn').bind('click', function (e) {
        $('.start').css({ 'opacity': '0', 'visbility': 'hidden' });
        $('.start').css({ 'opacity': '0', 'visbility': 'hidden' });
        $('.index').css({'overflow-y': 'auto'});
        setTimeout(() => {
            $('.start').css({ 'display': 'none' });
            $('.main-vision-character').addClass('character-moving');
        }, 500);
        setTimeout(() => {
            $('.main-vision-books').addClass('books-animation-show');
        }, 2000);
        setTimeout(() => {
            $('.start').css({ 'display': 'none' });
        }, 2000);
    });
    $('.start-content-skip').bind('click', function (e) {
        $('.index').css({'overflow-y': 'auto'});
        $('.start').css({ 'opacity': '0', 'visbility': 'hidden' });
        $('.main-vision-character').addClass('character-show');
        $('.main-vision-books').addClass('books-show');
        setTimeout(() => {
            $('.start').css({ 'display': 'none' });
        }, 500);
    });
});