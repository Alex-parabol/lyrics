import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Form from './Components/Form'
import Cancion from './Components/cancion'
import Info from './Components/Info'


function App() {
  // llamamos a la api

  const [ busquedaLetra, guardarBusquedaLetra ] = useState({})
  const [ lyrics, setLyrics ] = useState('')
  const [ artistaInfo, setArtistaInfo ] = useState({})

  const { artista, cancion } = busquedaLetra;
  


  useEffect(()=>{
    if(Object.keys(busquedaLetra).length === 0) return;
    const consultarApi = async ()=>{
      const urlLetra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const urlArtista = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const [ letra, artistaInfo ] = await Promise.all([
        axios(urlLetra),
        axios(urlArtista)
      ])
      

      setLyrics(letra.data.lyrics)
      setArtistaInfo(artistaInfo.data.artists[0])
      
    }
    consultarApi()
  }, [busquedaLetra, artistaInfo, artista, cancion])

  return (
   <Fragment>
     <Form 
      guardarBusquedaLetra={guardarBusquedaLetra}
     />
     <div className="container mt-5">
       <div className="row">
         <div className="col-md-6">
           <Info artistaInfo={artistaInfo} />
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
