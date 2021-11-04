let frutas=["kiwi","sandia","fresa","chirimoya"]

let frutasTmp=[...frutas, "Mango", "Uvas"]

console.log(frutasTmp)

let verduras = ["lechuga","Col china", "Zanahoria"];

let ensalada = [...frutas, ...verduras]

console.log(ensalada)

let Pikachu = {
    tipo:"electrico",
    ataque: 40,
    vida:50,
    ataque:"cabezaso",
};

// let PikachuRojo = Pikachu;


// PikachuRojo.vida = 23;
// console.table(PikachuRojo);
// console.table("Pikachu Original");
// console.table(Pikachu);

let PikachuVerde = {...Pikachu, ataque:"conversar", come:"lechuga"};
PikachuVerde.vida=40;
console.table(PikachuVerde);
console.table("Pikachu Original");
console.table(Pikachu);