// const traerData = () => {
//     return new Promise ((resolve, reject)=> {
//         resolve("Data Obtenida!!")
//         // reject("Error al obtener la Data")
//     })
// };

const traerData = async ()=> {
    // return ("Data Obtenida con async");
    throw "Error al obtener data con async"
}

// traerData()
//     .then(rpta => console.log(rpta))
//     .catch(error => console.log(error));

let usarData = async ()=>{
    try {
        let rpta = await traerData()
        console.log(rpta);
    } catch (error) {
        console.log(error)        
    }
};

// usarData();

const traerUsuarios = async ()=>{
    try {
        let respuesta = await fetch("https://reqres.in/api/users?page=2");
        let datos = await respuesta.json();
        console.table(datos.data)
    } catch (error) {
        console.log(error)
    }
}

traerUsuarios();