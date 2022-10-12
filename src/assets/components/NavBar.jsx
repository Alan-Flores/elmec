import { FaFacebookF } from 'react-icons/fa'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
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
                            <a className="nav-link" href="#">PROYECTOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">NOTICIAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">COLABORADORES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.facebook.com/elmecingenieria" target="_blank"><FaFacebookF className="icon-menu"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
