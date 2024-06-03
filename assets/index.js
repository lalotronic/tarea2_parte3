
//cuando se acciona clic en el elemento boton comienza a ejecurte el codigo 
//con la ayuda de la funcion addEventListener

const boton = document.getElementById('ingreso');
boton.addEventListener("click", () =>{
//almacenamos en variables cada selector y lo ponemos en Valor_seleccionado    
const Elemento_seleccionado1 = document.getElementById("selector1");
const Valor_seleccionado1 = Elemento_seleccionado1.value;
const Elemento_seleccionado2 = document.getElementById("selector2");
const Valor_seleccionado2 = Elemento_seleccionado2.value;
const Elemento_seleccionado3 = document.getElementById("selector3");
const Valor_seleccionado3 = Elemento_seleccionado3.value;

// la comparacion se hace con la opcion del select..en este caso estan escritos con
//caracteres ...no es comparacion directa numerica sino con respecto a la opcion
// que escorgio el usuario que graficamente en pantalla se representa por un numero
//pero en terminos de la etiqueta select esta en el value de la option
if(Valor_seleccionado1=== "nueve" && Valor_seleccionado2=== "uno" && Valor_seleccionado3=== "uno"){
document.getElementById("respuesta").textContent ="password 1 correcto"; 
}
else if(Valor_seleccionado1=== "siete" && Valor_seleccionado2=== "uno" && Valor_seleccionado3=== "cuatro"){
document.getElementById("respuesta").textContent ="password 2 correcto"; 
}
else {
document.getElementById("respuesta").textContent ="password incorrecto";
}
})