import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component { 


  renderPizzas = () => {
    const {pizzaList, editPizza} = this.props 

    return pizzaList.map(pizza => <Pizza key={pizza.id} pizzaInfo={pizza} editPizza={editPizza}/>)
  }
  


  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.renderPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
