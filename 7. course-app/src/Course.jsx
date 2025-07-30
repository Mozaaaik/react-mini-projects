import React from 'react'
import './css/Course.css'

function Course({ course }) {
    const { id, title, description, link, image } = course
    

  return (
    <div className='course'>
        <img src={image} width={270} height={150}/>
        <h4 className='course-title'>{title}</h4>
        <p className='course-desc'>{description}</p>
        <div className='course-link'><a href={link}>Satın almak için</a> </div>
    </div>
  ) 
}

export default Course