// for ( let i = 0; i <= 10; i++) {
//     console.log(`El contador es: ${i}`);
// }

// console.log("yo estoy al final!");

// let ropa = ["Bufanda", "Camisa" ,"Guantes", "Jeans"];

// for (let i = 0; i < ropa.length; i++){
//     console.log(ropa[i])
// }

let carta = ["Ceviche", "Pollo a la brasa", "Costillar", "Adobo", "Caldo de gallina"];

let eleccion = +prompt("0.Ceviche, 1.Pollo, 2.Costillar, 3.Adobo, 4.Caldo de Gallina");

for(let i=0; i < carta.length; i++){
    if(eleccion == i){
        console.log(`Ud. ha elegido: ${carta[i]}`)
    }
}