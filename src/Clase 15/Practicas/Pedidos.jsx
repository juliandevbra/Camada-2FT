import React, { useEffect, useState } from 'react'
import Pedido from './Pedido'

const Pedidos = () => {
    const [orden, setOrden] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setOrden('pizza')
        }, 2000)
    }, [])

  return (
    <div>
        <h1>Su pedido:</h1>
        {orden && <Pedido pedido={orden}/>}
        {/* {orden ? <Pedido pedido={orden}/> : null} Esto es lo mismo que la linea 16 */}
        <button onClick={() => setOrden(null)}>Cancelar pedido</button>
    </div>
  )
}

export default Pedidos