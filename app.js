import { menu } from '/data.js'
const menuItems =document.getElementById('menu-items')
const orderDetails =document.getElementById('order-details')
const totalPrice = document.getElementById('total-price');

let menuText =''
function renderMenu() {
    menu.forEach((menuItem, index) => {
        menuText += `
        <div class="item" id="item-${menuItem.id}">
            <div class="col-emoji">
                <h2>${menuItem.emoji}</h2>
            </div>
            <div class="col-item-listing">
                <h3>${menuItem.item}</h3>
                <p>${menuItem.ingredients.join(', ')}</p>
                <p class="price">$${menuItem.price}</p>
            </div>
            <div class="col-plus-icon">
                <button class="plus-icon" data-add="${menuItem.id}">+</button>
            </div>
        </div>
        <hr>
        `
    });
    menuItems.innerHTML = menuText
}
// renderMenu()
renderMenu()

// const plusIcon = document.getElementById('plus-icon');
const currentOrder = document.getElementById('current-order');
let total = 0;
document.addEventListener('click', function(e){
    if(e.target.dataset.add){
    currentOrder.style.display = 'block'
    total += menu[e.target.dataset.add].price
    orderDetails.innerHTML += `
    <div class="order-line">
        <h3>${menu[e.target.dataset.add].item}</h3>
        <button id="remove-button" class="remove-button" data-remove="${menu[e.target.dataset.add].id}">remove</button>
        <p class="price">$${menu[e.target.dataset.add].price}</p>
    </div>
    `
    totalPrice.innerText = `$${total}`
    }
    if(e.target.dataset.remove) {
        alert('ready to remove?')
    }
    if (e.target.id === 'order-button') {
        alert('complete order clicked')
    }
})


