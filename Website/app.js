import { Database } from './script/database.js';
import { StateMachine } from './script/statemachine.js'

const r = document.querySelector(':root');

const main = document.getElementById('main')
const database = new Database()

const sidebar = document.getElementById('sidebar')
const sidebarIcon = document.getElementById('sidebar_toggle');
const sidebarWidth = r.style.getPropertyValue('--sidebar-width');

const enableStateMachine = true; // use to toggle statemachine mostly for testing html

let sideBarHidden = false;
let stateMachine = null;

sidebarIcon.addEventListener('click', () => { setSideBarHidden(!sideBarHidden) });

window.addEventListener('resize', () => { onWindowResize(); });

window.addEventListener('load', () => { onWindowResize(); });

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

document.getElementById("location").onclick = function () { myFunction() };

function myFunction() {
    document.getElementById("enter_location").classList.toggle("show");
}

if (enableStateMachine) {

    main.innerHTML = '';
    sidebar.innerHTML = '';

    stateMachine = new StateMachine(document, database);
}