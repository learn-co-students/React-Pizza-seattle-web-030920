import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state={
    pizzas:[],
    selectedPizza:"",
    showForm: false
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(res =>  res.json())
    .then(data => { 
      this.setState({
        pizzas: data,
      })
    })
  }

  setSelectedPizza=(pizza)=>{
    this.setState({selectedPizza: pizza, showForm:true})
  }

  onChange=(event)=>{
    const value=event.target.value
    if (event.target.type==="radio"){
      const boo= value==="Vegetarian"? true:false
      this.setState(prev=> ({selectedPizza: {...prev.selectedPizza, vegetarian: boo}}))
    }
    else if (event.target.type==="text"){
      this.setState(prev=> ({selectedPizza: {...prev.selectedPizza, topping: value}}))
    }
    else {
      this.setState(prev=> ({selectedPizza: {...prev.selectedPizza, size: value}}))
    }
  }

  onSubmit=()=>{
    fetch(`http://localhost:3000/pizzas/${this.state.selectedPizza.id}`, {
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
        {this.state.showForm? <PizzaForm onSubmit={this.onSubmit} selectedPizza={this.state.selectedPizza} handleChange={this.onChange}/>:null}
        <PizzaList selectedPizza={this.setSelectedPizza} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
