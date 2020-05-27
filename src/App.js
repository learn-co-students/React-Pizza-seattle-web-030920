import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const API = 'http://localhost:3000/pizzas'
class App extends Component {
  constructor() {
    super()
    this.state = {
      pizzas:[],
      editPizza: '',
      showForm: false
    }
  }

  componentDidMount() {
    this.fetchPizzas()
  }
  
  fetchPizzas = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({pizzas:data}))
  }

  editPizza = (pizza) => {
    this.setState({editPizza: pizza, showForm: true})
  }
  handleChange = (event) => {
    const value = event.target.value
    if (event.target.type === 'radio') {
      const noMeat = value === 'Vegetarian' ? true : false
      this.setState(prev => {
        return {editPizza: {...prev.editPizza, vegetarian: noMeat}}})
    } else if (event.target.type === 'text') {
      this.setState(prev => ({editPizza: {...prev.editPizza, topping: value}}))
    } else {
      this.setState(prev => ({editPizza: {...prev.editPizza, size: value}}))
    }
  }

  handleSubmit = () => {
    fetch(`${API}/${this.state.selectedPizza.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json',},
      body: JSON.stringify(this.state.selectedPizza),
    })
    .then(res => res.json())
    .then(
      this.setState(prev=>({pizzas: prev.pizzas.map(pizza=> {
        if(this.state.selectedPizza.id===pizza.id){
          pizza={...this.state.selectedPizza}
        }
        return pizza
      }), showForm: false}))
    )
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          onHandleChange={this.handleChange} 
          onHandleSubmit={this.handleSubmit}
          editPizza={this.state.editPizza}
        />
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
