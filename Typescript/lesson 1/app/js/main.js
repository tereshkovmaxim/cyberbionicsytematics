let cart = new Cart();
let sizeButtons = document.querySelectorAll('.size-button');
let sizeButtonsArray = Array.prototype.slice.call(sizeButtons, 0);
let product = document.querySelector('.product');
let menuButtons = document.querySelectorAll('.menu-button');
let menuButtonsArray = Array.prototype.slice.call(menuButtons, 0);
let images = document.querySelectorAll('.product-image');
let imagesArray = Array.prototype.slice.call(images, 0);
sizeButtonsArray.forEach(element => {
    element.onclick = function (e) {
        product.className = `product ${e.target.dataset.size}`;
        cart.size = e.target.dataset.size;
        e.preventDefault();
        updateCart();
    };
});
menuButtonsArray.forEach(element => {
    element.onclick = function (e) {
        imagesArray.forEach(element => {
            if (element.classList.contains(e.target.dataset.menu)) {
                element.classList.toggle('hide');
                e.target.classList.toggle('active');
                cart.filling = e.target.dataset.menu;
                console.log(cart.total);
                e.preventDefault();
                updateCart();
            }
        });
    };
});
function updateCart() {
    let cartItems = document.querySelector('.cart-items');
    if (cartItems.children.length > 0) {
        while (cartItems.firstChild) {
            cartItems.removeChild(cartItems.firstChild);
        }
    }
    let temp = cart.listOrders();
    temp.forEach(item => {
        let p = document.createElement('p');
        p.innerHTML = `${item.name} <span>${item.price} $`;
        cartItems.appendChild(p);
    });
    let p = document.createElement('p');
    p.innerText = `Total: ${cart.total} $`;
    cartItems.appendChild(p);
    let button = document.createElement('button');
    button.textContent = `Buy`;
    button.onclick = function () {
        let t = document.querySelector('.wrapper');
        t.style.backgroundImage = 'url(img/bluescreen.jpg)';
        document.body.style.zIndex = '200';
    };
    cartItems.appendChild(button);
}
//# sourceMappingURL=main.js.map