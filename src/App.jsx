import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import './style.css';
import { Logo } from "./components/Logo";


function App() {
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

export default App;