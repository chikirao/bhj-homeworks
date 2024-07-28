const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

function createAnswerButton(text, index, pollId) {
    const button = document.createElement('button');
    button.classList.add('poll__answer');
    button.textContent = text;

    button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(`vote=${pollId}&answer=${index}`);

        xhr.addEventListener('load', () => {
            const response = JSON.parse(xhr.responseText);
            const stats = response.stat;
            pollAnswers.innerHTML = '';
            stats.forEach(stat => {
                const result = document.createElement('div');
                result.textContent = `${stat.answer}: ${stat.votes} голосов`;
                pollAnswers.appendChild(result);
            });
        });
    });

    return button;
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const pollData = response.data;

        pollTitle.textContent = pollData.title;

        pollData.answers.forEach((answer, index) => {
            const answerButton = createAnswerButton(answer, index, response.id);
            pollAnswers.appendChild(answerButton);
        });
    }
});
