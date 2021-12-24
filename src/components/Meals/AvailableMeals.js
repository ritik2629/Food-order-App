import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken-Biryani",
    description: "Finest chicken Biryani...",
    price: 150.99,
  },
  {
    id: "m2",
    name: "Paneer Chilli",
    description: "it is a popular Indo-Chinese dish...",
    price: 129.5,
  },
  {
    id: "m3",
    name: "Chicken-Roll",
    description: " it is a delectable North Indian recipe...",
    price: 79.99,
  },
  {
    id: "m4",
    name: " Veg-Biryani",
    description: "Healthy...and green...",
    price: 129.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meals) => (
    <MealItem
      key={meals.id}
      id={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
