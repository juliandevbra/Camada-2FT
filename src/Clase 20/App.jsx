import { useState } from 'react'
import './App.css'
import Counter from './Clase 20/Counter'
import LSexample from './Clase 20/LSexample'
import UserList from './UserList'


function App() {
  const user = localStorage.getItem('user')
  const parsedUser = JSON.parse(user)
  console.log(parsedUser)

  const borrarLocal = () => {
    localStorage.removeItem('user')
  }
  return (
    <div className="App">
      {user}
      <br/>
      {parsedUser?.name}
      <LSexample/>
      <button onClick={borrarLocal}>borrar</button>
      <Counter/>
      <UserList/>
    </div>
  )
}

export default App
