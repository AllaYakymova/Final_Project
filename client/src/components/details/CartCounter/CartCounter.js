import React from 'react'

const CartCounter = ({incrementHandler, decrementHandler, number}) => {
  const count = (number >= 0 ? number : 1)
  const counter = (
      <div className="cart-counter">
        <span onClick={decrementHandler}>-</span>
        <span className="cart-counter__scoreboard">{count}</span>
        <span onClick={incrementHandler}>+</span>
      </div>)

  return (
    <>
      {counter}
    </>
  )
}

export default CartCounter
