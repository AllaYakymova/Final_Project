import React from 'react'
import classNames from 'classnames';
import Button from '../details/Button/Button'
import FavIcon from '../details/icons/FavoriteIcon'
import CartCounter from '../details/CartCounter/CartCounter'

const CardConstructor = ({ product, isShort, isDetail, isCart, image, buyBtn, favorite, total }) => {
  const cardTitle = classNames('card__title', {
    card__title_short: isShort,
    card__title_detail: isDetail,
    card__title_cart: isCart
  })
  const cardPrice = classNames('card__price', {
    card__price_short: isShort,
    card__price_detail: isDetail,
    card__price_cart: isCart
  })
  const cardImage = classNames('card__img', {
    card__img_short: isShort,
    card__img_detail: isDetail,
    card__img_cart: isCart
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
    card_cart: isCart
  })
  const cardInfoWrap = classNames({
    card__info_wrap_detail: isDetail,
    card__info_wrap_cart: isCart
  })

  // General used constants
  const name = <p className={cardTitle}>{product.name}</p>
  const price = <span className={cardPrice}>{product.currentPrice} &#36;</span>
  const code = <p className={cardSubText}>REF: {product.id}</p>
  const productImage = (image && <img className={cardImage} src={product.imageUrls[0]} alt={product.name} />)

  // For detailed product card
  // const colors = product.color.map(color => {
  //   return (
  //     <li key={product.code + product.price}>
  //       <div className="card__palette" style={{backgroundColor: {color}}} />
  //       <p>{color}</p>
  //     </li>
  //   )
  // })
  // const sizes = product.size.map(size => {
  //   return (
  //     <li key={product.code + product.name}>
  //       <p>{size}</p>
  //     </li>
  //   )
  // })
  // const polette = (<div><span>Color</span><ul>{colors}</ul></div>)
  // const sizeList = (<div><span>Size</span><ul>{sizes}</ul></div>)
  const favButton = (favorite && <Button text={<FavIcon />} />)
  const buyButton = (buyBtn && <Button text="Add to basket" onClick={() => {}} />)

  // for Cart
  const counter = (isCart && <CartCounter />)
  const cartInfoArr = [
    {title: 'Price:', value: product.currentPrice},
    {title: 'Color:', value: 'chosenColor'},
    {title: 'Size:', value: 'chosenSize'},
    {title: 'Quantity:', value: counter}]

  const list = cartInfoArr.map(item => {
    return (
      <li key={product.code + item.value} className={'order_' + cartInfoArr.indexOf(item) + ' cart__info-item'}>
        <div className={cardText}>{item.title}</div>
        <div className={cardText}>{item.value}</div>
      </li>)
  })

  const sum = (isCart && <div className='cart__info-item'><div className={cardTitle}>Total:</div><div className={cardTitle}>{total} &#36;</div></div>)

  const cardInfo = () => {
    if (isShort) {
      return (
        <>
          {name}
          {price}
        </>
      )
    } else if (isDetail) {
      return (
        <>{name}{code}{price}

          <div className={cardWrap}>{buyButton}{favButton}</div>
        </>
      )
    } else if (isCart) {
      return (
        <>
          {name}
          {code}
          <ul className='cart__info_flex-wrap'>
            {list}
          </ul>
          {sum}
        </>
      )
    }
  }
  const card = (
    <>
      {productImage}
      <div className={cardInfoWrap}>
        {cardInfo()}
      </div>
    </>
  )

  return (
    <>
      {card}
    </>
  )
}

export default CardConstructor
