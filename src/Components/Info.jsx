import React from 'react'

export default function ArtistaInfo({artistaInfo}) {

    if(Object.keys(artistaInfo).length === 0) return null

    const {strArtistThumb,strGenre, strBiographyES, strBiographyEN} = artistaInfo;

   
    return (
        <div className='card border-light'>
            <div className="card-header bg-primary text-light font-weight-bold">
                Información del Artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" />
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text">Biografía:</h2>
                {strBiographyES ? <p className="card-text">{strBiographyES} </p> : <p className="card-text">{strBiographyEN} </p>}
                <p className="card-text">
                    <a href={`https://${artistaInfo.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${artistaInfo.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${artistaInfo.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    )
}
