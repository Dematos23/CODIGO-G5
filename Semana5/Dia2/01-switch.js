// let producto = +prompt("Ingrese el código del producto");

// switch(producto){
//     case 1:
//         console.log("Chocolate")
//         break; //corta la ejecución del código
//     case 2:
//         console.log("Papitas")
//         break; //corta la ejecución del código
//     case 3:
//         console.log("Galletas")
//         break; //corta la ejecución del código
//     case 4:
//         console.log("Pollo")
//         break; //corta la ejecución del código
//     default:
//         console.log("Código no encontrado")
// }

let horas = +prompt("Ingrese sus horas semanales");

switch(true){
    case horas > 35:
        console.log("horas extra!")
        break;
    case horas >= 30 && horas <= 35:
        console.log("Cumplio su jornada")
        break;
            
}