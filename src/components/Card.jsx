import React from 'react'

const Card = (props) => {



  return (
    <div className='card'>
       {props.text} <br />
       {props.data}
    </div>
  )
}

export default Card 