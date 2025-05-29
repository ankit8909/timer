import "./App.css";
import { useEffect, useState } from "react";
import Carusoul from "./Components/Carusoul";
import OTP from "./Components/OTP";
import Pagination from "./Components/Pagination";
import ToastNotification from "./Components/ToastNotification";
import AutoComplete from "./Components/AutoComplete/AutoComplete";
import TimerClock from "./Components/TimerClock/TimerClock";
import DefaultContainer from "./Components/DefaultContainer";

import TabComp from "./Components/TabComponent/TabComp";
import Header from "./Components/MultipleDropDown/Header";
import DatePicker from "./Components/DatePicker/Datepicker";

function App() {
 

  const [productData, setproductData] = useState([]);
  useEffect(() => {
    console.log(productData);

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) =>
        setproductData(
          res.products.map((ele) => ({
            id: ele.id,
            title: ele.title,
            brand: ele.brand,
            description: ele.description,
            image: ele.images[0],
          }))
        )
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* <Carusoul /> */}
      <br />
      {/* <OTP /> */}

      {/* <DefaultContainer /> */}
      <br />
      {/* <Pagination /> */}
      <br />
      {/* <TimerClock /> */}
      <br />
      {/* <ToastNotification /> */}
      {/* <AutoComplete productData={productData} /> */}

      {/* <TabComp /> */}
      <Header />

      <DatePicker />

     

     
    </>
  );
}

export default App;
