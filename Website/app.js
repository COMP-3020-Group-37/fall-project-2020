import { Database } from './script/database.js';

const r = document.querySelector(':root');

const main = document.getElementById('main')
const database = new Database()

const sidebar = document.getElementById('sidebar')
const sidebarIcon = document.getElementById('sidebar_toggle');
const sidebarWidth = r.style.getPropertyValue('--sidebar-width');

let sideBarHidden = false

sidebarIcon.addEventListener('click', () => { setSideBarHidden(!sideBarHidden)});

window.addEventListener('resize', () => {onWindowResize();});

window.addEventListener('load', () => {onWindowResize();});

function setSideBarHidden(state) {
    sideBarHidden = state

    if (sideBarHidden) {
        main.style.marginLeft = '0px';
        sidebar.style.left = '-300px';
    }
    else {
        main.style.marginLeft = sidebarWidth;
        sidebar.style.left = '0px';
    }
}

function onWindowResize() {
    setSideBarHidden(window.innerWidth < 1080);
    sidebar.style.height = window.innerHeight - 80 + "px";
}

const modalRegister = document.getElementById('register');
window.addEventListener('click', (event) => {
    if (event.target == modalRegister)
        modalRegister.style.display = "none";
});

const modalSignin = document.getElementById('signin');
window.addEventListener('click', (event) => {
    if (event.target == modalSignin)
    modalSignin.style.display = "none";
});

database.restaurants.forEach((restaurant) => {
    restaurant.foodItems.forEach((foodItem) => {
        document.getElementById("food-display").innerHTML += foodItem.display(restaurant);
    });
});