import React from "react"

const Pizza = (props) => {
  const { topping, size, vegetarian } = props.pizza
  const handleClick = () => {
    props.onSelectPizza(props.pizza)
  }
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button onClick={handleClick} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
