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

