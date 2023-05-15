import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <nav>
                <ul className="navBar">
                    <li><NavLink to="/Tienda">Tienda</NavLink></li>
                    <li><NavLink to="/Proximamente">Proximamente</NavLink></li>
                    <li><NavLink to="/Nosotros">Nosotros</NavLink></li>
                    <li><NavLink to="/Contacto">Contacto</NavLink></li>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </>
    )
};