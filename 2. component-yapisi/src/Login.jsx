import React from 'react'

function Login() {
    return ( // Reactta return tek bir root(kök) vermek zorunda
        <>
            <div>
                <p>Kullanıcı adınız</p>
                <input type='text' />

            </div>

            <div> 
                <p>Şifreniz</p>
                <input type='text' />
            </div>

            <button>Giriş Yap</button>
        </>
    )
}

export default Login