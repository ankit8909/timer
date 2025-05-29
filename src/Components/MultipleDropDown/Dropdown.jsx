import React from "react";
import "../MultipleDropDown/Drop.css";
import MenuItems from  "../MultipleDropDown/MenuItems"

function Dropdown({ submenus, dropdown, depthlevel }) {
  depthlevel = depthlevel + 1;
  const dropdownClass = depthlevel > 1 ? "dropdown-submenu" : "";
    
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthlevel={depthlevel} />
      ))}
    </ul>
  );
}

export default Dropdown;
