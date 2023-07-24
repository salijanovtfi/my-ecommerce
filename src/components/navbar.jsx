import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';

export const Navbar = () => {
  return (

    <div className='navbar'> 
    <div className='logo__block'>
      <h1>RPO TECH</h1>
      <div className='contact__block'>
        <p>Contact number <Link>+998 91 161 51 21</Link></p>
      </div>
    </div>
      <div className='links'>
        <Link to='/'>Shop </Link>
        <Link to='/cart'> <ShoppingCart size={32}/> </Link>
      </div>
    </div>
  )
}


