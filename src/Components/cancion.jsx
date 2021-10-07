import React, {Fragment} from 'react'

export default function cancion({lyrics}) {
    if(lyrics.length === 0) return null;
    return (
        <Fragment>
            <h2>Letra de la Canción</h2>
            <p
             className="letra">
                {lyrics}
                </p>
        </Fragment>
    )
}
