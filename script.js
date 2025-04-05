
jQuery(window).on("load scroll", function() {
    var target = jQuery(".fadeUp");
    var scAnime = "sc-animate";

    var scPos = jQuery(window).scrollTop();
    var winHei = jQuery(window).height();

    target.each(function () {

        var targetOffset = jQuery(this).offset().top;

        // 対象要素があれば、フェードアップ表示。

        if (targetOffset < scPos + winHei) {
            jQuery(this).addClass(scAnime);
        }

        // スクロール時に、フェードアップ表示。

        if (scPos > targetOffset - winHei + 130) {
            jQuery(this).addClass(scAnime);
        }
    });
});