import Header from './assets/components/Header';
import NavBar from './assets/components/NavBar';
import Carousel from './assets/components/Carousel';
import Prueba from './assets/components/prueba';


function App() {

  return (
    <>
      <div className="container">
        <Header />
        <NavBar />

        <Carousel />
        <Prueba />
        <Prueba />
      </div>
    </>
  )
}

export default App