import React, { useCallback, useEffect, useState } from 'react'
import CartCard from '../ProductCards/CartCard/CartCard'
import { TextField } from '@material-ui/core'
import Button from '../details/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addProductToCart, reduceProductInCart } from '../../redux/cartSlice'

const Cart = () => {
  const products = useSelector(store => store.products.products)
  const cart = useSelector(store => store.cart.cart)
  const cartSum = useSelector(store => store.cart.cartSum)
  const dispatch = useDispatch();
  const [cartProds, setCartProds] = useState([]);

  const GetCartProducts = (cart) => {
    const fetchData = async (product) => {
      const result = axios.get(`${process.env.REACT_APP_PRODUCTS_API}/${product.itemNo}`);
      return (await result).data;
    }
    let cartProducts = [];
    cart.forEach(prod => {
      fetchData(prod).then(res => {
        const product = res.filter(i => i.size === prod.size);
        cartProducts = [...cartProducts, ...product]
        setCartProds(cartProducts);
      })
    })
  }

  useEffect(() => {
    GetCartProducts(cart);
  }, [cart])

  // amount of the product in cart
  // const cartProductAmount = () => {
  //   const prod = cart.filter(item => item.product === product._id)
  //   console.log(prod.cartQuantity)
  //   return prod.cartQuantity;
  // }

  const decrementHandler = useCallback((product) => {
    const prod = cart.filter(item => item.product === product._id);
    let newCart;
    if (prod.cartQuantity > 0) {
      prod.cartQuantity = prod.cartQuantity - 1;
      newCart = cart.map(item => item.product === product._id ? prod : item)
      console.log(prod.cartQuantity, newCart)
    } else {
      newCart = cart.map(item => item.product === product._id ? 0 : item)
    }
    const sum = prod.cartQuantity === 0 ? 0 : product.currentPrice * prod.cartQuantity;
    dispatch(reduceProductInCart({cart: newCart, sum: sum }));
  }, [cart, dispatch]);

  const incrementHandler = useCallback((product) => {
    const prod = cart.filter(item => item.product === product._id)
    prod.cartQuantity = prod.cartQuantity + 1;
    const newCart = cart.map(item => item.product === product._id ? prod : item)
    console.log(prod.cartQuantity, newCart)
    dispatch(addProductToCart({item: newCart, sum: product.currentPrice}));
  }, [dispatch]);

  const cartList = cartProds.map(product => {
    console.log(cart, product)
    const prod = cart.filter(item => item.product === product._id);
    const amount = prod[0].cartQuantity;
    const prodSum = amount * product.currentPrice;
    return (
      <li key={product.itemNo} className="cart__item">
        <CartCard product={product} decrementHandler={decrementHandler} incrementHandler={incrementHandler} number={amount} prodSum={prodSum}/>
      </li>)
  })

  const cartTotalBlockMobile = (<span className='cart__total-block-mobile'><h2 className="cart__text cart__text-title">SHOPPING BAG TOTAL</h2><div className="cart__total"><form noValidate autoComplete="off" className='mb3'><p className="cart__text_12 mb1">ADD A DISCOUNT CODE</p><TextField id="standard-basic" label="" /></form><div className='cart__info-item'><p className="cart__text cart__text-subtitle">ORDER VALUE:</p><p className="cart__text cart__text-subtitle">{cartSum} &#36;</p></div><div className='cart__info-item'><p className="cart__text cart__text-subtitle">DELIVERY</p><p className="cart__text cart__text-subtitle">free</p></div><div className='cart__info-item'><p className="cart__text cart__text-title">TOTAL</p><p className="cart__text cart__text-title_18">{cartSum} &#36;</p></div><Button text='CHECKOUT' isBlack size26357 fz18 onClick={() => {}}/></div></span>)

  const cartTotalBlockDesktop = (<div className="cart__total cart__total-block-desktop"><h2 className="cart__text cart__text-title">SHOPPING BAG TOTAL</h2><form noValidate autoComplete="off" className='mb3 cart__total-line'><p className="cart__text_12 mb1 ">ADD A DISCOUNT CODE</p><TextField id="standard-basic" label="" /></form><div className='cart__info-item'><p className="cart__text cart__text-subtitle">ORDER VALUE:</p><p className="cart__text cart__text-subtitle ">{cartSum} &#36;</p></div><div className='cart__info-item'><p className="cart__text cart__text-subtitle">DELIVERY</p><p className="cart__text cart__text-subtitle">free</p></div><div className='cart__info-item'><p className="cart__text cart__text-title">TOTAL</p><p className="cart__text cart__text-title_18">{cartSum} &#36;</p></div><Button text='CHECKOUT' isBlack size26357 fz18 onClick={() => {}}/></div>)

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
