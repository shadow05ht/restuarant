const cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
const cartProductsList = document.getElementById('cart-products-list');

function displayCartProducts() {
    for (let product in cartItems) {
        const item = document.createElement('li');
        item.innerText = `${product} - ${cartItems[product]} dənə`;
        cartProductsList.appendChild(item);
    }
}
displayCartProducts();
