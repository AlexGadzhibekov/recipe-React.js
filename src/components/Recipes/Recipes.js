import { useState } from "react";
import { useEffect } from "react";
import Recipe from "../Recipe/Recipe";
import "./Recipes.css";
export default function Recipes({ query }) {
  const APP_ID = "8e509527";
  const APP_KEY = "342cbda6741c12c5057973c7e1b03bcd";
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&colories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  return (
    <div className="recipes">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}
