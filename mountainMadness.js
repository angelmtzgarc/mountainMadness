var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 4000);

function losentimos() {
    alert("Lo sentimos, por ahora no hay viajes programados debido a los incidentes sucedidos a la expedicion de la universidad de Miskatonic.")
}