import { useState } from "react";
import FormProducto from "../components/FormProducto"

export default function CrearProductoView() {
    const [value, setValue] = useState ({
        nombre: "",
        descripcion :"",
        precio: 0,
    });

    const actualizarInput = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <FormProducto value={value} actualizarInput={actualizarInput}/>
        </div>
    );
}