import Elmec from '../img/elmec.svg'

const Footer = () => {
  return (
    
      <div className="row header">
        <div className="col-12">
          <img src={Elmec} className="logo-footer" alt="40" />
          <div className="text-footer">
            <a>© 2023 ELMEC SERVICIOS INDUSTRIALES</a>
            <br></br>
            <a>Todos los derechos reservados</a>
          </div>
        </div>
      </div>
  )
}

export default Footer