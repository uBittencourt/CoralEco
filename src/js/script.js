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
