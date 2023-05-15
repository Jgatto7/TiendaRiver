import { Logo } from "../../components/Logo";
import { NavBar } from "../../components/NavBar";
import { Card } from "../../components/Card";
import { itemsRiverPlate80 } from "../../components/InfoCamiseta80"
import { itemsRiverPlate90 } from "../../components/InfoCamiseta90"
import { itemsRiverPlate00 } from "../../components/InfoCamiseta00"



const PaginaTienda = () => {
    return (
        <>
    <header>
        <Logo />
        <NavBar />
    </header>
    <body>
        <h1>TIENDA</h1>
        <h2>Camisetas 80'</h2>
        <div className="divContainerCard">
            {itemsRiverPlate80.map((item) => (
            <Card key={item.id} item={item} />
            ))}
        </div>
        <h2>Camisetas 90'</h2>
        <div className="divContainerCard">
            {itemsRiverPlate90.map((item) => (
            <Card key={item.id} item={item} />
            ))}
        </div>
        <h2>Camisetas 00'</h2>
        <div className="divContainerCard">
            {itemsRiverPlate00.map((item) => (
            <Card key={item.id} item={item} />
            ))}
        </div>
    </body>
    <footer>

    </footer>
    </>
    )
}

export { PaginaTienda } 

