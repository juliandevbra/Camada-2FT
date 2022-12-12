import React, { useEffect, useState } from 'react'
import axios from 'axios' //npm i axios
import { toast, ToastContainer } from 'react-toastify'
import Swal from 'sweetalert2'

const FetchAxios = () => {

    const [poke, setPoke] = useState()
  
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

    useEffect(() => {
        // Llamado a API con fetch()
        fetch(url)
        .then(res => res.json())
        .then(data => toast(`Se ha conseguido el pokemon ${data.name}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark" }
            ))
        .catch(err => Swal.fire(
            'Ups...', 
            'Ha ocurrido un error', 
            'error'
        ))

        //Llamado a API con axios
        axios.get(url)
        .then(res => setPoke(res.data))
        .catch(err => Swal.fire(
            'Ups..', 
            `Ocurrió el siguiente error: ${err}`, 
            'error'
        ))
    }, [])

    return (
    <div>
        <h1>Aprendiendo fetch</h1>
        <h1>{poke?.name}</h1>
        <img src={poke?.sprites.front_default} alt="" />
        <ToastContainer/>
    </div>
  )
}

export default FetchAxios