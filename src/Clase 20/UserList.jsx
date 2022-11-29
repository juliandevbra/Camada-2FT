import React, { useReducer, useState } from 'react'
import { reducer } from './reducer'
const initialState = { 
    users: 
    [
      {id: 1, userName: 'Gerardo', email: 'gerar@gmail.com'},
      {id: 2, userName: 'Magdalena', email: 'Magda@gmail.com'},
      {id: 3, userName: 'Lucia', email: 'lu-cia@gmail.com'}
    ]
  }



const UserList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [newUser, setNewUser] = useState({
        id: null,
        userName: '',
        email: ''
    })
    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_USER', payload: newUser})
    }
    console.log(state)
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="number" name='id' onChange={handleChange}/>
            <input type="text" name='userName' onChange={handleChange}/>
            <input type="text" name='email' onChange={handleChange}/>
            <button>Añadir usuario</button>
        </form>
    </div>
  )
}

export default UserList