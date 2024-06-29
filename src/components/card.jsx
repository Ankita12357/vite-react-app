import React from 'react'
import "./navbar.css"
import image from '../photo/1.jpg';


const card = (props) => {
  return (
    <div className='cards'>
        <h2>{props.title}</h2>
        <img src={props.img} />
      <p>{props.description}</p>
    </div>
  )
}

export default card
