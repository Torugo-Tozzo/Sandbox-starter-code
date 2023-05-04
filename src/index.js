import React from "react";
import ReactDOM from "react-dom";

var name = "Vitim";
var number = 2312;

var currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>Minhas Comidas</h1>
    <ul>
      <li>Strogonoff</li>
      <li>Abacaxi</li>
      <li>Torta Holandesa</li>
    </ul>
    <h2>
      Olá {name}, numero {number}
    </h2>
    <p>Created by {name}</p>
    <p>&copy; {currentYear}.</p>
  </div>,
  document.getElementById("root")
);
