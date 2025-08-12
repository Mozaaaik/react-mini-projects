import './App.css'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle'

function App() {

  const { count, increase, decrease } = useCounter()

  const { open, change } = useToggle()


  return (
    <div>

      { open && <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>Kutu</div> }
      <button onClick={change}>{open ? 'Gizle' : 'Göster'}</button>

      <div>{ count }</div>
      <button onClick={increase}>Arttır</button>
      <button onClick={decrease}>Azalt</button>

    </div>
  )
}

export default App
