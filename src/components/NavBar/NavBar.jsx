import CartWidget from "./CartWidget"
import "./navbar.css"
import imgLogoAlbergue from "../../assets/logo_albergue_aspros.png"

const NavBar = () => {

    return(

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Tienda Aspros</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            <a className="nav-link" href="#">Ofertas de Verano</a>
            <a className="nav-link" href="#">Medicnas y comida</a>
            <a className="nav-link" href="#">Juguetes y camas</a>
        </div>
        </div>
    </div>
    <CartWidget/>
    </nav>

    )
    
}

export default NavBar