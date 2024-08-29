document.addEventListener('DOMContentLoaded', function() {
    // 为懒加载的图片添加 load 事件监听器
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.addEventListener('load', () => {
            console.log('Lazy-loaded image has loaded:', img);
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    $("#expand-photosNewZealand").on('click', function(){
    $("#overflowNewZealand").show();
    $("#overflowNewZealand img").each(function(){
    $(this).attr({src: $(this).attr('data-src')});
    });
    $("#hideNewZealand").hide();
    });
    }); 