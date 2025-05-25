import React, { useState } from "react";
import TabButton from "./TabButton";
import Tabcon from "./Tabcon";
import burger from "../assets/burger1.jpeg";
import p1 from "../assets/images (1).jpeg"
import p2 from "../assets/images.jpeg"

function TabComp() {
  const [active, setActive] = useState("All");
  console.log("ye hai fast food ka name", active);

  const foodData = [
    {
      food: "Pizza",
      fact: "Pizza is a popular fast food item. Fast food pizza chains like Domino's, Pizza Hut, and Papa John's are widely known. Many resources offer high-quality images of pizza for various purposes, including advertising and design. ",
      image: p2,
    },

    {
      food: "Burger",
      fact: "fast food HD burgerimage search will likely return high-resolution photos of burgers from fast food chains, often showcasing the details of the burger's ingredients, toppings, and presentation. You might find images of",
      image: burger,
    },

    {
      food: "Pasta",
      fact: "Fast food pasta, also known as quick or takeout pasta, is a convenient and popular meal option that can be found in various fast food restaurants and even at home. It's typically made with pasta, sauces, and often includes",
      image: p1,
    },
  ];
  return (
    <div className="main-container">
      <h1>Choose Your Food</h1>
      <TabButton foodData={foodData}  active={active} setActive={setActive} />
      <Tabcon
        foodData={foodData.filter(
          (item) => active === "All" || active === item.food
        )}
      />
    </div>
  );
}

export default TabComp;
