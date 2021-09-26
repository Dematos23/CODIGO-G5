let arrJuegos = [
    {
        nombre:"The Witcher 3",
        precio:60
    },
    {
        nombre:"Doom",
        precio:50
    },
    {
        nombre:"Among Us",
        precio:30
    },
    {
        nombre:"Bloodborne",
        precio:90
    },
    {
        nombre:"God of War (2018)",
        precio:120
    },
    {
        nombre:"Civilization 6",
        precio:45
    }
]

// preguntar presupuesto
// comparar el presupuesto con los juegos que ofrecemos
// segun la comparacion tener la lsita de juego a ofrecer
// agregar al carrito, seleccion items 
// cobrar, indicar el total

let presupuesto=+prompt("Cuanto es su presupuesto");

function revisarPresupuesto(){
    let juegosComprables = []

    for(let i=0;i< arrJuegos.length; i++){
        if(presupuesto >= arrJuegos[i].precio){
            juegosComprables.push(arrJuegos[i]);
        }
    }
    return juegosComprables;
}

function agregarACarrito(listaJuegos){
    for(let j=0; j<listaJuegos.length; j++){
        if(presupuesto<listaJuegos[j].precio){
            console.log("lo siento no alcanza")
            continue;
        }


        let compra = confirm(`Deseas comprar ${listaComprables[j].nombre}`);
        console.log(compra);

        if(compra==true){
            carrito.push(listaJuegos[j]);

            presupuesto = presupuesto - listaJuegos[j].precio;
        }
    }

    return carrito;
}

let listaComprables = revisarPresupuesto();

console.table(listaComprables);

let miCarrito = agregarACarrito(listaComprables);