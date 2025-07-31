import React from 'react'
import '../css/Currency.css'
import { FaArrowRight } from "react-icons/fa";

function Currency() {
  return (
    <div className='currency-div'>

      <div className='dovizYazisi'>
        <h3>DÖVİZ KURU UYGULAMASI</h3>
      </div>

      <div className='kur'>
        <input type='number' className='amount' />

        <select className='from-currency-option'>
          <option>USD</option>
          <option>EUR</option>
          <option>TL</option>
        </select>

        <FaArrowRight className='arrow' />

        <select className='to-currency-option'>
          <option>TL</option>
          <option>EUR</option>
          <option>USD</option>
        </select>

        <input type='number' className='result' />
      </div>

    </div>
  )
}

export default Currency 