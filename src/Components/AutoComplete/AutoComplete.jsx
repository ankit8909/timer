import React, { useState } from "react";
import ResultContainer from "./ResultContainer";
import "../AutoComplete/Autocomplete.css";
import DisplayComp from "./DisplayComp";

function AutoComplete({ productData }) {
  const [searchValue, setsearchValue] = useState("");
  const [filterdArr, setfilterdArr] = useState([]);
  //2nd work display work
  const [productObj, setproductObj] = useState([]);
  console.log(filterdArr);

  const clickhandler = (selectedVal) => {
    setsearchValue(selectedVal.title); //ele
    setfilterdArr([]);
    setproductObj(selectedVal);

  };

  console.log("productobj-----", productObj);
  console.log("filtered array ----->", filterdArr);
  const searchHandler = (searchValue) => {
    let searchArr = [];
    if (productData && productData.length) {
      searchArr = productData.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    setfilterdArr(searchArr);
  };

  const changeHandler = (e) => {
    searchHandler(e.target.value);
    setsearchValue(e.target.value);
  };

  return (
    <div className="searchbox">
      <input
        type="text"
        placeholder="Search Product"
        value={searchValue}
        onChange={changeHandler}
      />

      {filterdArr.length ? (
        <>
          <ResultContainer
            filteredArr={filterdArr}
            clickhandler={clickhandler}
          />
        </>
      ) : (
        ""
      )}

      {Object.values(productObj).length ? (
        <>
          
          {/* step-5 data present in display component */}
          <DisplayComp productObj={productObj} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default AutoComplete;
