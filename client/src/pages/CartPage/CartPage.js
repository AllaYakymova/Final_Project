import React from 'react'
import Cart from '../../components/Cart/Cart'
import { Link } from 'react-router-dom'
import Button from '../../components/details/Button/Button'

const CartPage = () => {
  return (
    <div className='app'>
      <Link to='/categories'>
        <Button text="Go to catalog" isBlack size26346 mrrauto/>
      </Link>
      <Cart/>
    </div>
  )
}

export default CartPage
