import React, { useCallback } from 'react'
import CardConstructor from '../CardConstructor'
import actionsWithCart from '../../../redux/actions/cart'
import { useDispatch, useSelector } from 'react-redux'
import { getLocalCart } from '../../../redux/selectors/cart'

const CartCard = ({product, number, prodSum}) => {
  const cartLocal = useSelector(getLocalCart);
  const dispatch = useDispatch();
  const total = product.currentPrice * number

  const closerMobile = <div className="closer cart__closer" onClick={() => console.log('closer-little')} />
  const closerDesktop = <div className="card__subtext_cart cart__closer-m-l" onClick={() => console.log('closer-text')}>Remove from basket</div>

  // for Cart
  const decrement = useCallback(() => {
    const prodArr = cartLocal.filter(item => item.product === product._id);
    const prod = { ...prodArr[0] };
    let newCart;
    if (prod.cartQuantity > 0) {
      prod.cartQuantity = prod.cartQuantity - 1;
      newCart = cartLocal.map(item => item.product === product._id ? prod : item)
    } else if (prod.cartQuantity === 0) {
      newCart = cartLocal;
    }
    dispatch(actionsWithCart.reduceProductInCart(newCart));
  }, [cartLocal, product, dispatch]);

  const increment = useCallback(() => {
    const prodArr = cartLocal.filter(item => item.product === product._id)
    const prod = {...prodArr[0]};
    prod.cartQuantity = prod.cartQuantity + 1;
    const newCart = cartLocal.map(item => {
      if (item.product === product._id) {
        return prod
      } else {
        return item
      }
    })
    dispatch(actionsWithCart.increaseProductInCart(newCart));
  }, [cartLocal, product, dispatch]);

  return (
    <>
      <CardConstructor
        total={total}
        number={number}
        prodSum={prodSum}
        isCart
        image
        product={product}
        incrementHandler={increment}
        decrementHandler={decrement}
      />
      {closerMobile}
      {closerDesktop}
    </>
  )
}

export default CartCard
