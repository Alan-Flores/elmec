import { FaFacebookF } from 'react-icons/fa'


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicios">SERVICIOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#nosotros">NOSOTROS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#mision">MISION</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">CONTACTO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://elmec.cl/">VOLVER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.facebook.com/elmecingenieria" target="_blank"><FaFacebookF className="icon-menu" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://bodega.elmec.cl">BODEGA</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
