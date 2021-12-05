$(document).ready(function () {
    function Subject(PageData1, PageText1, PageData2, PageText2, PageData3, PageText3, PageData4, PageText4) {
        $('.helper').bind('click', function (e) {
            var PageName = $('body').data('name');
            $('body').append('<section class="subject"></section>');
            $('.subject').append('<div class="subject-content"></div>');
            $('.subject-content').append('<div class="subject-content-title"></div><div class="subject-content-text"></div>');
            $('.subject-content-title').append('<h5>引導您前往</h5><a href="#"><i class="fas fa-times subject-content-close"></i></a>');
            $('.subject-content-text').append('<a href="index.html" class="subject-content-text-link" data-name="Home"><i class="fas fa-arrow-circle-right"></i>&nbsp;&nbsp;首頁</a>');
            $('.subject-content-text').append('<a href="' +PageData1+ '.html" class="subject-content-text-link" data-name="' +PageData1+ '"><i class="fas fa-arrow-circle-right"></i>&nbsp;&nbsp;' + PageText1 + '</a>');
            $('.subject-content-text').append('<a href="' +PageData2+ '.html" class="subject-content-text-link" data-name="' +PageData2+ '"><i class="fas fa-arrow-circle-right"></i>&nbsp;&nbsp;' + PageText2 + '</a>');
            $('.subject-content-text').append('<a href="' +PageData3+ '.html" class="subject-content-text-link" data-name="' +PageData3+ '"><i class="fas fa-arrow-circle-right"></i>&nbsp;&nbsp;' + PageText3 + '</a>');
            $('.subject-content-text').append('<a href="' +PageData4+ '.html" class="subject-content-text-link" data-name="' +PageData4+ '"><i class="fas fa-arrow-circle-right"></i>&nbsp;&nbsp;' + PageText4 + '</a>');
            $('.subject-content-text').append('<a href="https://forms.gle/W4qRovKNTgfRCNoPA" target="_blank" class="subject-content-text-line">&nbsp;&nbsp;Line Points</a>');
            $('.subject').css({ 'display': 'flex', 'visibility': 'visible' });
            setTimeout(() => {
                $('.subject').css({ 'opacity': '1' });
            }, 1);
            var Number = $('.subject-content-text a').length;
            for (let i = 0; i < Number; i++) {
                var ListName = $('.subject-content-text a').eq(i).data('name');
                if ( PageName == ListName ) {
                    $('.subject-content-text a').eq(i).removeClass('subject-content-text-link');
                    $('.subject-content-text a').eq(i).addClass('subject-content-text-active click-none');
                    $('.subject-content-text a i').eq(i).addClass('fas fa-street-view');
                }
            };
            $('body').css('overflow-y', 'hidden');
            return false;
        });
    }
    Subject('hot', '熱門打卡套餐', 'supplement', '能量補充快餐', 'hungry', '飢不擇食全餐', 'flavor', '異國風味大餐');

    $('body').on('click', '.subject-content-close', function (e) {
        $('.subject').css({ 'opacity': '0', 'visibility': 'hidden' });
        setTimeout(() => {
            $('.subject').remove();
        }, 1000);
        $('body').css('overflow-y', 'auto');
        return false;
    });

    $('body').on('click', '.click-none', function (e) {
        return false;
    });
});