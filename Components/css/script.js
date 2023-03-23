let menu = document.querySelector('.toggle-collapse');
let topnav = document.querySelector ('.topnav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    topbar.classList.toggle('open');
}