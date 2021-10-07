import React, {Fragment} from 'react'

export default function cancion({lyrics}) {
    return (
        <Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{lyrics}</p>
        </Fragment>
    )
}
