import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Button from '../details/Button/Button'
import FavIcon from '../details/icons/FavoriteIcon'
import CartCounter from '../details/CartCounter/CartCounter'
import { useSelector } from 'react-redux'
import { productsCatalog } from '../../redux/selectors'

const CardConstructor = ({ product, isShort, isDetail, isCart, image, buyBtn, favorite, total }) => {
  const products = useSelector(productsCatalog)
  const [size, setSize] = useState('')

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
  const findSameProds = useCallback(name => products.filter(item => item.name === name), [products])

  // size iterator
  const sizeIterator = useCallback(() => {
    const sameProds = findSameProds(product.itemNo)
    const iterItems = sameProds.map(item => {
      return (
        <li key={item._id + item.itemNo} className='card__iterator_item'>
          <Button onClick={() => setSize(item.size)} isIterSize text={item.size}/> ////
        </li>)
    })
    return (
      <ul className='card__iterator_wrap'>
        {iterItems}
      </ul>
    )
  }, [product, findSameProds])

  // color iterator
  const colorCircle = (color, text) => (<>
    <div className='button_iterator_color' style={{ backgroundColor: color }}/>
    <p className='button_iterator_text'>{text}</p></>)

  const colorIterator = useCallback(() => {
    const sameProds = findSameProds(product.name)
    console.log(product.itemNo, sameProds)
    const iterItems = sameProds.map(item => {
      const route = '/categories/' + item._id
      return (
        <li key={item._id + item.name} className='card__iterator_item'>
          <Link to={route}>
            <Button onClick={() => {}} isIterColor text={colorCircle(item.cssStyles, item.color)}/>
          </Link>
        </li>)
    })
    return (
      <ul className='card__iterator_wrap'>
        {iterItems}
      </ul>
    )
  }, [product, findSameProds])

  const description = <p className={cardText}>{product.oneMoreCustomParam.description}</p>
  const favButton = (favorite && <Button text={<FavIcon/>} isBlack size5557/>)
  const buyButton = (buyBtn && <Button text="Add to basket" onClick={() => {}} isBlack size26357 fz18/>)

  const titleBlock = <div className='detail__info-wrap detail__info-wrap_mobile'>{name}{price}{code}</div>

  const mobilePhotoBlock = (<div className={cardInfoWrap}>
    {productImage}{titleBlock}</div>)

  // for Cart
  const counter = (isCart && <CartCounter/>)
  const cartInfoArr = [
    {
      title: 'Price:',
      value: product.currentPrice,
    },
    {
      title: 'Color:',
      value: 'chosenColor',
    },
    {
      title: 'Size:',
      value: 'chosenSize',
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
    <div className={cardTitle}>{total} &#36;</div>
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
