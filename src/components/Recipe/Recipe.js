import React from "react";
import "./Recipe.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingridient) => (
          <li>{ingridient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories.toFixed()}</p>
      <img className="img" src={image}></img>
    </div>
  );
};
export default Recipe;
