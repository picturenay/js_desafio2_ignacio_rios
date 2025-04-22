//Borde imagen
let imagen = document.getElementById('nivcompleto');
let borde = false;

imagen.addEventListener('click',() => {
    borde = !borde;
    if(borde){
        imagen.classList.add('borde');
    }else {
        imagen.classList.remove('borde');
    }
});

