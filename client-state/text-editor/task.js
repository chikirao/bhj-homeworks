const editor = document.getElementById('editor');
const clearButton = document.getElementById('clear-button');

const savedText = localStorage.getItem('editorContent');
if (savedText) {
    editor.value = savedText;
}

editor.addEventListener('input', () => {
    localStorage.setItem('editorContent', editor.value);
});

clearButton.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('editorContent');
});
