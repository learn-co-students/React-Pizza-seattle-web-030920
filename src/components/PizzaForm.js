import React from "react"

const PizzaForm = (props) => {
const { editPizza, onHandleChange, onHandleSubmit } = props
const { topping, size, vegetarian } = editPizza
  return(
      <div className="form-row">
        <div className="col-5">
            <input 
              onChange={(e)=>onHandleChange(e)} 
              type="text" 
              className="form-control" 
              placeholder="Pizza Topping" 
              value={topping}
            />
        </div>
        <div className="col">
          <select onChange={(e)=>onHandleChange(e)} value={size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input 
              onChange={(e)=>onHandleChange(e)}
              className="form-check-input" 
              type="radio" 
              value="Vegetarian" 
              checked={vegetarian}
              />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input 
              onChange={(e)=>onHandleChange(e)}
              className="form-check-input" 
              type="radio" 
              value="Not Vegetarian" 
              checked={!vegetarian}
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button 
            onSubmit={(e) => onHandleSubmit(e)} 
            type="submit" 
            className="btn btn-success" 
            onClick={console.log}
          >
            Submit
          </button>
        </div>
      </div>

  )
}

export default PizzaForm
