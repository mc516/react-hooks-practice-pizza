import React, { useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [selectPizza, setSelectPizza] = useState({})

  function onEditPizza(UpdatedPizza) {
    setSelectPizza(UpdatedPizza)
  }

  return (
    <>
      <Header />
      <PizzaForm selectPizza={selectPizza} editSelectPizza={setSelectPizza} onEditPizza={onEditPizza}/>
      <PizzaList setSelectPizza={setSelectPizza}/>
    </>
  );
}

export default App;
