import React from "react";
import Counter from "./components/Counter/Counter";
import Dropdown from "./components/Dropdown/Dropdown";

const App = () => {
  return (
    <>
    <h1>State of Component</h1>
      <Counter initialValue={1234}/>
      <Dropdown/>
    </>
  );
};

export default App;
