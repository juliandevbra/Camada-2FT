import { useState } from 'react'
import './App.css'
import Todoadded from './Clase 8/Práctica/Todoadded'
import Todolist from './Clase 8/Práctica/Todolist'

function App() {

  const [added, setAdded] = useState([])

  return (
    <div className="App">
        <Todolist  setAdded={setAdded}/>
        <Todoadded added={added}/>
    </div>
  )
}

export default App
