import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormProducto from "../components/FormProducto"
import { crearProducto } from "../services/productosService";
import Swal from "sweetalert2";

export default function CrearProductoView() {
    const [value, setValue] = useState ({
        nombre: "",
        descripcion :"",
        precio: 0,
    });

    const navigate = useNavigate();

    const actualizarInput = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    const manejarSubmit = async (e) =>{
        e.preventDefault();
        try {
            await crearProducto(value);

            await Swal.fire({
                icon:"success",
                title:"Éxito",
                text:"Producto Creado!",
                showConfirmButton: false,
                timer:2000,
            });

            navigate("/");
        } catch (error) {
            
        }
    }

    return (
        <div>
            <FormProducto value={value} actualizarInput={actualizarInput} manejarSubmit={manejarSubmit}/>
        </div>
    );
}