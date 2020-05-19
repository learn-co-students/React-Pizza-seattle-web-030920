import React from "react"

const Pizza = ({pizzaInfo, editPizza}) => {
  const {id, size, topping, vegetarian} = pizzaInfo

  const handleClick = () => {
    editPizza(pizzaInfo)
  }
  


  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian}</td>
      <td><button type="button" className="btn btn-primary" onClick={handleClick}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
