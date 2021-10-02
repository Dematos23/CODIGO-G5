let divContenido = document.getElementById("contenido");

let miBoton = document.createElement("button");

miBoton.innerHTML = "Clickeame!";

divContenido.appendChild(miBoton);

miBoton.addEventListener("click", function(){
    alert("Haz hecho click")
});

let peliculas = [
    "Parasite",
    "Shang Chi",
    "Interstellar",
    "Matrix",
    "El bueno, el malo y el feo",
    "Geo tormenta",
    "Jhon Wick",
    "Constantine",
    "Godfather",
    "El Señor de los anillos",
];

peliculas.forEach(function(peli){
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerHTML = peli;
    divContenido.appendChild(nuevoParrafo);

    nuevoParrafo.style.cursor = "pointer";

    nuevoParrafo.addEventListener("dblclick", function(){
        alert(`Hiciste click en ${peli}`);
        nuevoParrafo.style.backgroundColor = "steelblue"
    });
})

let miInput = document.createElement("input");
miInput.setAttribute("type", "password");
divContenido.appendChild(miInput);

let btnVer = document.createElement("button");
btnVer.innerText = "ver";
divContenido.appendChild(btnVer);

let esVisible = true;

btnVer.addEventListener("click", function(){
    esVisible = !esVisible;
    if(esVisible == false){
        miInput.setAttribute("type", "text");
    }else{
        miInput.setAttribute("type", "password");
    }
});