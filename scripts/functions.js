/*=====================================
        Boton para el formulario de reservacion
======================================*/
function showReservation() {
    forma = document.querySelector('.forma');
    if (forma.style.visibility === 'hidden') {
        forma.style.visibility = 'visible';
    } else {
        forma.style.visibility = 'hidden';
    }
}

/*=====================================
        Validacion del formulario
======================================*/