import React from "react"

const PizzaForm = ({selectedPizza, handleChange, onSubmit}) => {
  const {topping, size, vegetarian}=selectedPizza
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={(event)=>handleChange(event)} type="text" className="form-control" placeholder="Pizza Topping" value={
              topping
              }/>
        </div>
        <div className="col">
          <select onChange={(event)=>handleChange(event)} value={size} className="form-control">
            <option value="Small">Small </option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={(event)=>handleChange(event)}  className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={(event)=>handleChange(event)}  className="form-check-input" type="radio" value="Not Vegetarian" checked={!vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=>onSubmit()}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
