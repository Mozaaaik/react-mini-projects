import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let a = 32
    let sonuc = true
    let not1 = 20
    let not2 = 60
    let isimler = [
      'Ali',
      'Yavuz',
      'Kerem'
    ]
  

    return (
      <div>
        {/* <p>a değişkeninin değeri : {a}</p>
        {sonuc ? <p>Ehliyetin var</p> : <p>Ehliyetin yok</p>}
        {
          (not1+not2)/2 >= 30 ? <p>Dersten geçtin</p> : <p>Kaldın</p>
        } */}
        {
          isimler.map((isim, index) => (
            <div style={{                // İlk parantez JSX ikinci parantezi CSS özellikleri olarak kullandık
              backgroundColor : 'orange',
              border : '1px solid black'
            }} key={index}>{isim}</div> // Her seferinde div oluşturulduğundan performansı iyileştirmek adına key kullanabiliriz
          ))
        }

      </div>
    )
}

export default App
