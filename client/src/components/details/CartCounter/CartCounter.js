import React from 'react'
import Button from '../Button/Button'

const CartCounter = ({incrementHandler, decrementHandler, number}) => {
  const count = (number >= 0 ? number : 1)
  const counter = (
      <div className="cart-counter">
        <Button onClick={decrementHandler} text='-' transparent/>
        <span className="cart-counter__scoreboard">{count}</span>
        <Button onClick={incrementHandler} text='+' transparent/>
      </div>)

  return (
    <>
      {counter}
    </>
  )
}

export default CartCounter
