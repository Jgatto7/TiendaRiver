import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import './style.css';
import { Logo } from "./components/Logo";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { PaginaProximamente, PaginaNosotros, PaginaContacto, PaginaTienda} from "./pages";


function Home () {
  return (
    <>
    <header>
      <Logo />
      <NavBar />
    </header>
    <body>
      <ItemListContainer />
    </body>
    <footer>

    </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tienda" element={<PaginaTienda/>} />
        <Route path="/Proximamente" element={<PaginaProximamente/>} />
        <Route path="/Nosotros" element={<PaginaNosotros/>} />
        <Route path="/Contacto" element={<PaginaContacto/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;