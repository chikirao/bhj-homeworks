const timer = document.getElementById('timer');
let hideTime = Number(timer.textContent);

let timeCounter = setInterval(() => {
    if (hideTime == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timeCounter);
        return
    }
    hideTime -= 1;
    const displayTime = new Date(hideTime * 1000);
    timer.textContent = displayTime.toISOString().slice(11, 19);;
}, 1000);