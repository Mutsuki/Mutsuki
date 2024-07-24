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

    // 判断元素是否在视窗内的函数
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // 懒加载图片
    function lazyLoad() {
        lazyImages.forEach(function (img) {
            if (isInViewport(img)) {
                img.setAttribute('src', img.getAttribute('data-src'));
                img.removeAttribute('data-src');
            }
        });
    }

    // 初始懒加载
    lazyLoad();

    // 监听滚动事件，动态加载图片
    window.addEventListener('scroll', lazyLoad);
}

// DOM内容加载完成后初始化
document.addEventListener('DOMContentLoaded', function () {
    initProgressBar();
    initLazyLoading();
});

document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.addEventListener('load', () => {
        console.log('Lazy-loaded image has loaded:', img);
    });
});