import React from 'react'

const Child = ({texto}) => {
  return (
    <div>
        <h2>Este es el contenido de child</h2>
        <h3>{texto}</h3>
    </div>
  )
}

export default Child