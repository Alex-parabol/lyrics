import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Form from './Components/Form'
import Cancion from './Components/cancion'


function App() {
  // llamamos a la api

  const [ busquedaLetra, guardarBusquedaLetra ] = useState({})
  const [ lyrics, setLyrics ] = useState('')

  const { artista, cancion } = busquedaLetra;
  


  useEffect(()=>{
    if(Object.keys(busquedaLetra).length === 0) return;
    const consultarApi = async ()=>{
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const resultado = await axios.get(url)
      setLyrics(resultado.data.lyrics)
      console.log(resultado.data.lyrics)
    }
    consultarApi()
  }, [busquedaLetra])

  return (
   <Fragment>
     <Form 
      guardarBusquedaLetra={guardarBusquedaLetra}
     />
     <div className="container mt-5">
       <div className="row">
         <div className="col-md-6">
           artista
         </div>
         <div className="col-md-6">
           <Cancion lyrics={lyrics}/>
         </div>
       </div>
     </div>
   </Fragment>
  );
}

export default App;
