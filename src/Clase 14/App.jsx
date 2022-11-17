import { useState } from 'react'
import './App.css'
import ClassComponent from './Clase 13/Components/ClassComponent'
import FuncComponent from './Clase 13/Components/FuncComponent'
import AsyncAwait from './Clase 14/AsyncAwait'
import FetchAxios from './Clase 14/FetchAxios'

function App() {

  const [boton, setBoton] = useState(false)

  return (
    <div className="App">
      <FetchAxios/>
      <AsyncAwait/>
    </div>
  )
}

export default App
