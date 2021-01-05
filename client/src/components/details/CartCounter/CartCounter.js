import React from 'react'

const CartCounter = ({incrementHandler, decrementHandler, count}) => {
  const number = (count >= 0 ? count : 1)
  const counter = (
      <div className="counter">
        <span onClick={decrementHandler}>-</span>
        <span className="counter__scoreboard">{number}</span>
        <span onClick={incrementHandler}>+</span>
      </div>)

  return (
    <>
      {counter}
    </>
  )
}

export default CartCounter