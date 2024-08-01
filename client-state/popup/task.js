const modal = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close');

function setCookie(name, value) {
    document.cookie = name + "=" + value;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

if (!getCookie('modalClosed')) {
    modal.classList.add('modal_active');
}

closeButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('modalClosed', 'true');
});
