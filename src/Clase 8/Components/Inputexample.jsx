import React, { useState } from 'react'

const Inputexample = () => {
  const [name, setName] = useState('Jonatan')
  return (
    <div>
      <h1>Hola {name}</h1>
      <input type="text" onChange={(event) => setName(event.target.value)}/>
    </div>
  )
}

export default Inputexample