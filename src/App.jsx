import { Route, Routes } from 'react-router-dom'
import ModalPelicula from './assets/components/ModalPelicula'
import AppRouter from './assets/router/AppRouter'




function App() {

  return (
    <Routes>
      <Route path="/*" element={ <ModalPelicula /> }/>
      <Route path="/home" element={ <AppRouter />} />
    </Routes>
  )
}

export default App