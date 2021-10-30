let hornearTorta = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            if (true) {
                resolve("torta ready!");
            } else {
                reject("se quemo");
            }
        }, 1000);
    });
};

let prepararGlaseado = ()=> {
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            // resolve("Glaseado Listo!")
            reject("se quemo el microondas")
        }, 2000);
    });
};

let cubrirTorta = ()=>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Torta Decorada");
            // reject("Pide rappi noma");
        }, 2000);
    });
};

hornearTorta()
.then((tortaHorneada)=> {
    console.log(tortaHorneada)
    return prepararGlaseado()
})
.then((glaseadoListo)=> {
    console.log(glaseadoListo)
    return cubrirTorta()
})
.then((tortaCubierta)=> {
    console.log(tortaCubierta)
})
.catch((tortaMala)=>{
    console.log(tortaMala);
})