document.addEventListener('DOMContentLoaded', function() {
    // 为懒加载的图片添加 load 事件监听器
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.addEventListener('load', () => {
            console.log('Lazy-loaded image has loaded:', img);
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    $("#expand-htmldesign").on('click', function(){
    $("#htmldesign").show();
    $("#htmldesign img").each(function(){
    $(this).attr({src: $(this).attr('data-src')});
    });
    $("#hidehtmldesign").hide();
    });
    }); 
    window.onload = function() {
        // 页面完全加载后才执行的代码
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            img.addEventListener('load', () => {
                console.log('Lazy-loaded image has loaded:', img);
            });
        });
    };