import { Component } from "react";

export default class ClassComponent extends Component {
  constructor(){
    super()
    this.state = {
      name: 'Vicky', 
      count: 0
    }
  }

  componentDidMount() {
    console.log('Este componente se montó')
  }

  componentDidUpdate() {
    console.log('se va a ejecutar cuando el estado se actualice')
  }

  componentWillUnmount() {
    console.log('Esto se ejecuta cuando este componente de clase se destruye')
  }

    render() {
      console.log('El render está primero, antes que el componentDidMount')
      return <div>
        <h1>Class component</h1>
        <p>{this.state.name}</p>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Sumar al contador</button>
        </div>
    }
}