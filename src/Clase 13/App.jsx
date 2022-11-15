import { useState } from 'react'
import './App.css'
import ClassComponent from './Clase 13/Components/ClassComponent'
import FuncComponent from './Clase 13/Components/FuncComponent'

function App() {

  const [boton, setBoton] = useState(false)

  return (
    <div className="App">
      {boton ? <ClassComponent/> : <FuncComponent />}
      <button onClick={() => setBoton(!boton)}>Cambiar de componente</button>
    </div>
  )
}

export default App
