import { menu } from '/data.js'
const menuItems =document.getElementById('menu-items')

let menuText =''
function renderMenu() {
    menu.forEach(menuItem => {
        menuText += `<h2>${menuItem.item}</h2>`
    });
    menuItems.innerHTML = menuText
}
// renderMenu()
renderMenu()