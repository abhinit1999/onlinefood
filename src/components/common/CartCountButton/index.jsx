import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
const  CartCountButton = ({cartCout}) => {
  const history = useNavigate();
  return (
    <div className='btnCartCount' onClick={()=> history('/cart')}>
      <div className="count">{cartCout>=100 ? '99+':cartCout}</div>
    <i className="fa fa-shopping-cart"></i>
    </div>
  )
}

export default  CartCountButton;