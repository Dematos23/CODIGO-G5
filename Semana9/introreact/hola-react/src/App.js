import {useState} from "react";
import Main from "./components/Main"

function App() {

const [contador, setContador] = useState(0)
const [titulo, setTitulo] = useState("Mi Titulo")
const [texto, setTexto] = useState("")

const actualizarContador = () => {
  setContador(contador + 1);
}

const productos = [
  {
    nombre: "peluche",
    precio:50,
  },
  {
    nombre:"Furro 3000",
    precio:1,
  },
  {
    nombre:"Pingüino",
    precio:100,
  },
  {
    nombre:"GPU RTX 3060",
    precio:3000,
  }
]

  return (
    <>
      <header>
        <h1>{titulo}</h1>
        <p>{contador}</p>
        <img src="https://picsum.photos/200" alt="imagen"/>
        <br/>
        <button onClick={actualizarContador}>Aumentar</button>
        <button onClick={() => {setTitulo("Titulo con React");}}>Cambiar h1</button>
        <hr/>

        <Main subtitulo="Yo soy el subtitulo" mostrarInfo={true} numero={1} tituloPadre={titulo} actualizarTitulo={setTitulo}/>
        <Main subtitulo="Segundo subtitulo" mostrarInfo={false} numero={1}/>

        <div>
          <input type="text" placeholder="ingrese texto..." value={texto} onChange={(e)=> setTexto(e.target.value)}/>
        </div>

        <ul>
          {productos.map(({nombre, precio}, i) => (
             <li key={i}>{`${nombre} - ${precio}`}</li>
          ))}
        </ul>
      </header>
    </>
  );
}

export default App;
