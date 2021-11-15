import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ListaProductosView from "./views/ListaProductosView";
import CrearProductoView from "./views/CrearProductoView";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ListaProductosView/>} />
          <Route path="/crearproducto" element={<CrearProductoView/>} />
        </Routes>
      </Router>
    </div>
  );
}
