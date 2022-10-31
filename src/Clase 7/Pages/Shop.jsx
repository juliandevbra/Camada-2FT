import React, { useState } from 'react'
import Header from '../Components/Header'
import productos from '../productos.json'
import '../../App.css'
import Card from '../Components/Card'


const Shop = () => {
  const [cart, setCart] = useState([])
  return (
    <div>
        <Header titulo='Shop'/>
        {productos.map((item) => (
            <Card key={item.id} item={item} cart={cart} setCart={setCart}/>
        ))}
        {console.log(cart)}
    </div>
  )
}

export default Shop