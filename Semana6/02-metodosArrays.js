let frutas = ["fresa", "mango", "piña", "lucuma"];

frutas.forEach(function(fru) {
    console.log(fru);
})

let energia = [89,90,86,85,100];

// let energiaCima = [];

// for (let i = 0; i < energia.length; i++) {
//     energiaCima.push(energia[i] / 2);
// }

// console.log(energiaCima)

let energiaCima = energia.map(function(energy) {
    let energiaTransformada = energy / 2;
    return energiaTransformada;
});

console.log(energiaCima);
console.log(energia);

// Filter

let conductores = [
    {
        nombre:"José",
        vacunado: true,
    },
    {
        nombre:"Glenda",
        vacunado: true,
    },
    {
        nombre:"Osmar",
        vacunado: false,
    },
];

let puedePasar = conductores.filter(function(driver){
     return driver.vacunado == true;
})

console.log(puedePasar);

let dniDB = ["42144143","85741263","85462317"];

let encontrado = dniDB.find(function(doc){
    return doc == "12345678";
});

console.log(encontrado);