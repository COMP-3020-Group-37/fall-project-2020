import { Database } from './script/database.js';
import { StateMachine } from './script/statemachine.js'
import { Account } from './script/data_account.js';

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

const modalLocation = document.getElementById('location');
window.addEventListener('click', (event) => {
    if (event.target == modalSignin)
        modalLocation.style.display = "none";
});

const locationInput = document.getElementById('location-input');
const locationSubmit = document.getElementById('location-submit');
const locationButton = document.getElementById('location-button');
locationSubmit.addEventListener('click', (event) => {
    let value = locationInput.value;

    if (value != '') {
        database.yourLocation = value;
        locationButton.innerHTML = value.substring(0, 14) + '<i class="fa fa-chevron-down"></i>';
    }
});

const usernameLabel = document.getElementById('username-display');
const buttonLogout = document.getElementById('btn-logout');
const buttonSignin = document.getElementById('btn-signin');
const buttonRegister = document.getElementById('btn-register');

const registerForm = document.getElementById('register');
const registerUsername = document.getElementById('register-username');
const registerPassword= document.getElementById('register-password');
const registerPassword2 = document.getElementById('register-password-2');
const registerSubmit = document.getElementById('register-submit');
registerSubmit.addEventListener('click', (event) => {
    let accounts = database.accounts;
    let username = registerUsername.value;
    let password = registerPassword.value;
    let password2 = registerPassword2.value;

    for (let i = 0; i < accounts.length; i++) {
        let account = accounts[i];

        if (account.username == username) {
            alert('Username is already taken');
            return false;
        }

        if (password != password2) {
            alert('Passwords do not match');
            return false;
        }
    }

    let newAccount = new Account(username, password)
    accounts.push(newAccount);
    loginForm.style.display = 'none';
    database.currentAccount = newAccount;
    buttonSignin.style.display = 'none';
    buttonRegister.style.display = 'none';

    usernameLabel.innerHTML = newAccount.username;
    usernameLabel.style.display = '';
    buttonLogout.style.display = '';
});

const loginForm = document.getElementById('signin');
const loginUsername= document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');
const loginSubmit = document.getElementById('login-submit');
loginSubmit.addEventListener('click', (event) => {
    let accounts = database.accounts;
    let username = loginUsername.value;
    let password = loginPassword.value;
    let foundAccount = null;

    for (let i = 0; i < accounts.length && foundAccount == null; i++) {
        let account = accounts[i];

        if (account.username == username && account.password == password) {
            foundAccount = account;
        }
    }

    if (foundAccount) {
        loginForm.style.display = 'none';
        database.currentAccount = foundAccount;
        buttonSignin.style.display = 'none';
        buttonRegister.style.display = 'none';

        usernameLabel.innerHTML=foundAccount.username;
        usernameLabel.style.display = '';
        buttonLogout.style.display = '';
    }
    else {
        alert("Did not find an account with that username and password");
        loginPassword.value = '';
    }
});

buttonLogout.addEventListener('click', (event) => {
    database.currentAccount = null;

    buttonSignin.style.display='';
    buttonRegister.style.display='';
    usernameLabel.style.display='none';
    buttonLogout.style.display='none';
});

if (enableStateMachine) {

    main.innerHTML = '';
    sidebar.innerHTML = '';
    
    stateMachine = new StateMachine(window, document, database);

    window.addEventListener('hashchange', function() {
        let hashs = document.location.hash.split("/");
        stateMachine.changeToState(hashs[0]);
    }, false);

    document.location.hash = 'home'
}
