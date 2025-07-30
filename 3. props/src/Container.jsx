import React from 'react'

function Container(props) {

  const {children} = props

  return (
    <div>

     <div>Container</div>
     {children}
    
    </div>
   
  )
}

export default Container