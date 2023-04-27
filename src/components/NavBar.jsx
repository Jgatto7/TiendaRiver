import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <>
            <nav>
                <ul className="navBar">
                    <li><a href="./pages/tienda.html">Tienda</a></li>
                    <li><a href="./pages/proximamente.html">Proximamente</a></li>
                    <li><a href="./pages/nosotros.html">Nosotros</a></li>
                    <li><a href="./pages/contacto.html">Contacto</a></li>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </>
    )
};