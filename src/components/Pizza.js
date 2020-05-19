import React from "react"

const Pizza = ({pizza, selectedPizza}) => {
  const {topping, size, vegetarian}=pizza
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian? "Yes": "No"}</td>
      <td><button type="button" onClick={()=>selectedPizza(pizza) } className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
