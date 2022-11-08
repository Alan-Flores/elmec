import Elmec from '../img/elmec.svg'


const Header = () => {

    return (

        <div className="row header">

            <div className="col-12">
                <img src={Elmec} className="logo" alt="40" />
                <div className="contact">
                    <a>Fono +56 2 2613 8929</a>
                    <br></br>
                    <a>Correo info@elmec.cl</a>
                </div>
            </div>

        </div>
    )
}

export default Header;
