import React, {useState} from 'react'
import Error from './Error/Error'

export default function Form({guardarBusquedaLetra}) {

   const [ busqueda, setBusqueda ] = useState({
       artista: '',
       cancion: ''
   })
   const [ error, setError ] = useState(false)

    const { artista, cancion } = busqueda;


   const handleChange = e => {
       setBusqueda({
           ...busqueda,
           [e.target.name]: e.target.value
       })
   }

const buscarInformacion = e => {
    e.preventDefault();

    //validación

    if(artista.trim() === '' || cancion.trim() === ''){
        setError(true);
        return;
    } else {
        setError(false)
    }
    guardarBusquedaLetra(busqueda)
}
    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                <form 
                    className='col card text-white bg-transparent mb-5 pt-5 mb-2'
                    onSubmit={buscarInformacion}
                >
                    <fieldset>
                        <legend className="text-center">Buscador Letras Canciones</legend>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Artista</label>
                                    <input
                                     type="text"
                                      className="form-control"
                                      name='artista'
                                      placeholder='Nombre del Artista'
                                      onChange={handleChange}
                                      value={artista}
                                      />
                                      
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                    <label htmlFor="">Canción</label>
                                    <input
                                     type="text"
                                      className="form-control"
                                      name='cancion'
                                      placeholder='cancion'
                                      onChange={handleChange}
                                      value={cancion}
                                       />
                                </div>
                            </div>
                        </div>
                        {error ? <Error mensaje='Todos los campos son obligatorios' /> : null}
                        <button
                            type='submit'
                            className='btn btn-primary float-right'
                        >Buscar</button>
                    </fieldset>
                </form>
                </div>
            </div>
        </div>
       
    )
}
