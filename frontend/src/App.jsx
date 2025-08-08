import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageContainer from '../container/PageContainer'
import Header from '../components/Header'
import ProductList from '../components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <PageContainer>
        <Header />
        <ProductList />
      </PageContainer>
    </div>
  )
}

export default App
