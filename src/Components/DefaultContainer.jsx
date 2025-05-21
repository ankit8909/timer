import React, { useEffect, useRef, useState } from "react";
import "../Components/Default.css";

function DefaultContainer() {
  const [inpVal, setinpVal] = useState(new Array(4).fill(""));
  const [inpArr, setinpArr] = useState(inpVal);

  const refs = [useRef(), useRef(), useRef(), useRef()];

  const handleInput = (event, index) => {
    const valui = event.target.value;
    if (!Number(valui)) return;

    const copyAr = [...inpArr];
    copyAr[index] = valui;
    setinpArr(copyAr);

    if (index < inpArr.length - 1) {
      refs[index + 1].current.focus();
    }
  };
  console.log("this is inp===>", inpArr);

  const handleDown = (event, index) => {
    console.log("ye h code==>", event.keyCode);
    if (event.keyCode === 8) {
      const copyAr = [...inpArr];
      copyAr[index] = "";
      setinpArr(copyAr);

      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }
  };

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  return (
    <div className="container1">
      {inpArr.map((cv, index) => {
        return (
          <input
            type="text"
            value={inpArr[index]}
            maxLength="1"
            key={index}
            onChange={(event) => handleInput(event, index)}
            ref={refs[index]}
            onKeyDown={(event) => handleDown(event, index)}
          />
        );
      })}
    </div>
  );
}

export default DefaultContainer;
