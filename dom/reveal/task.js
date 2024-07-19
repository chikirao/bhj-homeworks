document.addEventListener('scroll', onScroll);

function onScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((reveal) => {
        if (isElementInViewport(reveal)) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
}

function isElementInViewport(elem) {
    const { top, bottom } = elem.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
        return false;
    }
    return true;
}
