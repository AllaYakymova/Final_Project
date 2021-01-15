import React from 'react'
import CardConstructor from '../CardConstructor'

const CartCard = ({product}) => {
  const count = 1
  const total = product.currentPrice * count

  const closerMobile = <div className="closer cart__closer" onClick={() => console.log('closer-little')} />
  const closerDesktop = <div className="card__subtext_cart cart__closer-m-l" onClick={() => console.log('closer-text')}>Remove from basket</div>

  return (
    <>
      <CardConstructor
        total={total}
        isCart
        image
        product={product}
      />
      {closerMobile}
      {closerDesktop}
    </>
  )
}

export default CartCard
