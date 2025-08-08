import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'
import EmployeeAbout from './pages/EmployeeAbout'
import CompanyAbout from './pages/CompanyAbout'
import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />           {/* Kök url'ye gittiğinde home'u çalıştır demek */}
        <Route path='/about' element={<About />}>
          <Route path='employee' element={<EmployeeAbout/>} />
          <Route path='company' element={<CompanyAbout/>} />
        </Route>
        <Route path='/products' element={<Products />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />{/* Product.jsx de butona tıklayınca bu url ye geliriz geldiğinde ProductDETAİLSİ Gösterir*/}
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFoundPage />} />   {/* Eğer url'deki adresle bir eşleşme olmazsa NotFoundPage'i göster */}
      </Routes>
    </div>
  )
}

export default App
