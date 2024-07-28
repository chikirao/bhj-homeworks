document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const progress = document.getElementById('progress');
    const xhr = new XMLHttpRequest();

    xhr.open('POST', form.action);

    xhr.upload.onprogress = function(event) {
        progress.value = 0;
        if (event.lengthComputable) {
            const percentComplete = event.loaded / event.total;
            progress.value = percentComplete;
        }
    };

    xhr.onload = function() {
        if (xhr.status === 201) {
            alert('Файл успешно загружен!');
            progress.value = 1.0;
        } else {
            alert('Произошла ошибка при загрузке файла.');
        }
    };

    xhr.onerror = function() {
        alert('Произошла ошибка при загрузке файла.');
    };

    xhr.send(formData);
});
