import React, { useState } from 'react'

const Todolist = ({setAdded}) => {

    const todolist = [
        'Barrer la casa',
        'Preparar almuerzos de la semana',
        'Limpiar el baño',
        'Regar las plantas',
        'Comprar alimento para manchitas'
    ]

  return (
    <>
        {todolist.map(item => (
            <>
                <li>
                    {item}
                    <button onClick={() => setAdded((prev) => [...prev, item])}>Agregar a la lista</button>
                </li>
            </>
        ))}
    </>
  )
}

export default Todolist