import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const AsyncAwait = () => {

    const [poke, setPoke] = useState()
  
    const url = 'https://pokeapi.co/api/v2/pokemon/wartortle'

    useEffect(() => {
        //Async/await con fetch
        const fetchData = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                toast(`Gotta catch ${data.name}`)
                console.log(data)
            }
            catch (err) {
                Swal.fire({
                    icon: 'error', 
                    title: 'Oh no! :(', 
                    text: `Ocurrió el siguiente error: ${err}`
                })
            }
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