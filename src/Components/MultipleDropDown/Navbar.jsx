import React from 'react'
import MenuItems from './MenuItems';
import { menuItemsData } from './MenuItemsData';
import '../MultipleDropDown/Drop.css'

function Navbar() {
    const depthlevel = 0;
  return (
    <nav className="main-nav">
            <ul className="menus">
                {menuItemsData.map((menu,index)=>{
                    return(
                        <MenuItems items={menu} key={index}  depthlevel={depthlevel}/>
                    );
                })}
            
            </ul>
        </nav>
  )
}


export default Navbar