import React from 'react'
import CardConstructor from '../CardConstructor'

const CartCard = ({product}) => {
  // let number = 1
  // const [count, setCount] = useState(1)
  const count = 1
  const total = product.price * count

  const closerMobile = <div className="closer cart__closer" onClick={() => console.log('closer-little')} />
  const closerDesktop = <div className="card__subtext_cart cart__closer-m-l" onClick={() => console.log('closer-text')}>Remove from basket</div>

  return (
    <>
      <CardConstructor
        total={total}
        isCart={true}
        image={true}
        product={product}
      />
      {closerMobile}
      {closerDesktop}
    </>
  )
}

export default CartCard