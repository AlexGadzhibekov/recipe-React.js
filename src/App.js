import React from "react";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Recipes from "./components/Recipes/Recipes";

function App() {
  const [query, setQuery] = useState("chicken");

  return (
    <div className="App">
      <Form setQuery={setQuery} />
      <Recipes query={query} />
    </div>
  );
}

export default App;
