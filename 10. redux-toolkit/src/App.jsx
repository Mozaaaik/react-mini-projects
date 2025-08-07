import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice'
import UserList from './UserList'

function App() {

  const dispatch = useDispatch()

  const { value } = useSelector((store) => store.counter) // store reduceri ifade ediyor reducer.counter counterReducer'i ifade eder
  console.log(value)

  return (
    <div>
      <UserList />


      <div>{value}</div>
      <button onClick={() => dispatch(increment())}>Arttır</button> <button onClick={() => dispatch(decrement())}>Azalt</button>
    </div>
  )
}

export default App
