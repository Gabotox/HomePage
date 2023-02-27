//DEclaración de variables
let nav = document.getElementById('navContacto');
let mostrarlo = document.getElementById('mostrarlo');
let quitarlo = document.getElementById('ocultarlo');
let items = document.querySelectorAll('.item');

//Agregar los eventos de mostrar y ocultar el menú al hacer click en las bars
mostrarlo.addEventListener('click', mostrar);
quitarlo.addEventListener('click', ocultar);


//Con el foreach recorro cada elemento de clase link 
//que al hacer click sobre alguno de ellos ocultará el menú
items.forEach((item) => {
    item.addEventListener('click', ocultar);
})


//Dándole funcionamiento a la función para mostrar el menú responsive
function mostrar(){
    nav.style.maxHeight = '400px';
    mostrarlo.style.display = 'none';
    quitarlo.style.display = 'block';
}

//Dándole funcionamiento a la función para ocultar el menú responsive
function ocultar(){
    nav.style.maxHeight = '0';
    mostrarlo.style.display = 'block';
    quitarlo.style.display = 'none';
}


//Coloca una segunda clase al header al hacer scroll en la pantalla
window.addEventListener("scroll", function () {
    let header = document.getElementById("menu");
    header.classList.toggle("abajo-s", window.scrollY > 0);
});
