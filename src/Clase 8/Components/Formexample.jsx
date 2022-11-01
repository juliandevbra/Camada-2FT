import React, { useState } from 'react'

const Formexample = () => {

    const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
      phone: '',
      birth: ''
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      alert(`
      Nombre: ${user.name} 
      Email: ${user.email}
      Password: ${user.password}
      Telefono: ${user.phone}
      Fecha de nacimiento: ${user.birth}
      `)
    }
    //Función para todos los onChange
    const handleChange = (e) => {
      setUser({
          ...user,
        [e.target.name]: e.target.value
      })
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" name='name' onChange={(event) => setUser({...user, name: event.target.value})} />
        <label>Email</label>
        <input type="email" name='email' onChange={(event) => setUser({...user, email: event.target.value})}/>
        <label>Password</label>
        <input type="password" name='password' onChange={(event) => setUser({...user, password: event.target.value})}/>
        <label>Telefono</label>
        <input type="number" name='phone' onChange={(event) => setUser({...user, phone: event.target.value})}/>
        <label>Fecha de nacimiento</label>
        <input type="text" name='birth' onChange={(event) => setUser({...user, birth: event.target.value})}/>
        <button>Registrarse</button>
      </form>

      <h2>Información ingresada</h2>
      <h4>Nombre: {user.name}</h4>
      <h4>Email: {user.email}</h4>
      <h4>Password: {user.password}</h4>
      <h4>Telefono: {user.phone}</h4>
      <h4>Fecha de nacimiento: {user.birth}</h4>
    </>
  )
}

export default Formexample