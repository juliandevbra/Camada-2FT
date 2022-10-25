import React from 'react'
import Header from '../Components/Header'
import productos from '../productos.json'
import '../../App.css'
import { shopStyles } from './ShopStyles'
import styles from '../../App.module.css'

const Shop = () => {
  return (
    <div>
        <Header titulo='Shop'/>
        {productos.map((item) => (
          <div className={styles.card} key={item.id} style={shopStyles}>
            <img src={item.imagen} alt="" className='imagen'  />
            <h3 className={styles.titulo}>{item.nombre}</h3>
            <h4 className={styles.precio}>{item.precio}</h4>
          </div>
        ))}
    </div>
  )
}

export default Shop