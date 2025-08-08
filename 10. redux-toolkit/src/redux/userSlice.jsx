import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    loading: false
}

export const getAllUsers = createAsyncThunk('users', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(response.data)
    return response.data
})

export const userList = createSlice({
    name: "user",
    initialState,
    reducers: {}, // HTTP isteği olmaz ise kullanılır
    extraReducers: (builder) => { // HTTP isteklerinde kullanılır

        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload

        }) // Birisi bu fonksiyonu çağrırsa ve başarılı olursa (state, action)... fonks. çalışsın demek şimdi state e koymuş olduğumuz değeri çekeceğiz


    }
})

export const { } = userList.actions
export default userList.reducer

/*
        builder.addCase() belirli bir action type gerçekleştiğine state'i nasıl güncelleyeceğini tanımlar


        createAsyncThunk ile asenkron bir işlem (API isteği vb.) başlattığında Redux Toolkit şu 3 action’ı otomatik oluşturur:

        pending → İstek başladı (yüklenme aşaması)

        fulfilled → İstek başarıyla tamamlandı (başarılı yanıt)

        rejected → İstek hata verdi (başarısız yanıt)

        
        3️⃣ Özet Akış
        dispatch(getAllUsers()) → Redux Toolkit otomatik olarak şu adımları yapar:

        API isteği başarılı → fulfilled action dispatch → (state, action) çalışır → state.users = action.payload

        API isteği hata → rejected action dispatch → (state, action) çalışır → state.loading = false

        💡 Kısaca:
        state → initialState'i gösteriyor

        action → return edilen datayı alıyor içerisine erişmek için payload kullanacağız

        
        action.payload => createAsyncThunk() bu fonk. return edilen değer



*/

/*
        🧠 Ne Oluyor?
        getAllUsers oluşturulurken 'users' etiketi veriyoruz:


        createAsyncThunk('users', async () => {...})
        Redux Toolkit bu etiketten şu type’ları otomatik üretir:

        users/pending

        users/fulfilled

        users/rejected

        builder.addCase(getAllUsers.fulfilled, ...) yazdığında:

        getAllUsers.fulfilled.type aslında "users/fulfilled"’dir.

        Yani “type değeri 'users/fulfilled' olan action gelirse bu kodu çalıştır” demek.


*/