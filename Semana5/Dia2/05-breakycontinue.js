// let alumnos = ["Leonardo", "Arturo", "Gustavo", "Ariana", "Alan", "Masami"];

// let eleccion = prompt("ingrese el nombre del alumnito");

// for (let i = 0; i < alumnos.length; i++){
//     if(eleccion == alumnos[i]){
//         console.log(`Usted eligio ${alumnos[i]}`);
//     }
// }

// for (let i = 0; i < alumnos.length; i++){
//     if(eleccion == alumnos[i]){
//         console.log(`${eleccion} se encuentra en ${i}`);
//         break;
//     }
//     console.log(`Buscando... em ${i}`)
// }

let notas = [17, 15, 10, 5 ,24, 20, 7, 9, 18, 1, 0, 13];

for(let i = 0; i < notas.length; i++){
    if(notas[i] < 12){
        continue
    }
    console.log(notas[i]);
}