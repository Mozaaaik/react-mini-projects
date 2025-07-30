import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    console.log('Her zaman çalışır')
  })

  useEffect(() => {
    console.log('İlk render edildiğinde çalışır')
  }, [])

  useEffect(() => {
    console.log('İlk render edildiğinde ve firstName her değiştiğinde çalışır')
  }, [firstName])

  useEffect(() => {
    console.log('İlk render edildiğinde ve firstName her değiştiğinde çalışır')
  }, [lastName])

  return (
    <>
      <div>
        <button onClick={() => { setFirstName('Kaan') }}>Adı Değiştir</button>
        <button onClick={() => { setLastName('Ayhan') }}>Soyadı Değiştir</button>
      </div>   
    </>
  )
}

export default App
