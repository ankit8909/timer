import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'

function CustomInput({ value, onClick }) {
  return (
    <div className="input-group">
      <input type="text" className="form-control" value={value}  onClick={onClick} readOnly />
      <div className="input-group-append">
        <span className="input-group-text">
          <FaCalendarAlt />
        </span>
      </div>
    </div>
  );
}

function Datepicker() {
  const [selectedDate, setDate] = useState(null);
  return (
    <div>
      <label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setDate(date)}
          customInput={<CustomInput />}
        />
      </label>
    </div>
  );
}

export default Datepicker;
