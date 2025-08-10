import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from '../container/PageContainer'
import Header from '../components/Header'
import RouterConfig from '../config/RouterConfig'
import Loading from '../components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import '../css/Navbar.css'
import { calculateBasket, setDrawer } from '../redux/slice/basketSlice'

function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateBasket())
  }, [products])

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
      </PageContainer>
      <Drawer anchor='right' open={drawer} onClose={() => { dispatch(setDrawer()) }} >
        {
          products.map((product) => {
            return (
              <div className='cart-row' key={product.id} >
                <img src={product.image} alt='Product Not Found!' />
                <p>{product.title} ({product.count})</p>
                <p>{product.price}</p>
                <button className='button-details'>Sil</button>

              </div>
            )
          })
        }
        <div>
          Toplam Tutar: {totalAmount}
        </div>

      </Drawer>
    </div>
  )
}

export default App

{/* RouterConfig -> Home -> ProductList -> Product */ }
{/* RouterConfig -> ProductDetails */ }
