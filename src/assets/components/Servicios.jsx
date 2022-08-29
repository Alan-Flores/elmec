import Industria from '../img/card/industria.jpg'
import Oficina from '../img/card/oficina.jpg'
import Retail from '../img/card/retail.jpg'
import Habitacional from '../img/card/habitacional.jpg'
import Tablero from '../img/card/tableros.jpg'
import CCTV from '../img/card/cctv.jpg'
import { GiFactory } from 'react-icons/gi'
import { ImOffice } from 'react-icons/im'
import { BsShop } from 'react-icons/bs'
import { MdOutlineMapsHomeWork } from 'react-icons/md'
import { AiOutlineProject } from 'react-icons/ai'
import { MdOutlineElectricalServices } from 'react-icons/md'
import { BsCameraVideo } from 'react-icons/bs'
    

const DataCard = [
    {
        img: Industria,
        icon: <GiFactory className='icon' />,
        title: 'INDUSTRIAL',
        text: 'En el área de proyectos industriales, elaboramos proyectos eléctricos de vanguardia y respaldo profesional, brindando un aporte esencial a clientes y dejando en claro la expertiz que poseemos en el rubro de la Ingeniería Eléctrica.'
    },
    {
        img: Oficina,
        icon: <ImOffice className='icon' />,
        title: 'OFICINAS',
        text: ''
    },
    {
        img: Retail,
        icon: <BsShop className='icon' />,
        title: 'RETAILS',
        text: ''
    },
    {
        img: Habitacional,
        icon: <MdOutlineMapsHomeWork className='icon' />,
        title: 'HABITACIONAL',
        text: ''
    },
    {
        img: Tablero,
        icon: <MdOutlineElectricalServices className='icon' />,
        title: 'TABLEROS',
        text: ''
    },
    {
        img: CCTV,
        icon: <BsCameraVideo className='icon' />,
        title: 'CCTV',
        text: ''
    }    
]



const Servicios = () => {
    return (

        <div className="row justify-content-center">
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
