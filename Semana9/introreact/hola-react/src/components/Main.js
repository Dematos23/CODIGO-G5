function Main ({subtitulo, tituloPadre, actualizarTitulo, mostrarInfo}) {


    return (
        <main>
            <div>
                <h2>{subtitulo}</h2>
                {mostrarInfo ? (<p>Lorem ipsum dolor sit amet.</p>) : null}
                
                <p>El titulo de App es {tituloPadre}</p>
                <button onClick={()=> {actualizarTitulo("Titulo desde Main");}}>Actualizar desde Main</button>
            </div>
        </main>
    )
}

export default Main;