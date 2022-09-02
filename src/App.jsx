import Header from './assets/components/Header';
import NavBar from './assets/components/NavBar';
import Carousel from './assets/components/Carousel';
import Servicios from './assets/components/Servicios';
import Whatsapp from './assets/components/Whatsapp';
import Nosotros from './assets/components/Nosotros';
import Objetivos from './assets/components/Objetivos';


function App() {

  return (
    
      <div className="container">
        <Header />
        <NavBar />
        <Carousel />
        <Servicios />
        <Nosotros />
        <Objetivos/>
        <Whatsapp />
      </div>
    
  )
}

export default App