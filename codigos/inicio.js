var imagenes = ['../media/r1.jpg','../media/r2.jpg','../media/r3.jpg']
var imagenes2 = ['../media/ar1.jpg','../media/ar2.jpg','../media/ar3.jpg']
var imagenes3 = ['../media/rfp1.jpg','../media/rpf2.jpeg','../media/rfp3.jpg']
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

function carrusel2(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras');
        let adelante = contenedor.querySelector('.adelante');
        let img = contenedor.querySelector('.imagen');
        let tgt = e.target;

        if (tgt == atras) {
            if (cont > 0) {
                img.src = imagenes2[cont - 1];
                cont--;
            } else {
                img.src = imagenes2[imagenes2.length - 1];
                cont = imagenes2.length - 1;
            }
        } else if (tgt == adelante) {
            if (cont < imagenes2.length - 1) {
                img.src = imagenes2[cont + 1];
                cont++;
            } else {
                img.src = imagenes2[0];
                cont = 0;
            }
        }
    });
}

function carrusel3(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras');
        let adelante = contenedor.querySelector('.adelante');
        let img = contenedor.querySelector('.imagen');
        let tgt = e.target;

        if (tgt == atras) {
            if (cont > 0) {
                img.src = imagenes3[cont - 1];
                cont--;
            } else {
                img.src = imagenes3[imagenes3.length - 1];
                cont = imagenes3.length - 1;
            }
        } else if (tgt == adelante) {
            if (cont < imagenes3.length - 1) {
                img.src = imagenes3[cont + 1];
                cont++;
            } else {
                img.src = imagenes3[0];
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
    carrusel2(contenedor4);
    let contenedor5 = document.querySelector('.imagen-5');
    carrusel2(contenedor5);
    let contenedor6 = document.querySelector('.imagen-6');
    carrusel2(contenedor6);
    let contenedor7 = document.querySelector('.imagen-7');
    carrusel3(contenedor7);
    let contenedor8 = document.querySelector('.imagen-8');
    carrusel3(contenedor8);
    let contenedor9 = document.querySelector('.imagen-9');
    carrusel3(contenedor9);
    
});