import axios from "axios";

const URL = "https://6183943891d76c00172d19df.mockapi.io/productos";

const obtenerProductos = async () => {
    try {
        const respuesta = await axios.get(URL);
        console.log(respuesta);
    } catch (error) {
        throw error;
    }
}

export {obtenerProductos};