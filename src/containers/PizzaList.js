import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  populatePizzas = () => {
    return this.props.pizzas.map(pizza => {
      return <Pizza pizza={pizza} onSelectPizza={this.props.onSelectPizza} key={pizza.id} />
    })
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
            this.populatePizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
