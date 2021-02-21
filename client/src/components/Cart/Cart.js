import React, { useCallback, useEffect, useState } from 'react'
import CartCard from '../ProductCards/CartCard/CartCard'
import { TextField } from '@material-ui/core'
import Button from '../details/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getCartSum, getLocalCart } from '../../redux/selectors/cart'
import client from '../../api/client'
import actionsWithCart from '../../redux/actions/cart'
import { Link } from 'react-router-dom'

const Cart = () => {
  const localCart = useSelector(getLocalCart)
  const cartSum = useSelector(getCartSum)
  const [cartAmount, setCartAmount] = useState(localCart.length)
  const [cartProds, setCartProds] = useState([])
  const dispatch = useDispatch()

  const GetCartProducts = () => {
    let cartProducts = []
    localCart.forEach(async (prod) => {
      if (localCart.length >= cartAmount) {
        const response = await client({
          baseURL: `http://localhost:5000/api/products/${prod.itemNo}`,
        })
        const product = response.filter(i => i.size === prod.size)
        cartProducts = [...product, ...cartProducts]
      } else {
        cartProducts = cartProds
      }
      setCartAmount(localCart.length)
      setCartProds(cartProducts)
    })
  }

  useEffect(() => {
    GetCartProducts(localCart)
  }, [localCart.length])

  useEffect(() => {
    const sumArr = localCart.map(item => item.currentPrice * item.cartQuantity)
    let sum = 0
    for (let i = 0; i < sumArr.length; i++) {
      sum += sumArr[i]
    }
    dispatch(actionsWithCart.setCartSum(Math.floor(sum * 100) / 100))
  }, [localCart])

  const cartProductDeleteHandler = useCallback((id, total) => {
    const newCart = localCart.filter(item => item.product !== id)
    const newCartProds = cartProds.filter(item => item._id !== id)
    setCartProds(newCartProds)
    dispatch(actionsWithCart.removeProductFromCart({
      cart: newCart,
      sum: total,
    }))
  }, [localCart, cartProds, dispatch])

  const cartList = useCallback(() => {
    let sum = 0
    if (localCart.length) {
      return cartProds.map(product => {
        const prod = localCart.filter(item => item.product === product._id)
        const amount = prod[0].cartQuantity
        const prodSum = amount * product.currentPrice
        sum = sum + prodSum
        return (
          <li key={product._id} className="cart__item">
            <CartCard product={product} number={amount} prodSum={Math.floor(prodSum * 100) / 100}
                      cartProductDeleteHandler={(id, total) => { cartProductDeleteHandler(id, total) }}/>
          </li>)
      })
    } else {
      return (<h2 style={{ color: 'red' }}>The bag is empty</h2>)
    }
  }, [localCart, cartProds, dispatch])

  const oderButtons = (
    <>
      <Link to="/payment">
        <Button text='CHECKOUT' isBlack size26357 fz18 mrb20/>
      </Link>
      <Link to="/quick_order">
        <Button text='QUICK ORDER' isBlack size26357 fz18 />
      </Link>
    </>
  )

  const cartTotalBlockMobile = (
    <span className='cart__total-block-mobile'><h2 className="cart__text cart__text-title">SHOPPING BAG TOTAL</h2><div
      className="cart__total"><form noValidate autoComplete="off" className='mb3'><p className="cart__text_12 mb1">ADD A DISCOUNT CODE</p><TextField
      id="standard-basic" label=""/></form><div className='cart__info-item'><p
      className="cart__text cart__text-subtitle">ORDER VALUE:</p><p
      className="cart__text cart__text-subtitle">{cartSum} &#36;</p></div><div className='cart__info-item'><p
      className="cart__text cart__text-subtitle">DELIVERY</p><p
      className="cart__text cart__text-subtitle">free</p></div><div className='cart__info-item'><p
      className="cart__text cart__text-title">TOTAL</p><p
      className="cart__text cart__text-title_18">{cartSum} &#36;</p></div>
      {oderButtons}
    </div></span>)

  const cartTotalBlockDesktop = (
    <div className="cart__total cart__total-block-desktop"><h2 className="cart__text cart__text-title">SHOPPING BAG
      TOTAL</h2>
      <form noValidate autoComplete="off" className='mb3 cart__total-line'><p className="cart__text_12 mb1 ">ADD A
        DISCOUNT CODE</p><TextField id="standard-basic" label=""/></form>
      <div className='cart__info-item'><p className="cart__text cart__text-subtitle">ORDER VALUE:</p><p
        className="cart__text cart__text-subtitle ">{cartSum} &#36;</p></div>
      <div className='cart__info-item'><p className="cart__text cart__text-subtitle">DELIVERY</p><p
        className="cart__text cart__text-subtitle">free</p></div>
      <div className='cart__info-item'><p className="cart__text cart__text-title">TOTAL</p><p
        className="cart__text cart__text-title_18">{cartSum} &#36;</p></div>
      {oderButtons}
    </div>)

  return (
    <div className="cart-wrap">
      <h3 className="cart__text-title-phone">Shopping bag</h3>
      <div className="cart">
        <ul className="cart__items">
          {cartList()}
        </ul>
        {cartTotalBlockMobile}
        {cartTotalBlockDesktop}
      </div>
    </div>
  )
}

export default Cart
