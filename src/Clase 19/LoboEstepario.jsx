import React from 'react'
import { useSalarioState } from './Context'


const LoboEstepario = () => {

  const {salario} = useSalarioState()

  return (
    <div className='lobo-estepario'>
        <img className='lobo' src='/lobo.png' alt='lobo'/>
        <h3>Total: {salario*6}</h3>
        {console.log('Renderizado el lobo')}
    </div>
  )
} 

export default LoboEstepario