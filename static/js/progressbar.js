document.addEventListener('DOMContentLoaded', function() {
    // 初始化进度条
    function initProgressBar() {
        var winHeight = window.innerHeight,
            docHeight = document.documentElement.scrollHeight,
            progressBar = document.querySelector('#content_progress');

        if (!progressBar) {
            console.error("#content_progress element not found in DOM");
            return;
        }

        progressBar.max = docHeight - winHeight;
        progressBar.value = window.scrollY || document.documentElement.scrollTop;

        document.addEventListener('scroll', function () {
            progressBar.max = document.documentElement.scrollHeight - window.innerHeight;
            progressBar.value = window.scrollY || document.documentElement.scrollTop;
        });
    }

    // 初始化懒加载图片
    function initLazyLoading() {
        var lazyImages = document.querySelectorAll('img[data-src]');

        if ('IntersectionObserver' in window) {
            let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        let img = entry.target;
                        img.setAttribute('src', img.getAttribute('data-src'));
                        img.removeAttribute('data-src');
                        lazyImageObserver.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(function(img) {
                lazyImageObserver.observe(img);
            });
        } else {
            // 回退到滚动事件监听的懒加载方法（不推荐）
            function isInViewport(element) {
                var rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            function lazyLoad() {
                lazyImages.forEach(function (img) {
                    if (isInViewport(img)) {
                        img.setAttribute('src', img.getAttribute('data-src'));
                        img.removeAttribute('data-src');
                    }
                });
            }

            lazyLoad();
            window.addEventListener('scroll', lazyLoad);
        }
    }

    // 执行初始化函数
    initProgressBar();
    initLazyLoading();
});