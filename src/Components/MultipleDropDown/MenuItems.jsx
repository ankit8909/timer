import React, { useState } from 'react'
import '../MultipleDropDown/Drop.css'
import Dropdown from './Dropdown'


function MenuItems({items, depthlevel}) {
    const [dropdown, setDropdown] = useState(false)
    

    console.log("ye h items", items)
  return (
    <li className='menu-items'>
    {items.submenu ? (
        <>
            <button type='button' aria-haspopup="menu" aria-expanded={dropdown ? "true": "false"} 
            onClick={()=>setDropdown((prev)=> !prev)}>
                {items.title} 
                 {depthlevel>0 ? <span>&raquo;</span>:<span className='arrow'></span>}
            </button> 
            <Dropdown submenus={items.submenu}  dropdown={dropdown} depthlevel={depthlevel} />

        </>
    ):(
        <a href="/#"> {items.title}  </a>
    )}
    </li>
  )
}

export default MenuItems