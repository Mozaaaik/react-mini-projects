import React, { useState } from 'react'
import '../css/Header.css'
import { SlBasket } from "react-icons/sl"
import { IoMoonSharp } from "react-icons/io5"
import { FiSun } from "react-icons/fi"
import logoMoon from '../src/images/logoMoon.png'
import logoSun from '../src/images/logoSun.png'
import { useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer } from '../redux/slice/basketSlice'

function Header() {
  const [theme, setTheme] = useState(false)
  const navigate = useNavigate()

  const { products } = useSelector((store) => store.basket)
  const dispatch = useDispatch()

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
        <img className="logo" onClick={() => navigate('/')} src={theme ? logoMoon : logoSun} alt="Shopverse Logo" />
        <h1 style={{ fontFamily: 'Arial' }}>S</h1>
        <p className='logo-text'>hopverse</p>
      </div>

      <div className='flex-row'>
        <input className='search-input' type='text' placeholder='Bir şeyler ara' />
        <div className='flex-row'>
          {theme
            ? <FiSun className='icon' onClick={changeTheme} />
            : <IoMoonSharp className='icon' onClick={changeTheme} />}

          <Badge onClick={() => { dispatch(setDrawer()) }} badgeContent={products.length} color="error">
            <SlBasket className='icon' />
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Header
