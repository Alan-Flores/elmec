import Elmec from '../img/elmec.svg'
import Weare from '../img/nosotros.png'

const Nosotros = () => {
    return (
 
            <div id="nosotros" className="row mb-5 nosotros">
                <div className="media-nosotros">
                    <h1 className="title">
                        NOSOTROS
                    </h1>
                    <div className="line"></div>
                    <p className='text-nosotros'>
                        Si bien somos una empresa nueva en el mercado, nos encontramos trabajando día a día para entregar servicios de calidad y excelencia, para que nuestros clientes obtengan el mejor producto.
                        <br></br>
                        <br></br>
                        Nuestros servicios cumplen con toda la normativa vigente, con productos reconocidos en el mercado (Legrand, Schneider Electric, ABB, entre otros), con lo cual podemos entregar confianza, respaldo, seguridad y garantía a todos nuestros servicios y productos.
                        <br></br>
                        <br></br>
                        Servicios Industriales Elmec Ltda. tiene más de 5 años de experiencia, contamos con equipos altamente calificado entre ellos; ingenieros, técnicos, maestros y ayudantes, con lo cual podemos brindar un respaldo y soporte técnico de calidad, enfocado y adaptable a las necesidades de nuestros clientes.
                    </p>
                </div>
                <div className="div-img-nosotros">
                    <img src={Weare} alt="Elmec" className="img-nosotros" />
                </div>
            </div>

    )
}

export default Nosotros;

