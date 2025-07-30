import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [userInfo, setUserInfo] = useState({ username: 'Hasan', password: '12323' })
  const [show, setShow] = useState(true)
  const [count, setCount] = useState(0)

  console.log('component render edildi')

  const arttir = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>{count}</div>

      <div>
        <button onClick={arttir}>
          Arttır
        </button>
      </div>


    </>
  )
}

export default App
