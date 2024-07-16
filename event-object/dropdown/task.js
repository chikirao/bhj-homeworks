isDropdownOpened = false;
const dropdownValue = document.querySelector(".dropdown__value");
const dropdownItems = Array.from(document.querySelectorAll(".dropdown__item"));
const dropdownList = document.querySelector(".dropdown__list");
dropdownValue.addEventListener('click', () => {
    if (isDropdownOpened === false) {
        dropdownList.classList.add("dropdown__list_active");
        isDropdownOpened = true;
    } else {
        dropdownList.classList.remove("dropdown__list_active");
        isDropdownOpened = false;
    }
});
dropdownItems.forEach(item => item.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownList.classList.remove("dropdown__list_active");
    dropdownValue.textContent = item.textContent;
    isDropdownOpened = false;
}));