import React from 'react'
import Navbar from './Navbar'
import '../MultipleDropDown/Drop.css'


function Header() {
  return (
     <header>
            <div className="nav-area">
                <a href="/#" className="logo">Frontend Paathshala</a>
                <Navbar/>
            </div>
        </header>
  )
}

export default Header