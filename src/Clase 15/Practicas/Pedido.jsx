import React, { useEffect } from 'react'

const Pedido = ({pedido}) => {

    useEffect(() => {
        console.log('El componente fue actualizado')
        return () => {
            console.log('El componente fue desmontado')
        }
    }, [pedido])

  return (
        <li >{pedido}</li>
  )
}

export default Pedido