let a = 1;

let b = "4";

let c = a + b

console.log(typeof c);

let nombre = "Jorge ";
let apellido = "Montesinos";

let nombreCompleto = nombre + apellido;

console.log(nombreCompleto);


// TEMPLATE STRING //

let edad = 31;

let texto = `Hola soy ${nombre} ${apellido} y soy de Aqp, tengo ${edad} años`;

console.log(texto);

//PROMPT, capturar datos del usuario

let cantidadMascotas = prompt(`Hola ${nombre} Cuantas mascotas tienes`);

console.log(`Mascotas : ${cantidadMascotas}`);

let convertido = parseFloat(cantidadMascotas)

console.log(typeof convertido);