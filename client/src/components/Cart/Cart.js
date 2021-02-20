// import React from 'react'
// import { products, cart } from '../../utilities/utilities'
// import CartCard from '../ProductCards/CartCard/CartCard'
// import { TextField } from '@material-ui/core'
// import Button from '../details/Button/Button'

// const Cart = () => {
//   let totalSum = 0;

//   const cartList = products.map(product => {
//     if (cart.includes(product.id)) {
//       const amount = cart.filter(item => item === product.id).length;
//       const sum = +(amount * product.price);
//       totalSum = totalSum + sum;
//       return (
//         <li key={product.id} className="cart__item">
//           <CartCard product={product} number={amount}/>
//         </li>)
//     }
//   })

//   const cartTotalBlockMobile = (<span className='cart__total-block-mobile'><h2 className="cart__text cart__text-title">SHOPPING BAG TOTAL</h2><div className="cart__total"><form noValidate autoComplete="off" className='mb3'><p className="cart__text_12 mb1">ADD A DISCOUNT CODE</p><TextField id="standard-basic" label="" /></form><div className='cart__info-item'><p className="cart__text cart__text-subtitle">ORDER VALUE:</p><p className="cart__text cart__text-subtitle">{totalSum} &#36;</p></div><div className='cart__info-item'><p className="cart__text cart__text-subtitle">DELIVERY</p><p className="cart__text cart__text-subtitle">free</p></div><div className='cart__info-item'><p className="cart__text cart__text-title">TOTAL</p><p className="cart__text cart__text-title_18">{totalSum} &#36;</p></div><Button text='CHECKOUT' isBlack size26357 fz18 onClick={() => {}}/></div></span>)

//   const cartTotalBlockDesktop = (<div className="cart__total cart__total-block-desktop"><h2 className="cart__text cart__text-title">SHOPPING BAG TOTAL</h2><form noValidate autoComplete="off" className='mb3 cart__total-line'><p className="cart__text_12 mb1 ">ADD A DISCOUNT CODE</p><TextField id="standard-basic" label="" /></form><div className='cart__info-item'><p className="cart__text cart__text-subtitle">ORDER VALUE:</p><p className="cart__text cart__text-subtitle ">{totalSum} &#36;</p></div><div className='cart__info-item'><p className="cart__text cart__text-subtitle">DELIVERY</p><p className="cart__text cart__text-subtitle">free</p></div><div className='cart__info-item'><p className="cart__text cart__text-title">TOTAL</p><p className="cart__text cart__text-title_18">{totalSum} &#36;</p></div><Button text='CHECKOUT' isBlack size26357 fz18 onClick={() => {}}/></div>)

//   const shopButton = (<span className='cart__shop-button'><Button text='KEEP SHOPPING' isBlack size26957 fz18 onClick={() => console.log('test-back')}/></span>)

//   const paginatorLeft = <div><div className="paginator"/></div>

//   return (
//     <div className="cart-wrap">
//       {paginatorLeft}
//       <h3 className="cart__text-title-phone">Shopping bag</h3>
//       {shopButton}
//       <div className="cart">
//         <ul className="cart__items">
//           {cartList}
//         </ul>
//         {cartTotalBlockMobile}
//         {cartTotalBlockDesktop}
//       </div>
//     </div>
//   )
// }

// export default Cart
