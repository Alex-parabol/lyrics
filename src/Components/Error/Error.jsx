import React from 'react'

export default function Error({mensaje}) {
    return (
        <p className="alert alert-danger text-center p-2">{mensaje}</p>
    )
}
