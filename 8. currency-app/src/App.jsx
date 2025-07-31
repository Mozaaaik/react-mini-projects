import { useState } from 'react'
import './App.css'
import Currency from './Components/Currency'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='appCss'>
      <Currency />
    </div>
  )
}

export default App
