import './App.css'
import Child from './Clase 6/Child'
import Parent from './Clase 6/Parent'
import Child2 from './Clase 6/Child2'

function App() {

  return (
    <div className="App">
      <Parent >
        {(item) => <Child texto={item}/>}
      </Parent>
      <Parent>
        {(item) => <Child2 texto={item}/>}
      </Parent>
    </div>
  )
}

export default App
