document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');
  
    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
        let activeIndex = 0;
  
        setInterval(() => {
            cases[activeIndex].classList.remove('rotator__case_active');
            activeIndex = (activeIndex + 1) % cases.length;
            cases[activeIndex].style.color = cases[activeIndex].getAttribute('data-color');
            cases[activeIndex].classList.add('rotator__case_active');
        }, 1000);
    });
});