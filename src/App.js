import React from "react";
import CocktailList from "./components/CocktailList";

import Header from "./components/Header";
import "./App.css";
const App = () => {
  return (
    <div style={{ backgroundColor: "#ffe1e1", height: "100%" }}>
      <Header />
      <CocktailList />
    </div>
  );
};

export default App;
