const productos = document.querySelector('.productos__productos');
const cart = document.querySelector('.card-info');
const fragmento = document.createDocumentFragment();

let carrito = {};

productos.addEventListener('click', e => {
    addcarrito(e);
});

const addcarrito = (e) => {
    if(e.target.classList.contains('productos__productos-producto__add')){
        settcarrito(e.target.parentElement);
    };
    e.stopPropagation();
};

const settcarrito = objeto => {
    const producto = {
        id: objeto.querySelector('.productos__productos-producto__add').dataset.id,
        nombre: objeto.querySelector('.productos__productos--producto__producto').textContent,
        img: objeto.querySelector('.productos__productos--producto--img img').src,
        precio: objeto.querySelectorAll('.productos__productos--producto__price div span')[1].textContent,
        exprice: objeto.querySelector('.productos__productos--producto__price span strike').textContent
    }
    if(carrito.hasOwnProperty(producto.id)){
        return
    }
    carrito[producto.id]= producto;
    pintarcarrito();
};


const pintarcarrito = () => {
    cart.innerHTML = '';
    if(Object.keys(carrito).length === 0){
        let span = document.createElement('span');
        span.innerHTML = 'Your cart is empty';
        fragmento.appendChild(span);
        cart.appendChild(fragmento);
        counter();
        return
    }
    Object.values(carrito).forEach(producto => {
        let div = document.createElement('div');
        div.classList.add('card-info-product');
        let productcart = `
        <div class="card-info-img">
            <img src="${producto.img}" alt="">
        </div>
        <div class="card-info-content">
            <span>${producto.nombre}</span>
            <div class="card-info-conten--price"><div><span>$</span><span>${producto.precio}</span></div><span><strike>${producto.exprice}</strike></span></div>
        </div>
        <div><i class="fa-solid fa-trash-arrow-up" data-id="${producto.id}"></i></div>
        `
        div.innerHTML = productcart;
        fragmento.appendChild(div);
        cart.appendChild(fragmento);
    });
    counter();
    let checkbtn = document.createElement('button');
    checkbtn.innerHTML = 'CHECK CART'
    checkbtn.classList.add('checkcart')
    fragmento.appendChild(checkbtn);
    cart.appendChild(fragmento);
};

cart.addEventListener('click', (e) => {
    borrarcart(e);
});

const borrarcart = (e) => {
    if(e.target.classList.contains('fa-solid')){
        delete carrito[e.target.dataset.id];
        pintarcarrito();
    }
}


const coauntercart = document.querySelector('.cart')

const counter = () => {
    coauntercart.innerHTML = Object.keys(carrito).length;
    if(coauntercart.innerHTML > 0){
        coauntercart.style.display = 'block'
    }else if(coauntercart.innerHTML == 0){
        coauntercart.style.display = 'none'
    }
};

