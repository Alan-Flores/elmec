import '../css/pelicula.css'

const Pelicula = () => {

    return (

        <div className="row vid">
            <video loop autoPlay muted>
                <source src="https://elmec.cl/a_records/vidio/Elmec.mp4" type="video/mp4" />
            </video>

        </div>

    )
}

export default Pelicula
