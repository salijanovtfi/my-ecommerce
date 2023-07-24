import React, {useContext} from 'react';
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import './cart.css'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const tottalAmount = getTotalCartAmount();
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>List Of Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} />
          }
        })}
      </div>

      {tottalAmount > 0 ? (
      <div className='checkout'>
        <p>Subtotal: $ {tottalAmount}</p>
        <button onClick={() => navigate("/")}>Cotinue Shopping</button>
        <button> Check out</button>
      </div>
      ) : (
        <h1> Your Cart is Empty</h1>
      )}
    </div>
  )
}


