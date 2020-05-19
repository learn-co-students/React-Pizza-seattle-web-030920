import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  renderPizza = () => {
    const { pizzas, onClickEdit } = this.props
    return pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} onClickEdit={onClickEdit} />)
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
          {this.renderPizza()}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
