import React, { useState } from 'react'
import '../css/Header.css'
import { SlBasket } from "react-icons/sl"
import { IoMoonSharp } from "react-icons/io5"
import { FiSun } from "react-icons/fi"
import logoMoon from '../src/images/logoMoon.png'
import logoSun from '../src/images/logoSun.png'

function Header() {
  const [theme, setTheme] = useState(false)

  const changeTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = !prevTheme;
      const root = document.getElementById('root')

      if (newTheme) {
        root.style.backgroundColor = "black"
        root.style.color = "#fff"
      } else {
        root.style.backgroundColor = "#fff"
        root.style.color = "black"
      }

      return newTheme
    });
  }

  return (
    <div className='my-header'>
      <div className='flex-row'>
        <img className="logo" src={theme ? logoMoon : logoSun} alt="Shopverse Logo" />
        <p className='logo-text'>Shopverse</p>
      </div>

      <div className='flex-row'>
        <input className='search-input' type='text' placeholder='Bir şeyler ara' />
        <div>
          {theme
            ? <FiSun className='icon' onClick={changeTheme} />
            : <IoMoonSharp className='icon' onClick={changeTheme} />}
          <SlBasket className='icon' />
        </div>
      </div>
    </div>
  )
}

export default Header
