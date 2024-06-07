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
