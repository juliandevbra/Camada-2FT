import React, {useState} from 'react'
import { shopStyles } from '../Pages/ShopStyles'
import styles from '../../App.module.css'

const Card = ({item, cart, setCart}) => {
    const [count, setCount] = useState(0)
  return (
    <div className={styles.card}  style={shopStyles}>
        <img src={item.imagen} alt="" className='imagen'  />
        <h3 className={styles.titulo}>{item.nombre}</h3>
        <h4 className={styles.precio}>{item.precio}</h4>
        <h4>
        Stock:
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        {count}
        <button onClick={() => setCount(() => Math.max(0, count-1))}>-</button>
        </h4>
        <button onClick={() => setCart([...cart, {...item, stock: count}])}>Agregar al carrito</button>
    </div>
  )
}

export default Card