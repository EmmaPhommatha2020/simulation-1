import React from 'react';


function Product(props) {
  const { name, price, imageurl, productid } = props;
  return (

    <div className="redbox">
      <img className="img" src={imageurl} alt='pic' />
      <div className="content">
        <div className='namePriceContainer'>
          <p>{name}</p>
          <p>${price}</p>
        </div>

        <div className='buttonsContainer'>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Product;