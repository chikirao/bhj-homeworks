const bookControlsSize = Array.from(document.querySelectorAll('.book__control_font-size a'));
// const bookControlsTxtColor = Array.from(document.querySelectorAll('.book__control_color a'));
// const bookControlsBgColor = Array.from(document.querySelectorAll('.book__control_background a'));
const book = document.querySelector('#book');

bookControlsSize.forEach((sizeControl) => {
    sizeControl.addEventListener('click', (e) => {
        e.preventDefault();
        book.className = 'book';
        atrSize = sizeControl.getAttribute('data-size');
        if (atrSize == 'big') {
            book.classList.add('book_fs-big')
        } else if (atrSize == 'small') {
            book.classList.add('book_fs-small')
        }
        bookControlsSize.forEach((c) => {
            c.classList.remove('font-size_active')
        });
        sizeControl.classList.add('font-size_active');
    });
});