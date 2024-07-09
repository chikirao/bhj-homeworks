const timer = document.getElementById('timer')


setInterval(() => {
    if (Number(timer.textContent) == 0) {
        alert('Вы победили в конкурсе!')
        return
    }
    timer.textContent = Number(timer.textContent) - 1
}, 1000)

// let hideTime = Number(timer.textContent)
// let displayTime = Date(Number(timer.textContent) * 1000)
// .toString()
// .slice(11, 19);