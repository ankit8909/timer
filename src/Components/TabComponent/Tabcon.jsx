import React from "react";
// import '../TabComponent/Tab.css'
import "../TabComponent/Tab.css";

function Tabcon({ foodData }) {
  return (
    <div className="tab-container">
      <div className="tab-content">
        {foodData.map((meal) => (
          <div key={meal} className="mydiv">
            <img src={meal.image} alt="" />
            <p className="pr"> {meal.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabcon;
