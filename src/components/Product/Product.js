import React from 'react';


function Product(props) {
  const { name, price, imageurl, productid } = props;
  return (

    <div className="display">
      <div className="each-box">
        <img src={imageurl} alt='pic' />
        <h2>{name}</h2>
        <p>${price}</p>
      </div>
    </div>

  )
}

export default Product;