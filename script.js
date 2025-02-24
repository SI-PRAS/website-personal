const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toogle ("sticky", this.window.scrollY> 120)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll =() => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}