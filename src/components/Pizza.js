import React from "react"

const Pizza = ({ pizza, onClickEdit }) => {
  const { topping, size, vegetarian } = pizza

  const handleClick = () => {
    onClickEdit(pizza)
  }

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={handleClick}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
