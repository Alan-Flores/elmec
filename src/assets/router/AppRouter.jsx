import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import Servicios from '../components/Servicios'
import Whatsapp from '../components/Whatsapp'
import Nosotros from '../components/Nosotros'
import Objetivos from '../components/Objetivos'

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
            <Whatsapp />
        </>
    )
}

export default AppRouter
