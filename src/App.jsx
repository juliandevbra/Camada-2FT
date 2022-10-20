import './App.css'
import imagen from './assets/satisfied.png'

function App() {

  let headers = ['Home', 'Home', 'About', 'Contact', 'FAQ']

  let users = [
    {id: 0, name: 'Lucas', age: 25 },
    {id: 1, name: 'Sofi', age: 27 },
    {id: 2, name: 'Diego', age: 10 },
  ]

  return (
    <div className="App">
      <h1>Hola pulsoneta 3.0!!!</h1>
      <input/>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </div>
  )
}

export default App
