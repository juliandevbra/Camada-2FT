import { useState } from 'react'
import './App.css'
import LoboEstepario from './Clase 19/LoboEstepario'
import ParentComponent from './Clase 19/ParentComponent'

function App() {

  return (
    <div className="App">
      <ParentComponent/>
      <LoboEstepario />
    </div>
  )
}

export default App
