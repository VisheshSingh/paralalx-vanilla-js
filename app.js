window.addEventListener('scroll', function (e) {
    const target = document.querySelectorAll('.scroll');
    const scrolled = window.pageYOffset;
    for (let i = 0; i < target.length; i++) {
        const pos = scrolled * target[i].dataset.rate;
        if (target[i].dataset.direction == 'vertical') {
            target[i].style.transform = `translate3d(0px, ${pos}px, 0px)`;
        } else {
            const posX = scrolled * target[i].dataset.ratex;
            const posY = scrolled * target[i].dataset.ratey;
            target[i].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
        }
    }

})