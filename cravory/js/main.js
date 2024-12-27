let navbar = document.querySelector('.navbar');
let menuButton = document.querySelector('#menubtn');
let cartItem = document.querySelector('.cart-item-container');
let cartButton = document.querySelector('#cartbtn');

if (navbar && menuButton) {
    menuButton.onclick = () => {
        navbar.classList.toggle('active');
    }
} else {
    console.error('Navbar or menu button not found');
}

if (cartItem && cartButton) {
    cartButton.onclick = () => {
        cartItem.classList.toggle('active');
    }
} else {
    console.error('Cart item container or cart button not found');
}
