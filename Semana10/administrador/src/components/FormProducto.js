export default function FormProducto({value, actualizarInput}) {
    console.log(value);
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">
                        Nombre producto
                    </label>
                    <input 
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={value.nombre}
                        onChange={(e) => {
                            actualizarInput(e);
                        }}
                        />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">
                        Descripción producto
                    </label>
                    <input 
                        type="text"
                        className="form-control"
                        name="descripcion"
                        value={value.descripcion}
                        onChange={(e) => {
                            actualizarInput(e);
                        }}
                        />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Precio producto
                    </label>
                    <input 
                        type="text"
                        className="form-control"
                        name="precio"
                        value={value.precio}
                        onChange={(e) => {
                            actualizarInput(e);
                        }}
                        />
                </div>
            </form>
        </div>
    );
}