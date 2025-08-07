import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from './redux/userSlice'
import User from './redux/User'

function UserList() {
    const dispatch = useDispatch() // Dispatch fonksiyonları yakalıyor

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const { users } = useSelector((store) => store.user) // store.user yaptığımızda (user: userReducer) buraya gideriz userReducer da 
    console.log('AAA', users)               // userSlice'ın içerisindeki onun bağlı olduğu slice ın içindeki state'i bize geriye döner yani initialState'i

  return (
    <div>
        { // users listesi doluysa demek. 
            users && users.map((user) => (
                <User key={user.id} user={user}/>
            ))
        }
    </div>
  )
}

export default UserList