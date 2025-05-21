import React, { useEffect, useState } from "react";
import "../Components/Pagination.css";

function Pagination() {
  const [data, setdata] = useState([]);
  const [pageNo, setpageNo] = useState(1);
  const getImage = async () => {
    const myData = await fetch(
      `https://picsum.photos/v2/list?page=${pageNo}&limit=5`
    );
    const jsonData = await myData.json();
    setdata(jsonData);
  };

  const nextButton = Array.from({ length: 1 }, (_, index) => pageNo + index);

  const prevButton = Array.from({ length: 2 }, (_, index) => pageNo - 1 - index)
    .filter((value) => value > 0)
    .reverse();

  const mergeArr = [...prevButton, ...nextButton];
  console.log(mergeArr);

  const handlePrev = () => {
    if (pageNo > 1) setpageNo(pageNo - 1);
  };

  const handleNext = () => {
    setpageNo(pageNo + 1);
  };
  useEffect(() => {
    getImage();
  }, [pageNo]);
  return (
    <div>
      <div className="box">
        {data.map((currentImage, index) => {
          return (
            <div className="image-container">
              <img key={index} src={currentImage.download_url} alt="" />
            </div>
          );
        })}
      </div>

      <div className="pgination">
        {pageNo > 1 ? <button onClick={handlePrev}>Prev</button> : ""}
        {mergeArr.map((cv, index) => {
          return <button onClick={() => setpageNo(cv)}> {cv} </button>;
        })}
      <button onClick={handleNext}>Next</button>

      </div>

    </div>
  );
}

export default Pagination;
