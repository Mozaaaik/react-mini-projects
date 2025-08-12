import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}> {/* Redux'un tüm projede kullaılabilmesi için sarıyoruz */}
    <App />
  </Provider>,
)
