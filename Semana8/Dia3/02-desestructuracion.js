let frutas = ["Piña", "fresa","naranja","kiwi"];

let [fru1, fru2, fru3, fru4] = frutas;

// console.log(fru4);
// console.log(fru2);
// console.log(fru1);

let celular = {
    pantalla:6.9,
    color:"negro",
    memoria:4,
    camara:12,
    marca:"Motorola",
    encender: function(){
        console.log("tururu");
    }
};

let {pantalla, encender, marca, memoria, color, camara} = celular;

// console.log(pantalla);
// encender();
// console.log(color);


// let verificarPersona = (nombre,dni,edad) => {
//     console.log(nombre);
//     console.log(dni);
//     console.log(edad);
// }

// verificarPersona("Diego","74147399", 28)

let verificarPersona = ({nombre,dni,edad}) => {
    console.log(nombre);
    console.log(dni);
    console.log(edad);
}

let persona ={
    edad:21,
    nombre:"Maria",
    dni:"12345678",
    apellidos:"Galvez",
    hobbies:["comer","correr"],
}

verificarPersona(persona);