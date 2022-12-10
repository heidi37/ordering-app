import { menu } from '/data.js'
const menuItems =document.getElementById('menu-items')
const orderDetails =document.getElementById('order-details')

let menuText =''
function renderMenu() {
    menu.forEach((menuItem, index) => {
        menuText += `
        <div class="item">
            <div class="col-emoji">
                <h2>${menuItem.emoji}</h2>
            </div>
            <div class="col-item-listing">
                <h3>${menuItem.item}</h3>
                <p>${menuItem.ingredients.join(', ')}</p>
                <p class="price">$${menuItem.price}</p>
            </div>
            <div class="col-plus-icon">
                <button class="plus-icon" id="plus-icon-${index}">+</button>
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

document.addEventListener('click', function(e){
    currentOrder.style.display = 'block'
    console.log(e.target.id)
})

orderDetails.innerHTML = `
    <div class="order-line">
        <h3>Pizza</h3>
        <button id="remove-button" class="remove-button">remove</button>
        <p class="price">$14</p>
    </div>
          <hr>
    <div class="total-price">
        <h3>Total price:</h3>
        <p class="price">$14</p>
    </div>
            `
