import React from "react";

function Pizza( {pizzaInfo, setSelectPizza} ) {
  const {topping, size, vegetarian} = pizzaInfo

  function handleEditClick() {
    setSelectPizza(pizzaInfo)
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleEditClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
