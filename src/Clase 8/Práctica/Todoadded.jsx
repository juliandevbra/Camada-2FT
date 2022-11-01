import React from 'react'

const Todoadded = ({added}) => {
  return (
    <div>
      <h1>Elementos agregados</h1>
      {added.map(item => (
            <>
                <li>{item}</li>
            </>
        ))}
    </div>
  )
}

export default Todoadded