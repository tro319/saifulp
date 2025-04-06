

function scrollDown() {

    // ターゲットを全て取得

    const targets = document.querySelectorAll(".fadeDown");

    for (let i = 0; i < targets.length; i++) {

        // ターゲットのオフセットの高さを取得

        var targetTop = targets[i].offsetTop;

        if (targetTop < scrollY + window.innerHeight) {

            // ターゲットが画面内にあれば、即時にフェードイン

            targets[i].classList.add("sc-animate");

        } else if (window.scrollY > targetTop - window.innerHeight + 50) {

            // スクロールに合わせて、フェードイン

            targets[i].classList.add("sc-animate");

        }
    }
};



document.addEventListener("DOMContentLoaded", function() {


    // 画像遅延読み込み

      document.querySelectorAll("img").forEach(function(img) {
        img.setAttribute("loading", "lazy");
      });

// スクロールフェードイン処理関数呼び出し

    scrollDown();

    window.addEventListener("scroll", function() {
        
        // スクロールフェードイン処理関数呼び出し

        scrollDown();
    });

});





