import React from "react"

const Pizza = (props) => {
  const { pizza, editPizza } = props
  const {topping, size, vegetarian} = pizza

  const handleClick = (pizza) => {
    editPizza(pizza)
    console.log(vegetarian)
  }
  
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Yes':'No'}</td>
      <td><button onClick={() => handleClick(pizza)}type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
