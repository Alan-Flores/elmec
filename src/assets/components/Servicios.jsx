import Industria from '../img/card/industria.jpg'
import Oficina from '../img/card/oficina.jpg'
import Retail from '../img/card/retail.jpg'
import Habitacional from '../img/card/habitacional.jpg'
import Tablero from '../img/card/tableros.jpg'
import Redes from '../img/card/redes.jpg'
import { GiFactory } from 'react-icons/gi'
import { ImOffice } from 'react-icons/im'
import { BsShop } from 'react-icons/bs'
import { MdOutlineMapsHomeWork } from 'react-icons/md'
import { MdOutlineElectricalServices } from 'react-icons/md'
import { FaNetworkWired } from 'react-icons/fa'
    

const DataCard = [
    {
        img: Industria,
        icon: <GiFactory className='icon' />,
        title: 'INDUSTRIAL',
        text: 'En el área de instalaciones y proyectos industriales, elaboramos trabajos eléctricos de vanguardia y respaldo profesional, brindando un aporte esencial al clientes y dejando en claro la expertiz que poseemos en el rubro de la Ingeniería Eléctrica.'
    },
    {
        img: Oficina,
        icon: <ImOffice className='icon' />,
        title: 'OFICINAS',
        text: 'Apoyamos a nuestros clientes en el desarrollo y ejecución de cada proyecto, realizando trabajos de alta calidad, funcionales y ayudando siempre con la estética del lugar, instalando puestos de trabajos (puntos eléctricos y puntos de datos), en pequeñas y grandes oficinas, quedando el cliente a gusto con el trabajo desarrollado.'
    },
    {
        img: Retail,
        icon: <BsShop className='icon' />,
        title: 'RETAILS',
        text: 'Nuestros proyectos eléctricos en el área comercial, han generado prestigio para nuestra empresa, ejecutando diversos trabajos. Satisfaciendo principalmente las exigencias de nuestros clientes. '
    },
    {
        img: Habitacional,
        icon: <MdOutlineMapsHomeWork className='icon' />,
        title: 'HABITACIONAL',
        text: 'durante toda su trayectoria, se ha caracterizado por desarrollar proyectos eléctricos habitacionales de gran envergadura. Satisfaciendo plenamente a sus clientes y cumpliendo con los plazos de entrega, de manera satisfactoria en todos nuestros compromisos con nuestros mandantes.'
    },
    {
        img: Tablero,
        icon: <MdOutlineElectricalServices className='icon' />,
        title: 'TABLEROS',
        text: 'Durante nuestra trayectoria hemos desarrollado, fabricado e implementado diversas soluciones en el área de los tableros eléctricos, de pequeña y gran envergadura, pudiendo resolver las necesidades de nuestros clientes, con calidad y terminaciones finas en todos nuestros proyectos, realizando tableros de pequeña y gran envergadura, integrando materiales de calidad y prestigio en el mercado.'
    },
    {
        img: Redes,
        icon: <FaNetworkWired className='icon' />,
        title: 'REDES',
        text: 'Realizamos todo tipo de cableados en cobre y fibra óptica, dejando todo el canal completo de los puntos de la red, con su certificado correspondientes, armado y conexionado de rack de comunicación, para sistemas de redes, telefonía, circuito cerrado de televisión, control de acceso, etc. Trabajamos con material de calidad, cumpliendo todas las exigencias de la normativa y las especificaciones técnicas asociadas.'
    }    
]



const Servicios = () => {
    return (

        <div className="row justify-content-center mb-5">
            <h1 className="title">
                ÁREAS DE NEGOCIO
            </h1>
            <div className="line"></div>
            <div className="row justify-content-center">
                {DataCard.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src={item.img} className="card-img-top mt-2" alt="industria" />
                            <div className="card-body row justify-content-center">
                                {item.icon}
                                <h4 className="card-title row justify-content-center">{item.title}</h4>
                                <p className="card-text">{item.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Servicios;
