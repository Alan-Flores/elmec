import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import Servicios from '../components/Servicios'
import Whatsapp from '../components/Whatsapp'
import Nosotros from '../components/Nosotros'
import Objetivos from '../components/Objetivos'
import Footer from '../components/footer'
import Contacto from '../components/Contacto'

const AppRouter = () => {
    return (
        <>
            <div className="container">
                <Header />
                <NavBar />
            </div>
            <div>
                <Carousel />
            </div>
            <div className='container'>
                <Servicios />
            </div>
            <Nosotros />
            <Objetivos />
            <div className='container'>
                <Contacto />
            </div>
            <Footer />
            <Whatsapp />
            
        </>
    )
}

export default AppRouter
