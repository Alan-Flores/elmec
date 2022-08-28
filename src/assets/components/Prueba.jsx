import Elmec from '../img/elmec.svg'

const Prueba = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="px-4 py-5 my-5 text-center">
                        <img className="d-dblock mx-auto mb-4" src={Elmec}></img>
                        <h1 className="display-5 fw-bold">Bootstrap en React!</h1>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Boton Primario</button>
                            <button type="button" className="btn btn-online-secondary btn-lg px-4">Boton Primario</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prueba;
