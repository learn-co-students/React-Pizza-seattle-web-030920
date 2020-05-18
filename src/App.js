import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const defaultPizzaForm = {
  id: null,
  topping: "",
  size: "Small",
  vegetarian: true
}

class App extends Component {

  state = {
    pizzas: [],
    formPizza: defaultPizzaForm
  }


  onChangeTopping = (change) => {
    this.setState(prevState => {
      return {formPizza: {...prevState.formPizza, topping: change}}
    })
  }

  onChangeSize = (change) => {
    this.setState(prevState => {
      return {formPizza: {...prevState.formPizza, size: change}}
    })
  }

  onChangeVegetarian = (change) => {
    this.setState(prevState => {
      return {formPizza: {...prevState.formPizza, vegetarian: change}}
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(json => this.setState({pizzas: json}))
  }

  onSubmitPizza = () => {
    if (this.state.formPizza.id === null) {
      fetch('http://localhost:3000/pizzas', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(this.state.formPizza)
      })
      .then(res => res.json())
      .then(json => this.setState(prev => {
        return {
          pizzas: [...prev.pizzas, json],
          formPizza: defaultPizzaForm
        }
      }))
    } else {
      fetch(`http://localhost:3000/pizzas/${this.state.formPizza.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(this.state.formPizza)
      })
      .then(res => res.json())
      .then(json => this.setState(prev => {
        let newPizzas = prev.pizzas.filter(pizza => {
          return pizza.id !== json.id
        })
        return {
          pizzas: [...newPizzas, json],
          formPizza: defaultPizzaForm
        }
      }))
    }
  }

  onSelectPizza = (pizza) => {
    this.setState({formPizza: pizza})
  }

  render() {
    const { formPizza, pizzas } = this.state
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          onSubmitPizza={this.onSubmitPizza} 
          formPizza = {formPizza}
          onChangeTopping={this.onChangeTopping}
          onChangeSize={this.onChangeSize}
          onChangeVegetarian={this.onChangeVegetarian}
        />
        <PizzaList onSelectPizza={this.onSelectPizza} pizzas={pizzas} />
      </Fragment>
    );
  }
}

export default App;
