import React, { useState } from 'react'
import Article from '../Components/Article'

const Shopdashboard = ({titulo}) => {

    const [productSelected, setProductSelected] = useState()
    const [discSelected, setDiscSelected] = useState()

    let lista = [
        {id: 1, producto: 'Remera', precio: 2500},
        {id: 2, producto: 'Pelota', precio: 4000},
        {id: 3, producto: 'Jean', precio: 8000}
    ]
    const product = lista.find(item => item.producto === productSelected)
  return (
    <div>
        <h1>Bienvenidos al {titulo}</h1>
        
        {/* {lista.map(item => <Article key={item.id} producto={item}/>)} */}
        <form>
            <select name="" id="" onChange={(e) => setProductSelected(e.target.value)}>
                <option value=''>Producto</option>
                {lista.map(item => <option value={item.producto} >{item.producto} </option>)}
            </select>
            <h3>producto seleccionado: {productSelected} - ${product?.precio}</h3>
            <select name="" id="" onChange={(e) => setDiscSelected(e.target.value)}>
                <option value={10}>10%</option>
                <option value={20}>20%</option>
                <option value={30}>30%</option>
            </select>
            <h3>Descuento seleccionado: {discSelected}</h3>
            <h1>${product?.precio - product?.precio * discSelected / 100}</h1>
        </form>
    </div>
  )
}

export default Shopdashboard