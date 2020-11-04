const r = document.querySelector(':root');

const main = document.getElementById('main')

const sidebar = document.getElementById('sidebar')
const sidebarIcon = document.getElementById('sidebar_toggle');
const sidebarWidth = r.style.getPropertyValue('--sidebar-width');

let sideBarHidden = false

sidebarIcon.addEventListener('click', () => {
    if (sideBarHidden) {
        main.style.marginLeft = sidebarWidth;
        sidebar.style.left = '0px';
    }
    else {
        main.style.marginLeft = '0px';
        sidebar.style.left = '-300px';
    }

    sideBarHidden = !sideBarHidden
});