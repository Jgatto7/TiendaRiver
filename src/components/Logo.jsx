import RiverLogo from "../assets/img/river-plate-logo.png"
import { NavLink } from "react-router-dom";

export const Logo = () => {
    return (
        <>
        <div>
            <NavLink to="/"><img src={RiverLogo} alt="" className="logoRiver" /></NavLink>
        </div>
        </>
    )
};