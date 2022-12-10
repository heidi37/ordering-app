import { menu } from '/data.js'
const menuItems =document.getElementById('menu-items')

let menuText =''
function renderMenu() {
    menu.forEach(menuItem => {
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
                <p class="plus-icon">+</p>
            </div>
        </div>
        <hr>
        `
    });
    menuItems.innerHTML = menuText
}
// renderMenu()
renderMenu()