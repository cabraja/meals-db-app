import React from "react";

export const TransformMeals = (data) => {
  const result = data.meals.map((item) => {
    const { idMeal, strMeal, strMealThumb } = item;
    return {
      id: idMeal,
      name: strMeal,
      image: strMealThumb,
    };
  });

  return result;
};

export const TransformSingleMeal = (data) => {
  const { idMeal, strMeal, strCategory, strArea, strInstructions } =
    data.meals[0];

  const result = {
    id: idMeal,
    name: strMeal,
    category: strCategory,
    area: strArea,
    instructions: strInstructions,
  };

  let ingridients = [];

  for (const [key, value] of Object.entries(data.meals[0])) {
    if (key.includes("strIngredient") && value) {
      ingridients.push({ name: value });
    }
  }

  let current = 0;
  for (const [key, value] of Object.entries(data.meals[0])) {
    if (key.includes("strMeasure") && value) {
      ingridients[current].measure = value;
      current++;
    }
  }
  result.ingridients = ingridients;
  return result;
};
