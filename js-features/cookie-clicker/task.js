const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');

cookie.onclick = () => {
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
    cookie.width += 10;
    setTimeout(() => {
        cookie.width -= 10;
    }, 100);
}