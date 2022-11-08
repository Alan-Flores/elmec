import React, { useState } from 'react';
import Pelicula from "./Pelicula";
import Modal from "./Modal";
import { useNavigate } from 'react-router-dom';

const ModalPelicula = () => {

  const navigate = useNavigate()

  //LLAMADO MODAL
  const [active, setActive] = useState(true);
  const toggler = () => {
    setActive(!active)
    navigate('/home', {
      replace: true
    })
  }

  return (
    <Modal active={!active}>
      <Pelicula />
      <div className='btn-vid'>
        <button id="btnShow" type="button" onClick={toggler} className="btn btn-primary">Ir a la pagina</button>
      </div>
    </Modal>
  )
}

export default ModalPelicula
