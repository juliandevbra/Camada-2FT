import React, { useEffect, useState } from 'react'
import axios from 'axios' //npm i axios

const FetchAxios = () => {

    const [poke, setPoke] = useState()
  
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

    useEffect(() => {
        // Llamado a API con fetch()
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

        //Llamado a API con axios
        axios.get(url)
        .then(res => setPoke(res.data))
    }, [])
 
    return (
    <div>
        <h1>Aprendiendo fetch</h1>
        <h1>{poke?.name}</h1>
        <img src={poke?.sprites.front_default} alt="" />
    </div>
  )
}

export default FetchAxios