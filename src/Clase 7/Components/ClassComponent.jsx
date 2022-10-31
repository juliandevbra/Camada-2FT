import { Component } from "react";

export default class ClassComponent extends Component {
  constructor(){
    super()
    this.state = {
      name: 'Vicky', 
      count: 0
    }
  }

    render() {
      return <div>
        <h1>Class component</h1>
        <p>{this.state.name}</p>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Sumar al contador</button>
        </div>
    }
}