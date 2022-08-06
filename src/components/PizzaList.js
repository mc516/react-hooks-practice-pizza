import React, { useState, useEffect } from "react";
import Pizza from "./Pizza";

function PizzaList( {setSelectPizza} ) {
  const [pizzaList, setPizzaList] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/pizzas`)
    .then(res => res.json())
    .then(data => setPizzaList(data))
  }, [])


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          //render Pizza here
          pizzaList.map(pizza => { return <Pizza key={pizza.topping} pizzaInfo={pizza} setSelectPizza={setSelectPizza}/>})
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
