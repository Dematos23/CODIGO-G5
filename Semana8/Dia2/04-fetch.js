fetch("https://reqres.in/api/users?page=2")
.then((respuesta)=>{
    console.log(respuesta);
    return respuesta.json()
}).then((gatos)=>{
    console.table(gatos.data);
});

let nuevoUsuario = {
    name:"Pepe Lucho",
    job:"BOSS"
}

let cabecera ={
    method:"POST",
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(nuevoUsuario)
};

fetch("https://reqres.in/api/users", cabecera)
.then((respuesta) => {
    return respuesta.json();
})
.then((usuarioCreado) => {
    console.table(usuarioCreado);
})
.catch((error)=>{
    console.log(error);
})