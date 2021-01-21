import React, { useEffect, useState } from 'react'
import CartCard from '../ProductCards/CartCard/CartCard'
import { TextField } from '@material-ui/core'
import Button from '../details/Button/Button'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Cart = () => {
  const products = useSelector(store => store.products.products)
  const cart = useSelector(store => store.cart.cart)
  const [cartProds, setCartProds] = useState([]);

  const fetchData = async (prod) => {
    const result = axios.get(`${process.env.REACT_APP_PRODUCTS_API}/${prod._id}`);
    return (await result).data
  }
  const GetCartProducts = (cart) => {
    let cartProducts = [];
    cart.forEach(prod => {
      fetchData(prod).then(res => {
        cartProducts = [...cartProducts, res]
        setCartProds(cartProducts)
      })
    })
  }

  useEffect(() => {
    GetCartProducts(cart);
  }, [cart])

  let totalSum = 0;

  const cartList = cartProds.map(product => {
    const amount = cart.filter(item => item === product.itemNo).length;
    const sum = +(amount * product.currentPrice);
    totalSum = totalSum + sum;
    return (
      <li key={product.itemNo} className="cart__item">
        <CartCard product={product} number={amount}/>
      </li>)
  })

  const cartTotalBlockMobile = (<span className='cart__total-block-mobile'><h2 className="cart__text cart__text-title">SHOPPING BAG TOTAL</h2><div className="cart__total"><form noValidate autoComplete="off" className='mb3'><p className="cart__text_12 mb1">ADD A DISCOUNT CODE</p><TextField id="standard-basic" label="" /></form><div className='cart__info-item'><p className="cart__text cart__text-subtitle">ORDER VALUE:</p><p className="cart__text cart__text-subtitle">{totalSum} &#36;</p></div><div className='cart__info-item'><p className="cart__text cart__text-subtitle">DELIVERY</p><p className="cart__text cart__text-subtitle">free</p></div><div className='cart__info-item'><p className="cart__text cart__text-title">TOTAL</p><p className="cart__text cart__text-title_18">{totalSum} &#36;</p></div><Button text='CHECKOUT' isBlack size26357 fz18 onClick={() => {}}/></div></span>)

  const cartTotalBlockDesktop = (<div className="cart__total cart__total-block-desktop"><h2 className="cart__text cart__text-title">SHOPPING BAG TOTAL</h2><form noValidate autoComplete="off" className='mb3 cart__total-line'><p className="cart__text_12 mb1 ">ADD A DISCOUNT CODE</p><TextField id="standard-basic" label="" /></form><div className='cart__info-item'><p className="cart__text cart__text-subtitle">ORDER VALUE:</p><p className="cart__text cart__text-subtitle ">{totalSum} &#36;</p></div><div className='cart__info-item'><p className="cart__text cart__text-subtitle">DELIVERY</p><p className="cart__text cart__text-subtitle">free</p></div><div className='cart__info-item'><p className="cart__text cart__text-title">TOTAL</p><p className="cart__text cart__text-title_18">{totalSum} &#36;</p></div><Button text='CHECKOUT' isBlack size26357 fz18 onClick={() => {}}/></div>)

  const shopButton = (<span className='cart__shop-button'><Button text='KEEP SHOPPING' isBlack size26957 fz18 onClick={() => console.log('test-back')}/></span>)

  const paginatorLeft = <div><div className="paginator"/></div>

  return (
    <div className="cart-wrap">
      <h3 className="cart__text-title-phone">Shopping bag</h3>
      <div className="cart">
        <ul className="cart__items">
          {cartList}
        </ul>
        {cartTotalBlockMobile}
        {cartTotalBlockDesktop}
      </div>
    </div>
  )
}

export default Cart

// {paginatorLeft}
// <h3 className="cart__text-title-phone">Shopping bag</h3>
// {shopButton}
