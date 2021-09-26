// let restaurante = {
//     nombre:"La Nueva Palomino",
//     platillos:[
//         {
//             id:1,
//             nombrePlatillo:"Sencca",
//             precio:30,
//         },
//         {
//             id:2,
//             nombrePlatillo:"Pepian de Cuy",
//             precio:36,
//         },
//         {
//             id:3,
//             nombrePlatillo:"Americano",
//             precio:40,
//         }
//     ],

//     mostrarPlatillos: function(){
//         console.log(restaurante.platillos);
//     }
// };

// console.log(restaurante.platillos);

// let jugador ={
//     nombre:"Dybala",
//     nacionalidad:"Argentino",
//     posicion:"volante, delantero",
//     estatura:1.85,
//     correr: function(){
//         console.log("corre corre correeee");
//     },
//     cabecear: function(){
//         console.log("salta y cabecea la pelota");
//     },
//     patear: function(){
//         console.log("pateaaaaaaa");
//     }
// }

// jugador.correr();


// què datos necesito?
//  cantidad de simples 
//  cantidad de dobles
//  precio de las simples
//  precio de las dobles
//  variable que me diga que ya voy a finalizar el pedido
//  (pedido 1x1)

// de dónde obtengo esos datos?
//     precio en variables xq ya lo tenemos
//     cantidad de dobles y simples preguntamos al usuario
//     si finaliza tambièn preguntamos

// esos datos estàn en la forma que necesito?
//     cantidades esto tiene que ser numèrico

let precioSimple = 5;
let precioDoble=9;

let cantidadSimple=0;
let cantidadDoble=0;

let finalizar=false

do{
    let eleccion = +prompt("Ingrese 1. para una Simple, 2. para una Doble y 3 para finalizar el pedido");

    switch(eleccion){
        case 1:
            console.log("Una Simple!!!");
            cantidadSimple++;
            break;
        case 2:
            console.log("Una Doble")
            cantidadDoble ++;
            break;
        case 3:
            finalizar = true;
    }
}while(finalizar==false)

let total = precioDoble*cantidadDoble + precioSimple*cantidadSimple;

console.log(`El total a pagar será de: ${total} por ${cantidadSimple} hamburguesas Simples y por ${cantidadDoble} de hamburguesas Dobles`)