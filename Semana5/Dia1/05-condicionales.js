let edad = +prompt("Cuàl es tu edad?");

// if(edad >= 18){
//     console.log("Sí accedes a la 1ra dosis");
// } else if(edad >= 0){
//     console.log("Noup, todavía tienes que esperar");
// } else {
//     console.log("Error al ingresar datos")
// }


if(edad >= 60){
    console.log("Te toca Pfizer y te toca yaaaaa");
} else if(edad >= 45 &&  edad <= 55){
    console.log("Te toca Pfizer y te toca el finde")
} else if (edad == 18 || edad == 21){
    console.log("Te toca Sinopharm mañana")
}