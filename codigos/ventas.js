var imagenes = ['../media/casa-1.jpg','../media/casa-2.jpg','../media/casa-3.jpg']
var cont = 0;

function carrusel(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras');
        let adelante = contenedor.querySelector('.adelante');
        let img = contenedor.querySelector('.imagen');
        let tgt = e.target;

        if (tgt == atras) {
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        } else if (tgt == adelante) {
            if (cont < imagenes.length - 1) {
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor1 = document.querySelector('.imagen-1');
    carrusel(contenedor1);
let contenedor2 = document.querySelector('.imagen-2');
    carrusel(contenedor2);
let contenedor3 = document.querySelector('.imagen-3');
    carrusel(contenedor3);
    let contenedor4 = document.querySelector('.imagen-4');
    carrusel(contenedor4);
    let contenedor5 = document.querySelector('.imagen-5');
    carrusel(contenedor5);
    let contenedor6 = document.querySelector('.imagen-6');
    carrusel(contenedor6);
    let contenedor7 = document.querySelector('.imagen-7');
    carrusel(contenedor7);
    let contenedor8 = document.querySelector('.imagen-8');
    carrusel(contenedor8);
    let contenedor9 = document.querySelector('.imagen-9');
    carrusel(contenedor9);
    let contenedor10 = document.querySelector('.imagen-10');
    carrusel(contenedor10);
    let contenedor11 = document.querySelector('.imagen-11');
    carrusel(contenedor11);
    let contenedor12 = document.querySelector('.imagen-12');
    carrusel(contenedor12);
    let contenedor13 = document.querySelector('.imagen-13');
    carrusel(contenedor13);
    let contenedor14 = document.querySelector('.imagen-14');
    carrusel(contenedor14);
    let contenedor15 = document.querySelector('.imagen-15');
    carrusel(contenedor15);
});
