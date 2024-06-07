// PARTE REFERENTE AO CARROSSEL DE IMAGENS
let contador = 1;

setInterval(() => {
    document.getElementById('slide' + contador).checked = true;
    if(contador == 3){
        contador = 1;
    } else{
        contador ++;
    }
}, 3000);


// PARTE REFERENTE AOS MODAIS
function openModalArduino(){
    const modal = document.querySelector('#modal-arduino')
    modal.style.display = "block"
}

function closeModalArduino(){
    const modal = document.querySelector('#modal-arduino')
    modal.style.display = "none"
}

function openModalPython(){
    const modal = document.querySelector('#modal-python')
    modal.style.display = "block"
}

function closeModalPython(){
    const modal = document.querySelector('#modal-python')
    modal.style.display = "none"
}


// PARTE DO MENU HAMBURGUER
let btnMenu = document.getElementById('btn-menu'); // Verifique se o ID está correto
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});
