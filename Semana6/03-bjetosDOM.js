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

let misItems = document.getElementsByClassName("lista_item");

console.log(misItems);

let arregloItems = Array.from(misItems);

arregloItems.forEach(function (item, indice, arreglo) {
    item.style.backgroundColor = "skyblue";
    item.innerHTML = `Patata ${indice}`;
    console.log("mostrando el arreglo", arreglo);
});

let miTexto = document.querySelector("#texto");

console.log(miTexto);

let boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach(function(bx){
    bx.innerHTML = `<p>Soy un párrafo</p>`
})

let series = [
    "Squid Game",,
    "Pasion de Gavilanes",
    "Dark",
    "Billions",
    "Got",
    "Suits",
    "Mr. Robot",
    "House of dragons",
    "Chernobyl",
    "Breaking Bad"
]

let divContenido = document.getElementById("contenido");

let lista = document.createElement("ul");

divContenido.appendChild(lista);

let textoLI = "";
series.forEach(function(programaTV){
    textoLI = textoLI + `<li>${programaTV}</li>`;
})

lista.innerHTML = textoLI;

let imagen = document.createElement("img");

divContenido.appendChild(imagen);

imagen.setAttribute("src","https://picsum.photos/200/300");


lista.classList.add("resaltado");
lista.classList.add("redondeado");
lista.classList.remove("resaltado");
