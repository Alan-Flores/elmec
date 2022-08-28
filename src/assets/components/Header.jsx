import Elmec from '../img/elmec.svg'

const Header = () => {
    return (
        
            <div className="row header">
                <div className="col-8">
                    <img src={Elmec} className="logo" alt="40" />
                </div>
                <div className="col-4 contact">
                    <a>Fono: +56 2 2613 8929 | Correo: info@elmec.cl</a>
                </div>
            </div>
        
    )
}

export default Header;
