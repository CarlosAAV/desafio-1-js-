const precio = 1000000

let nombre = document.querySelector("#name");
let cantidad = document.querySelector("#cantidad");
let color = document.querySelector("#color");
let botonCalcular = document.querySelector("#boton");

let nombreUsuario = document.querySelector("#nombre-usuario")
let cantidadFinal =document.querySelector("#cantidad-final")
let colorFinal = document.querySelector("#colors")
let total = document.querySelector("#total")

botonCalcular.addEventListener("click", function(){
let valorFinal = cantidad.value * precio;
nombreUsuario.innerHTML = nombre.value;
cantidadFinal.innerHTML = cantidad.value;
total.innerHTML = valorFinal;
colorFinal.style.backgroundColor = color.value;

}); 