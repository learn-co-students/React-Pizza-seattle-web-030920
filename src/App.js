import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const EMPTYPIZZA = {
  id: null,
  topping: "",
  size: "",
  vegetarian: null
}

const URL = "http://localhost:3000/pizzas"

class App extends Component {
  state = {
    pizzas: [],
    ...EMPTYPIZZA
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(pizzaList => {
      this.setState({
        pizzas: pizzaList
      })
    })
  }

  handleClickEdit = pizza => {
    this.setState({
      id: pizza.id,
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    })
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    if (name === "topping" || name === "size") {
      this.setState({
        [name]: value
      })
    } else {
      this.setState({
        vegetarian: !this.state.vegetarian
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(`${URL}/${this.state.id}`, {
      method: "PATCH",
      headers: {
        "COntent-Type": "application/json"
      },
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian
      })
    })
    .then(resp => resp.json())
    .then(pizza => {
      this.setState(prev => {
        return {
          pizzas: prev.pizzas.map(pizz => {
            if (pizz.id === pizza.id) {
              pizz = pizza
            }
            return pizz
          })
        }
      })
    })
    .catch(console.log)
    this.setState({
      ...EMPTYPIZZA
    })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          topping={this.state.topping}
          size={this.state.size}
          vegetarian={this.state.vegetarian}
          handleFormChange={this.handleChange}
          handleFormSubmit={this.handleSubmit}
        />
        <PizzaList pizzas={this.state.pizzas} onClickEdit={this.handleClickEdit} />
      </Fragment>
    );
  }
}

export default App;
