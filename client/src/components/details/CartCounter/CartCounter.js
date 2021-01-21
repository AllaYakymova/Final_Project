import React from 'react'

const CartCounter = ({incrementHandler, decrementHandler, count}) => {

  const number = (count >= 0 ? count : 1)
  const counter = (
      <div className="cart-counter">
        <span onClick={decrementHandler}>-</span>
        <span className="cart-counter__scoreboard">{number}</span>
        <span onClick={incrementHandler}>+</span>
      </div>)

  return (
    <>
      {counter}
    </>
  )
}

export default CartCounter
