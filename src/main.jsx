import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/styles.css'
import * as bootstrap from 'bootstrap'
import ModalPelicula from '../src/assets/components/ModalPelicula'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>

)
