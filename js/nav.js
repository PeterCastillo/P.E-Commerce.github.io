const menubtnshow = document.querySelector('.nav__user--menu img');
const menubtnout = document.querySelectorAll('.back');
const menu = document.querySelector('.nav__nav');

const toggle = () => {
    menu.classList.toggle('nav__nav-toggle')
};

menubtnshow.addEventListener('click', () => {
    toggle();
});

menubtnout.forEach(element => {
    element.addEventListener('click', () => {
        toggle();
    });
});

const carritomenu = document.querySelector('.cartadd');
const carritomenubtn = document.querySelector('.nav__user--cart');

carritomenubtn.addEventListener('click', () => {
    carritomenu.classList.toggle('cartadd-toggle');
});

