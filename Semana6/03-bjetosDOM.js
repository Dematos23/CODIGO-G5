window.console.log("Hola");

console.log(`Info Navegador ${window.navigator.userAgent}`);

console.log(window.location);

navigator.geolocation.getCurrentPosition(function () {

})

let miTitulo = document.querySelector("h1");
console.log(miTitulo);

miTitulo.innerHTML = "Hola soy un nuevo Titulo";

console.log(miTitulo.innerHTML);

let miCaja = document.getElementById("caja");

console.log(miCaja);

// InnerHTML, representa el contenido HTML de un elemento
miCaja.innerHTML = "<h2>Titulo Caja</h2>"

miCaja.style.backgroundColor = "purple";
miCaja.style.color = "White";