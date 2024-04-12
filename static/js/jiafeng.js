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
