const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const userIdSpan = document.getElementById('user_id');
const storedUserId = localStorage.getItem('user_id');

if (storedUserId) {
    userIdSpan.textContent = storedUserId;
    welcome.classList.add('welcome_active');
    signin.classList.remove('signin_active');
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const data = {
        login: formData.get('login'),
        password: formData.get('password')
    };

    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem('user_id', data.user_id);
            userIdSpan.textContent = data.user_id;
            welcome.classList.add('welcome_active');
            signin.classList.remove('signin_active');
        } else {
            alert('Неверный логин/пароль');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке данных');
    });
});
