import React, { useState } from 'react'
import '../css/Currency.css'
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios'

function Currency() {

  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('TRY')
  const [result, setResult] = useState(0)

  const exchange =  async () => {
    // console.log(amount)
    // console.log(fromCurrency)
    // console.log(toCurrency)

    const URL = `${import.meta.env.VITE_BASE_URL}?apikey=${import.meta.env.VITE_API_KEY}&base_currency=${fromCurrency}`
    const res = await axios.get(URL)
    console.log(res.data.data[toCurrency])

    const result = (res.data.data[toCurrency] * amount).toFixed(2)
    setResult(result)
  }


  return (
    <div className='currency-div'>

      <div className='dovizYazisi'>
        <h3>DÖVİZ KURU UYGULAMASI</h3>
      </div>

      <div className='kur'>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type='number'
          className='amount'
        />

        <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaArrowRight className='arrow' />

        <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
          <option>TRY</option>
          <option>EUR</option>
          <option>USD</option>
        </select>

        <input
          type='number'
          className='result'
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
      </div>

      <div>
        <button
          className='exchange-button'
          onClick={exchange}>
          Çevir
        </button>
      </div>

    </div>
  )
}

export default Currency 