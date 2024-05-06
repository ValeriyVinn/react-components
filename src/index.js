import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import './index.css';



// React
const root = ReactDOM.createRoot(document.querySelector("#root"));
const h1 = React.createElement("h1", {id: 1, className:"title", children: ["Hello world"]});
root.render(h1)

