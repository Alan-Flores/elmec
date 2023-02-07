import Elmec from '../img/elmec.svg'

const Footer = () => {
  return (
    
        <div className="">
          <div className="col-6">
          <img src={Elmec} className="logo-footer" alt="40" />
          </div>
          <div className="text-footer col-6">
            <a>© 2023 ELMEC SERVICIOS INDUSTRIALES</a>
            <br></br>
            <a>Todos los derechos reservados</a>
          </div>
        </div>
  )
}

export default Footer