const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

const createCurrencyElement = (charCode, value) => {
    const item = document.createElement('div');
    item.classList.add('item');
    
    const codeElement = document.createElement('div');
    codeElement.classList.add('item__code');
    codeElement.textContent = charCode;
    
    const valueElement = document.createElement('div');
    valueElement.classList.add('item__value');
    valueElement.textContent = value;
    
    const currencyElement = document.createElement('div');
    currencyElement.classList.add('item__currency');
    currencyElement.textContent = 'руб.';
    
    item.appendChild(codeElement);
    item.appendChild(valueElement);
    item.appendChild(currencyElement);
    
    return item;
};

const loadCurrencies = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    xhr.responseType = 'json';

    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = xhr.response;
            const valutes = data.response.Valute;

            for (const key in valutes) {
                if (valutes.hasOwnProperty(key)) {
                    const currency = valutes[key];
                    const currencyElement = createCurrencyElement(currency.CharCode, currency.Value);
                    itemsContainer.appendChild(currencyElement);
                }
            }
        } else {
            console.error('Ошибка при загрузке данных:', xhr.statusText);
        }
        loader.classList.remove('loader_active');
    };

    xhr.onerror = () => {
        console.error('Ошибка при загрузке данных');
        loader.classList.remove('loader_active');
    };

    xhr.send();
};

loadCurrencies();
