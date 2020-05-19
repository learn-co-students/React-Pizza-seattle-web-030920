import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList' 
class App extends Component {

  state = {
    pizzas: [],
    currPizza: {},
    checked: '',
  }

  componentDidMount(){
    this.fetchMenu()
  }

  fetchMenu = () => {
    fetch(`http://localhost:3000/pizzas`)
    .then(res => res.json())
    .then(pizzaList => this.setState({pizzas: pizzaList, currPizza: {}}))
    
  }
  
  editPizza = (pizza)=>{
    console.log(pizza, 'in edit pizza')
    this.setState({currPizza: pizza})
  }

  submitPizza = () =>{
   
    const {currPizza} = this.state

    console.log('in submit pizza', currPizza)

    let leMethod = "" 
    let pizzaID = '' 
    if(currPizza.id){
      leMethod="PATCH"
      pizzaID = `/${currPizza.id}`
    } else {
      leMethod="POST"
    }
    if (!currPizza.size){currPizza.size = "Small"}
    
    fetch(`http://localhost:3000/pizzas${pizzaID}`, {
      method: leMethod,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(currPizza)
    })
    .then(res => res.json())
    .then(pizza => this.fetchMenu())
    
    
  }

  handleChecked = (value)=> {
    this.setState(prev => ({currPizza: {...prev.currPizza, vegetarian: value}, checked: value}))
  }

  handleChange = (value)=>{
    console.log(value)
    if (['Small','Medium','Large'].includes(value)){
      this.setState(prev => ({currPizza: {...prev.currPizza, size: value}}))
    } else {
      this.setState(prev => ({currPizza: {...prev.currPizza, topping: value}}))
    }
  }

  render() {
    const {pizzas, currPizza, checked} = this.state 
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={currPizza} checked={checked} submitPizza={this.submitPizza} handleChecked={this.handleChecked} handleChange={this.handleChange}/>
        <PizzaList pizzaList={pizzas} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
