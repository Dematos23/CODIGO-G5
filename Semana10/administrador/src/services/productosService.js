import axios from "axios";

const URL = `${process.env.REACT_APP_API}productos`;

const obtenerProductos = async () => {
    try {
        const {data} = await axios.get(URL);
        return data;
    } catch (error) {
        throw error;
    }
};

const crearProducto = async (nuevoProducto) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        const {data} = await axios.post(URL, nuevoProducto, {headers});
        return data;
    } catch (error) {
        throw error;
    }
}

export {obtenerProductos, crearProducto};