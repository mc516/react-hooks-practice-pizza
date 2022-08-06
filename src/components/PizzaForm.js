import React from "react";

function PizzaForm( {selectPizza, editSelectPizza, onEditPizza} ) {
  const {id, topping="Pizza Topping", 
    size, vegetarian} = selectPizza

  function handleEditTopping(e) {
    editSelectPizza({...selectPizza,
      [e.target.name]: e.target.value,
    })
  }

  console.log(selectPizza)

 function handleFormSubmit(e) {
  e.preventDefault();
  fetch(`http://localhost:3001/pizzas/${id}`, {
    method:'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(selectPizza)
  })
  .then(res => res.json())
  .then(UpdatedPizza => onEditPizza(UpdatedPizza))
  
 }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleEditTopping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={handleEditTopping}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="true"
              onChange={handleEditTopping}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="false"
              onChange={handleEditTopping}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
