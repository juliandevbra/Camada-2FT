import React from 'react'
import { useSalarioState } from './Context'

const ChildComponent = () => {

  const {salario, setSalario} = useSalarioState()

  return (
    <div className='child'>
        <h3>ChildComponent</h3>
        <p>Cuanto ganas por semestre?</p>
        <h3>Total: {salario*6} </h3>
        <button onClick={() => setSalario(salario + 60000)}> Aumentar</button>
        {console.log('Renderizado el hijo')}
    </div>
  )
}

export default ChildComponent
