import React from "react";
import { CgToolbox } from 'react-icons/cg';
import { VscTools } from 'react-icons/vsc';

import '../css/whatsapp.css';


const Whatsapp = () => {
    return (
        <>
            <div className="whatsapp-ventas row">
                <a
                    href="https://api.whatsapp.com/send/?phone=56984118387&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lg"
                >
                    <CgToolbox className="ventas" /> <span className="whatsapp-text">Área de Ventas</span>
                </a>
                
            </div>

            <div className="whatsapp-tecnico row">
                <a
                    href="https://api.whatsapp.com/send/?phone=56954018930&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lg contacto"
                >
                    <VscTools className="tecnico" /> <span className="whatsapp-text">Área Técnica</span>
                </a>
            </div>
        </>
    )
}

export default Whatsapp;

