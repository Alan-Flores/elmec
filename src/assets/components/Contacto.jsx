import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import ApiKey from '../api/ApiKeyEmail'
import swal from 'sweetalert'
import Sec from '../img/sec_cert.png'

const Contacto = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(ApiKey.SERVICE_ID, ApiKey.TEMPLATE_ID, form.current, ApiKey.PUBLIC_KEY)
            .then((result) => {
                swal(
                    "God job!",
                    "Tus datos se han enviado de forma correcta, nos pondremos en contacto a la brevedad. Recuerda revisar tu bandeja de correos no deseados o bandeja de spam.",
                    "success"),
                    e.target.reset()
            }, (error) => {
                swal("Vuelve a intentarlo")
            })
    }

    return (
        <div>
            <div className="row justify-content-center mb-5" id="servicios">
                <h1 className="title">
                    CONTACTO
                </h1>
                <div className="line mb-5"></div>
                <div className="row justify-content-center">
                    <div className="row col-4 contacto-web">
                        <form ref={form} onSubmit={sendEmail} className="headerFormSelect">
                            <div className="row align-items-center">
                                <div className="mb-3 col-6 input-web">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" name="nombre" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3 col-6 input-web">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" id="apellido" name="apellido" aria-describedby="emailHelp" />
                                </div>

                                <div className="mb-3 col-6 input-web">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3 col-6 input-web">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Asunto</label>
                                    <input type="text" className="form-control" id="asunto" name="asunto" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Escribe tu mensaje</label>
                                <textarea type="textarea" className="form-control" id="mensaje" name="mensaje" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                    <div className="col-4">
                        <img src={Sec} alt="Elmec" className="img-sec mb-4" />
                        <div className="direccion">
                            <h6>
                                Las Acacias 995, Lo Prado, Santiago.
                                <br />
                                <br />
                                info@elmec.cl
                                <br/>
                                +56 9 8411 8387
                                <br/>
                                +56 9 5401 8930
                            </h6>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contacto
