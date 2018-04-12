import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
  const { name, price, imageurl, deleteProduct, productid} = props
  return (
    <div className="redbox">
      <img className="img" src={imageurl} alt='pic' />
      <div className="content">
        <div className='namePriceContainer'>
          <p>{name}</p>
          <p>${price}</p>
        </div>
        <div className='buttonsContainer'>
          <button onClick={() => deleteProduct(productid)}>Delete</button>
          <Link to={`/edit/${productid}`}>
          <button >Edit</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product;