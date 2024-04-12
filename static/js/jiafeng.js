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

document.addEventListener('DOMContentLoaded', function () {
    var lazyImages = [].slice.call(document.querySelectorAll('img.lazyload'));

    if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazyload');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Possibly fall back to a more compatible method here
    }
});
