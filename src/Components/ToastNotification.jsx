import React, { useState } from "react";
import "../Components/ToastNotification.css";

function ToastNotification() {
  const [toast, setToast] = useState([]);

  const showToast = (message, type) => {
    const id = new Date().getTime();
    const newToast = [...toast, { id, message, type }];
    setToast(newToast);
    console.log(toast);
    setTimeout(() => handleToast(id), 5000);
  };

  const handleToast = (id) => {
    setToast((prevToast) => {
      const filterArry = prevToast.filter((toast) => {
        return toast.id !== id;
      });
      return filterArry;
    });
    console.log(toast);
  };

  return (
    <div className="toast-container-">
      <div className="toast-container">
        {toast.map(({ id, message, type }) => {
          return (
            <div key={id} className={`toast ${type}`}>
              {message} <span onClick={() => handleToast(id)}>X</span>
            </div>
          );
        })}

        <></>
      </div>
      <div className="btn-container">
        <button
          className="toast-btn"
          onClick={() => showToast("Success", "success")}
        >
          Success Test
        </button>
        <button
          onClick={() => showToast("information", "info")}
          className="toast-btn"
        >
          Info Test
        </button>
        <button
          onClick={() => showToast("warning", "warning")}
          className="toast-btn"
        >
          Warning Test
        </button>
        <button
          onClick={() => showToast("error", "error")}
          className="toast-btn"
        >
          Danger Toast
        </button>
      </div>
    </div>
  );
}

export default ToastNotification;
