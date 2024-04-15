function initProgressBar() {
    var winHeight = window.innerHeight,
        docHeight = document.documentElement.scrollHeight,
        progressBar = document.querySelector('#content_progress');

    if (!progressBar) {
        console.error("#content\_progress element not found in DOM");
        return;
    }

    progressBar.max = docHeight - winHeight;
    progressBar.value = window.scrollY;

    document.addEventListener('scroll', function () {
        progressBar.max = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.value = window.scrollY;
    });
}

document.addEventListener('DOMContentLoaded', initProgressBar);



document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = document.querySelectorAll('img[data-src]');
  
  // 遍历所有带有data-src属性的图片
  lazyImages.forEach(function(img) {
    // 当图片出现在视窗内时，将data-src的值赋给src
    if (isInViewport(img)) {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.removeAttribute('data-src');
    }
  });
  
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
  
  // 监听滚动事件，动态加载图片
  window.addEventListener('scroll', function() {
    lazyImages.forEach(function(img) {
      if (isInViewport(img)) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.removeAttribute('data-src');
      }
    });
  });
});
