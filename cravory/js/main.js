let navbar = document.querySelector('.navbar');
let menuButton = document.querySelector('#menubtn');
let cartItem = document.querySelector('.cart-item-container');
let cartButton = document.querySelector('#cartbtn');
let searchForm = document.querySelector('.searchform');
let searchButton = document.querySelector('#searchbtn');

if (navbar && menuButton) {
    menuButton.onclick = () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
    }
} else {
    console.error('Navbar or menu button not found');
}

if (cartItem && cartButton) {
    cartButton.onclick = () => {
        cartItem.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    
    }
} else {
    console.error('Cart item container or cart button not found');
}

if (searchForm && searchButton) {
    searchButton.onclick = () => {
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        cartItem.classList.remove('active');
    }
} else {
    console.error('Search form or search button not found');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
