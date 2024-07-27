document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', (event) => {
        if (event.target.classList.contains('product__quantity-control_inc')) {
            const quantityValue = product.querySelector('.product__quantity-value');
            quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
        }
        if (event.target.classList.contains('product__quantity-control_dec')) {
            const quantityValue = product.querySelector('.product__quantity-value');
            const currentQuantity = parseInt(quantityValue.textContent);
            if (currentQuantity > 1) {
                quantityValue.textContent = currentQuantity - 1;
            }
        }
    });

    product.querySelector('.product__add').addEventListener('click', () => {
        const productId = product.getAttribute('data-id');
        const productImg = product.querySelector('.product__image').src;
        const quantityValue = parseInt(product.querySelector('.product__quantity-value').textContent);
        const cartProducts = document.querySelector('.cart__products');
        const cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

        if (cartProduct) {
            const cartProductCount = cartProduct.querySelector('.cart__product-count');
            cartProductCount.textContent = parseInt(cartProductCount.textContent) + quantityValue;
        } else {
            const newCartProduct = document.createElement('div');
            newCartProduct.className = 'cart__product';
            newCartProduct.setAttribute('data-id', productId);
            newCartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImg}">
                <div class="cart__product-count">${quantityValue}</div>
            `;
            cartProducts.appendChild(newCartProduct);
        }
    });
});
