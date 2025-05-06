import React, { useState } from "react";
import "./Carusol.css";
import data from './data.json';
console.log(data)


function Carusoul() {
    const [index, setindex] = useState(0)
    // console.log(data[3].id)


    const handleNext = ()=>{
        setindex(index+1);
    }

    const handlePrev= ()=>{
        setindex(index-1)
    }
  return (
    <div className="container">
      <div className="left-btn" onClick={handlePrev}> {"<"} </div>
      {/* <img src={data[1].download_url} alt="" /> */}
      <img src={data[index].download_url} alt="" />
      <h1>hello</h1>
      <div className="right-btn" onClick={handleNext}>  {">"} </div>

      <div>
      </div>
    </div>
  );
}

export default Carusoul;
