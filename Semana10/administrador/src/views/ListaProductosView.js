import { obtenerProductos } from "../services/productosService"

export default function ListaProductosView() {
    
    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos()
        } catch (error) {
            console.log(error)
        }
    };
    
    return (
        <div>
            
        </div>
    )
}
