import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Button from '../details/Button/Button'
import FavIcon from '../details/icons/FavoriteIcon'
import CartCounter from '../details/CartCounter/CartCounter'
import { useDispatch, useSelector } from 'react-redux'
import { productsCatalog } from '../../redux/selectors'
import { addProductToCart, reduceProductInCart } from '../../redux/cartSlice/index'

const CardConstructor = ({ product, number, prodSum, isShort, isDetail, isCart, image, buyBtn, favorite, total, ...props }) => {
  const products = useSelector(productsCatalog);
  const cart = useSelector(store => store.cart.cart);
  // const cartSum = useSelector(store => store.cart.cartSum).toFixed(2);
  const dispatch = useDispatch();
  const [size, setSize] = useState('');
  const [id, setId] = useState('');

  const cardTitle = classNames('card__title', {
    card__title_short: isShort,
    card__title_detail: isDetail,
    card__title_cart: isCart,
  })
  const cardPrice = classNames('card__price', {
    card__price_short: isShort,
    card__price_detail: isDetail,
    card__price_cart: isCart,
  })
  const cardImage = classNames('card__img', {
    card__img_short: isShort,
    card__img_detail: isDetail,
    card__img_cart: isCart,
  })
  const cardText = classNames('card__text', {
    card__text_short: isShort,
    card__text_detail: isDetail,
    card__text_cart: isCart,
  })
  const cardSubText = classNames({
    card__subtext_detail: isDetail,
    card__subtext_cart: isCart,
  })
  const cardWrap = classNames('card', {
    card_short: isShort,
    card_detail: isDetail,
    card_cart: isCart,
  })
  const cardInfoWrap = classNames({
    card__info_wrap_detail: isDetail,
    card__info_wrap_cart: isCart,
  })

  // General used constants
  const name = <p className={cardTitle}>{product.name}</p>
  const price = <span className={cardPrice}>{product.currentPrice} &#36;</span>
  const code = <p className={cardSubText}>REF: {product.itemNo}</p>
  const productImage = (image && <img className={cardImage} src={product.imageUrls[0]} alt={product.name}/>)

  // For detailed product card
  const findSameProds = name => products.filter(item => item.name === name)

  // size iterator
  const sizeIterator = () => {
    const sameProds = products.filter(item => item.name === product.name && item.color === product.color)
    const iterItems = sameProds.map(item => {
      return (
        <li key={item._id + item.itemNo} className='card__iterator_item'>
          <Button onClick={() => {
            console.log(item.size, item._id)
            setSize(item.size)
            setId(item._id)
          }} isIterSize text={item.size}/>
        </li>)
    })
    return (
      <ul className='card__iterator_wrap'>
        {iterItems}
      </ul>
    )
  }

  // color iterator
  const colorCircle = (color, text) => (<>
    <div className='button_iterator_color' style={{ backgroundColor: color }}/>
    <p className='button_iterator_text'>{text}</p></>)

  const colorIterator = () => {
    const sameProds = findSameProds(product.name);
    const colors = sameProds.map(item => item.color);
    const uniqueSet = new Set(colors)
    const uniqueColors = [...uniqueSet];
    let arr = [];
    uniqueColors.forEach(color => {
      const res = sameProds.find(item => item.color === color)
      arr = [...arr, res]
    })
    const iterItems = arr.map(item => {
      const route = '/categories/' + item._id
      // const col = item.color.toString();
      // const col1 = item.color.charAt(0).toLowerCase() + item.color.slice(1);
      // console.log(col)
      return (
        <li key={item._id + item.name} className='card__iterator_item'>
          <Link to={route}>
            <Button isIterColor text={colorCircle(item.cssStyles, item.color)} {...props}/>
          </Link>
        </li>)
    })
    return (
      <ul className='card__iterator_wrap'>
        {iterItems}
      </ul>
    )
  }

  const addToCartHandler = async (e) => {
    e.preventDefault();
    const item = {
      itemNo: product.itemNo,
      product: id,
      size: size,
      cartQuantity: 1
    }
    const newCart = [...cart, item]
    await dispatch(addProductToCart(newCart));
    // await dispatch(createCart(cart));
  };

  const description = <p className={cardText}>{product.oneMoreCustomParam.description}</p>
  const favButton = (favorite && <Button text={<FavIcon/>} isBlack size5557/>)
  const buyButton = (buyBtn && <Button text="Add to basket" onClick={addToCartHandler} isBlack size26357 fz18/>)
  const titleBlock = <div className='detail__info-wrap detail__info-wrap_mobile'>{name}{price}{code}</div>
  const mobilePhotoBlock = (<div className={cardInfoWrap}>{productImage}{titleBlock}</div>)

  // for Cart
  const decrementHandler = useCallback(() => {
    const prodArr = cart.filter(item => item.product === product._id);
    const prod = { ...prodArr[0] };
    let newCart;
    if (prod.cartQuantity > 0) {
      prod.cartQuantity = prod.cartQuantity - 1;
      console.log(prod.cartQuantity)
      newCart = cart.map(item => item.product === product._id ? prod : item)
    } else if (prod.cartQuantity === 0) {
      newCart = cart;
    }
    dispatch(reduceProductInCart(newCart));
  }, [cart, product, dispatch]);

  const incrementHandler = useCallback(() => {
    const prodArr = cart.filter(item => item.product === product._id)
    const prod = {...prodArr[0]};
    prod.cartQuantity = prod.cartQuantity + 1;
    const newCart = cart.map(item => item.product === product._id ? prod : item)
    console.log(prod.cartQuantity, newCart)
    dispatch(addProductToCart(newCart));
  }, [cart, product, dispatch]);

  // amount of the product in cart
  // const cartProductAmount = () => {
  //   const prod = cart.filter(item => item.product === product._id)
  //   console.log(prod.cartQuantity)
  //   return prod.cartQuantity;
  // }
  // const [count, setCount] = useState(cartProductAmount());
  // const decrementHandler = useCallback(() => {
  //   setCount(count > 0 ? count - 1 : 0);
  //   const prod = cart.filter(item => item.product === product._id)
  //   prod.cartQuantity = prod.cartQuantity - 1;
  //   console.log(prod.cartQuantity) //
  //   const newCart = cart.map(item => item.product === product._id ? prod : item)
  //   console.log(newCart)
  //   const sum = count === 0 ? 0 : product.currentPrice;
  //   dispatch(reduceProductInCart({cart: newCart, sum: sum }));
  // }, [setCount, count, product, cart, dispatch]);
  //
  // const incrementHandler = useCallback(() => {
  //   setCount(count + 1);
  //   const prod = cart.filter(item => item.product === product._id)
  //   prod.cartQuantity = prod.cartQuantity + 1;
  //   const newCart = cart.map(item => item.product === product._id ? prod : item)
  //   console.log(newCart)
  //   dispatch(addProductToCart({item: newCart._id, sum: product.currentPrice}));
  // }, [setCount, count, product, dispatch]);

  const counter = (isCart && <CartCounter decrementHandler={decrementHandler} incrementHandler={incrementHandler} number={number} {...props}/>)
  const cartInfoArr = [
    {
      title: 'Price:',
      value: product.currentPrice,
    },
    {
      title: 'Color:',
      value: product.color,
    },
    {
      title: 'Size:',
      value: product.size,
    },
    {
      title: 'Quantity:',
      value: counter,
    }]

  const list = cartInfoArr.map(item => {
    return (
      <li key={product.code + item.value} className={'order_' + cartInfoArr.indexOf(item) + ' cart__info-item'}>
        <div className={cardText}>{item.title}</div>
        <div className={cardText}>{item.value}</div>
      </li>)
  })

  const sum = (isCart && <div className='cart__info-item'>
    <div className={cardTitle}>Total:</div>
    <div className={cardTitle}>{+prodSum} &#36;</div>
  </div>)

  const cardInfo = () => {
    if (isShort) {
      return (
        <div className={cardInfoWrap}>
          {productImage}
          {name}
          {price}
        </div>
      )
    } else if (isDetail) {
      return (
        <>
          {mobilePhotoBlock}
          <div className={cardInfoWrap}>
            <div className='detail__info-wrap detail__info-wrap_desktop'>{name}{price}{code}</div>
            <h3 className='card__subtitle_detail'>Colors</h3>
            {colorIterator()}
            <h3 className='card__subtitle_detail'>Size</h3>
            {sizeIterator()}
            <div className='card__buttons_wrap'>{buyButton}{favButton}</div>
            <h3 className='card__subtitle_detail'>Details</h3>
            {description}
          </div>
        </>
      )
    } else if (isCart) {
      return (
        <>
          {productImage}
          <div className={cardInfoWrap}>
            {name}
            {code}
            <ul className='cart__info_flex-wrap'>
              {list}
            </ul>
            {sum}
          </div>
        </>
      )
    }
  }
  const card = (
    <div className={cardWrap}>
      {cardInfo()}
    </div>
  )

  return (
    <>
      {card}
    </>
  )
}

export default CardConstructor
