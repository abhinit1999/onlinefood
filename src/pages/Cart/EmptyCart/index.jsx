import React from 'react'
import './style.css';
// import emptyLogo from './l.webp';
import emptyImg from './emptyImg.jpg';
import { useNavigate } from 'react-router-dom';


const EmptyCart = () => {
    const history = useNavigate();
  return (
    <div className='emptyCart'>
        <img src={emptyImg} alt="emptyCart" />
    <button onClick={()=>history('/')}> <i className="fas fa-long-arrow-alt-left"></i> Shop Now</button>
    </div>
  )
}

export default EmptyCart;