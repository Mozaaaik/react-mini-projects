import { useState } from 'react'
import './App.css'
import Container from './Container.jsx'
import Product from './Product.jsx'

function App() {

  return (
    <>
      <Container>
        <Product productName="Kemer" price={350} />
      </Container>
    </>
  )
}

export default App
