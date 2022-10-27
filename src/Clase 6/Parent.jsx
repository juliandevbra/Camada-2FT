import React from 'react'

const Parent = ({children}) => {
    const texto = 'Algun texto'
  return (
    <div>
        <h1>Este es el componente padre</h1>
        <h3>{children(texto)}</h3>
    </div>
  )
}

export default Parent