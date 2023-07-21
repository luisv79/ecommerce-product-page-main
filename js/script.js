// Cambio de cantidad de articulos ingresado por el usuario

let minusBtn = document.querySelector('.input_menos');
let plusBtn = document.querySelector('.input_mas');
let userInput = document.querySelector('.input_numero');

let userInputNumber = 0;

plusBtn.addEventListener('click',()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});


minusBtn.addEventListener('click',()=>{
    userInputNumber--;
    if (userInputNumber <= 0 ) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

// Agregar el total del carrito cuando se prosiona el boton de añadir


const addtoCartBtn = document.querySelector('.detalles-boton');
let cartNotification = document.querySelector('.carrito-notificacion');
let lastValue = parseInt(cartNotification.innerText);

addtoCartBtn.addEventListener('click', ()=>{
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();
   
    
});

// Mostrar el modal con el detalle con el carrito

const cartIconBtn = document.querySelector('.carrito');
const cartModal = document.querySelector('.carrito-modal');
// let priceModal = document.querySelector('.cart-modal_price');
const productContainer = document.querySelector('.carrito-modal-container-chekout');

cartIconBtn.addEventListener('click', ()=>{
   cartModal.classList.toggle('show');

    if (lastValue == 0) {
        productContainer.innerHTML = '<P class="carrito-vacio">Your cart is empty</P>';
        }else{
        drawProductInModal();
    }
   
});

// Borrar el contenido del carrito.

function deleteProduct() {

    const deleteProductBtn = document.querySelector('.carrito-modal-borrar');

    deleteProductBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = '<P class="cart-empty">Tu carrito esta vacio</P>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });
}

// Cambiar imagenes cuando se preciones los botones flechas

const imageContainer = document.querySelector('.galeria-imagen-container');
const previoustGalleryBtn = document.querySelector('.galleria_anterior');
const nextGalleryBtn = document.querySelector('.galleria_proxima');
let imgIndex = 1;
 const imagesUrls = [
    ' ../images/image-product-1.jpg',
    ' ../images/image-product-2.jpg',
    ' ../images/image-product-3.jpg',
   ' ../images/image-product-4.jpg'
 ]

nextGalleryBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
});

previoustGalleryBtn.addEventListener('click', ()=>{
    changePreviousImage(imageContainer);
});

// Cambiar las imagenes principales del thumnail

let thumbnails = document.querySelectorAll('.galeria-thumnail')
thumbnails = [...thumbnails]

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event=>{
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`
    });
});

// Cambiar las imagenes principales desde los thumbnails en el modal
let modalthumbnails = document.querySelectorAll('.galeria-modal-thumnail');
const modalImageContainer = document.querySelector('.galeria-modal-imagen-container');
modalthumbnails = [...modalthumbnails]

modalthumbnails.forEach(modalthumbnail => {
    modalthumbnail.addEventListener('click', event=>{
           (event.target.id.slice(-1))
           modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`
    });
});

// Cambiar imagenes principal de modal desde flechas en el modal

const previousModalBtn = document.querySelector('.galeria-modal-imagen-anterior');
const nextModalBtn = document.querySelector('.galeria-modal-imagen-proxima');

nextModalBtn.addEventListener('click', ()=>{
    changeNextImage(modalImageContainer);
});

previousModalBtn.addEventListener('click', ()=>{
    changePreviousImage(modalImageContainer);
});

// Mostrar el navbar cuando presiono el menu de hamburgesa


const hamburgerMenu = document.querySelector('.cabecera-menu');
const modalNavbar = document.querySelector('.modal-menu-background');
const closeModalNavbar = document.querySelector('.modal-cerrar-menu');

modalNavbar.style.display = 'none'

hamburgerMenu.addEventListener('click', ()=>{
    console.log('abrir modal');
    modalNavbar.style.display = 'block';
});

closeModalNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
});

// Funciones

function drawProductInModal() {
    productContainer.innerHTML = ` <div class="carrito-modal-detalles">
    <img class="carrito-modal-imagen" src="./images/image-product-1-thumbnail.jpg" alt="">
    <div>
      <p class="carrito-modal-producto">Edicion Limitada Otoño...</p>
      <p class="carrito-modal-precio">$125.00 x3 <span>$375.00</span></p>
    </div>
    <img class="carrito-modal-borrar" src="./images/icon-delete.svg" alt="">
  </div>
  <button class="carrito-modal-chekout">Chekout</button>
</div>`
 deleteProduct()
 let priceModal = document.querySelector('.carrito-modal-precio');
 priceModal.innerHTML = `$125.00 x${lastValue} <span>$${lastValue*125}.00</span>`;
}

function changeNextImage(imgContainer) {
    if (imgIndex == 4) {
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}

function  changePreviousImage(imgContainer) {
    if (imgIndex == 1) {
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}

// Mostrar el modal de imagenes cuando hago click en la imagen principal

const imagesModal = document.querySelector('.galeria-modal-background');
const closeModalBtn = document.querySelector('.modal-galeria-cerrar');

imageContainer.addEventListener('click', ()=>{
    if(window.innerWidth >= 1115){
        imagesModal.style.display = 'grid';
    }
    
});

closeModalBtn.addEventListener('click', ()=>{
imagesModal.style.display = 'none';
});

