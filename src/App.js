import React from "react";
import Pokedex from "./components/Pokedex";
import Header from "./components/Header";

function App() {
  return (
    <div className="container-fluid App">
      <Header />
      <Pokedex />
    </div>
  );
}

export default App;
