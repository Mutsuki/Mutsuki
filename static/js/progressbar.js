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

    // 执行初始化函数
    initProgressBar();

});