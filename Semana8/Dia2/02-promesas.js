const hornearTorta = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            let estado = false;
            if (estado == true){
                resolve("La torta está Ready");
            } else {
                reject("Pos se quemo :(");
            }
        }, 1000)
    });
};

hornearTorta ()
.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
})