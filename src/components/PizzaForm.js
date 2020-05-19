import React from "react"

const PizzaForm = ({pizza, checked, submitPizza, handleChecked, handleChange}) => { 

  const {topping, size, vegetarian, id} = pizza

  const handleToppingChange = (event) => {
    handleChange(event.target.value)
  }
  
  const handleVeg = () => {
    handleChecked(true)
  }

  const handleNonVeg = () => {
    handleChecked(false)
  }
  
  

  const handleSubmit = (event) => {
    event.preventDefault()
    submitPizza()
  }
  

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={handleToppingChange} className="form-control" placeholder="Pizza Topping" value={
                topping ? topping : null 
              }/>
        </div>
        <div className="col">
          <select value={size} onChange={handleToppingChange} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange={handleVeg} type="radio" value="Vegetarian" checked={checked ===true}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={handleNonVeg} type="radio" value="Not Vegetarian" checked={checked === false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
PizzaForm.defaultProps= {
  pizza: {id: null,
  topping: "",
  size: "",
  vegetarian: ""}
}