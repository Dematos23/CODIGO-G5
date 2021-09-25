let cantProductos = +prompt("Cuantos productos en total tienes?")

let gaseosa = 0;
let leche = 0;
let galletas = 0;

for(let i = 0; i < cantProductos; i++){
    let producto = +prompt("Ingrese 1.Gaseosa 2.Leche 3.Galletas");

    switch(producto){
        case 1:
            gaseosa++;
            break;
        case 2:
            leche++;
            break;
        case 3:
            galletas++;
            break;
        default:
            alert("Nùmero erroneo");
            i--;
    }
}

console.log(`En total hay :
                Gaseosa: ${gaseosa}
                Leche: ${leche}
                Galletas: ${galletas}`)