import React from 'react'

const Child = ({texto}) => {
  return (
    <div>
        <h2>Este es otro componente</h2>
        <h3>{texto}</h3>
    </div>
  )
}

export default Child