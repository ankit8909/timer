import React from 'react'

function DisplayComp({productObj}) {
  return (
    <div className='displayContainer'>
        <div>
            <h1>  {productObj.title} </h1>
            <h1>  {productObj.brand} </h1>
            <p>  {productObj.description} </p>
            <img src={productObj.image} alt={productObj.image} />
        </div>
    </div>
  )
}

export default DisplayComp