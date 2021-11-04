const obtenerProductos = async ()=>{
    try {
        let rpta = await fetch("https://6183943891d76c00172d19df.mockapi.io/productos");
        let productos = await rpta.json();
        return productos;
        // console.table(productos);
    } catch (error) {
        console.log(error);
    }
};

obtenerProductos();

let body = document.querySelector("body")

obtenerProductos()
    .then((misProductos)=> {
        let htmlProductos = "";
        misProductos.forEach((prod) => {
            htmlProductos = htmlProductos + `
            <tr>
                <td>${prod.nombre}</td>
                <td>${prod.precio}</td>
            </tr>
            `;
        });
        body.innerHTML = `<table border="1">
                        ${htmlProductos}
                        </table>
        `
    });
    // .catch((err) => console.log(err));