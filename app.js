import { menu } from '/data.js'
const menuItems =document.getElementById('menu-items')
const orderDetails =document.getElementById('order-details')
const totalPrice = document.getElementById('total-price');
const ordersArray = []

function renderMenu() {
    let menuText =''
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

renderMenu()

const currentOrder = document.getElementById('current-order');
let total = 0;
document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        addToOrder(e.target.dataset.add)
    }
    if(e.target.dataset.remove) {
        removeFromOrder(e.target.dataset.remove)
    }
    if (e.target.id === 'order-button') {
        alert('complete order clicked')
    }
})

function addToOrder(orderId){ 
    orderDetails.innerHTML = ''
    total = 0;
    currentOrder.style.display = 'block'
    ordersArray.push(menu[orderId])
    renderCurrentOrder()

}

function removeFromOrder(orderRemoveIndex){
    orderDetails.innerHTML = ''
    total = 0
    ordersArray.splice(orderRemoveIndex, 1)
    renderCurrentOrder()
}

function renderCurrentOrder() {
    ordersArray.forEach((orderItem, index) => {
        orderDetails.innerHTML += `
        <div class="order-line">
            <h3>${orderItem.item}</h3>
            <button id="remove-button" class="remove-button" data-remove="${index}">remove</button>
            <p class="price">$${orderItem.price}</p>
        </div>
        `
        total += orderItem.price 
        })
    totalPrice.innerText = `$${total}`
}


