window.addEventListener('scroll', function (e) {
    const target = document.querySelectorAll('.scroll');
    const scrolled = window.pageYOffset;
    for (let i = 0; i < target.length; i++) {
        const pos = scrolled * target[i].dataset.rate;
        target[i].style.transform = `translate3d(0px, ${pos}px, 0px)`;
    }

})