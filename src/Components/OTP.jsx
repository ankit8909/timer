 import React, { useEffect, useRef, useState } from "react";
import "../Components/OTp.css";

function OTP() {
  const [inputs, setInputs] = useState(new Array(4).fill(""));
  const [inputArr, setInputArr] = useState(inputs);

  console.log("ye hai length ",inputArr.length);
  console.log(inputArr);

  const refs = [useRef(), useRef(), useRef(), useRef()];

  const handleInput = (event, index) => {
    console.log(event.target.value);
    const val = event.target.value;

    if (!Number(val)) return;

    const copyArray = [...inputArr];

    copyArray[index] = val;
    setInputArr(copyArray);
    console.log("ye HAI inp", inputArr)

    // refs[index + 1].current.focus();    initial-1

    if (index < inputArr.length - 1) {
      refs[index + 1].current.focus();
    }
  };

  const handleKey = (event, index) => {
    console.log(event.keyCode);
    if (event.keyCode === 8) {
      const copyArray = [...inputArr];
      copyArray[index] = "";
      setInputArr(copyArray);
      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }

    if (index < inputArr.length - 1) {
      if (event.keyCode === 39) {
        refs[index + 1].current.focus();
      }
    }

    if (index > 0) {
      if (event.keyCode === 37) {
        refs[index - 1].current.focus();
      }
    }
  };

  const handlePaste = (event) => {
    const data = event.clipboardData.getData("text");
    const dataArray = data.split("");
    setInputArr(dataArray);

    refs[inputArr.length - 1].current.focus();
  };

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  return (
    <div className="container">
      <h1>OTP fields</h1>
      {inputs.map((curValue, index) => {
        return (
          <input
            maxLength="1"
            key={index}
            type="text"
            onChange={(event) => handleInput(event, index)}
            ref={refs[index]}
            onKeyDown={(event) => handleKey(event, index)}
            value={inputArr[index]}
            onPaste={(event) => handlePaste(event)}
          />
        );
      })}
    </div>
  );
}

export default OTP;
