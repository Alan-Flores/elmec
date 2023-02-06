import Burger from '../img/carousel/burger.jpg'
import Penon from '../img/carousel/tabpenon.jpg'
import tabBurger from '../img/carousel/tabburger.jpg'
import Chile from '../img/carousel/chile.jpg'
import Mantencion from '../img/carousel/mantencion.jpg'
import Rotulos from '../img/carousel/rotulos.jpg'

const Carousel = () => {
  return (
    <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2200">
          <img src={Rotulos} className="w-100 kenburns-left" alt="350" />
          <div className="carousel-caption">
            <h5 className="title-carousel">Rótulos y grabados</h5>
            <div className="line-carousel"></div>
            <p className="text-carousel">Realizamos todo tipo de rótulos para distintas aplicaciones.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2200">
          <img src={Burger} className="w-100 kenburns-left" alt="350" />
          <div className="carousel-caption">
            <h5 className="title-carousel">Servicios eléctricos</h5>
            <div className="line-carousel"></div>
            <p className="text-carousel">Instalaciones eléctricas en distintos locales de comida rápida.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2200">
          <img src={Mantencion} className="w-100 kenburns-left" alt="350" />
          <div className="carousel-caption">
            <h5 className="title-carousel">Emergencias</h5>
            <div className="line-carousel"></div>
            <p className="text-carousel">Realizamos atenciones de emergencias, atendiendo todas tus necesidades eléctricas.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2200">
          <img src={tabBurger} className="w-100 kenburns-left" alt="350" />
          <div className="carousel-caption">
            <h5 className="title-carousel">Tableros</h5>
            <div className="line-carousel"></div>
            <p className="text-carousel">Desarrollo de tableros eléctricos a medida y según necesidades eléctricas del proyecto. </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2200">
          <img src={Penon} className="w-100 kenburns-left" alt="350" />
          <div className="carousel-caption">
            <h5 className="title-carousel">Alimentadores</h5>
            <div className="line-carousel"></div>
            <p className="text-carousel">Realizamos tendido de conductores en diversas industrias, cuidando la calidad en todo momento.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel;
