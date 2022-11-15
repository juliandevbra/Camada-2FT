import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AsyncAwait = () => {

    const [poke, setPoke] = useState()
  
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

    useEffect(() => {
        //Async/await con fetch
        const fetchData = async () => {
            let res = await fetch(url)
            let data = await res.json()
            console.log(data)
        }
        fetchData()

        //Async/await con axios
        const axiosData = async () => {
            let res = await axios(url)
            setPoke(res.data)
        }
        axiosData()
    }, [])
   
    return (
    <div>
        <h1>Aprendiendo Async / Await</h1>
        <h1>{poke?.name}</h1>
        <img src={poke?.sprites.front_default} alt="" />
    </div>
  )
}

export default AsyncAwait