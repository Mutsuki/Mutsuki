document.addEventListener('DOMContentLoaded', function() {
    // 为懒加载的图片添加 load 事件监听器
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.addEventListener('load', () => {
            console.log('Lazy-loaded image has loaded:', img);
        });
    });
});