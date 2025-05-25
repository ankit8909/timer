import React, { act, useState } from "react";
import Tabcon from "./Tabcon";
import '../TabComponent/Tab.css'

function TabButton({ foodData , setActive, active}) {
    

  return <div>
    <div className="tab-header">
        {foodData.map((item,index)=>(
            <li key={item.food}  className={active===item.food ? "color tab-button": "discolor tab-button"} onClick={()=>setActive(item.food)}>
            {item.food}
            </li>
            
           
        ))}
    </div>

    
  </div>;
}

export default TabButton;
