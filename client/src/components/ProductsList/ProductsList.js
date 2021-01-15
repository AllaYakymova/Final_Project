import React from 'react'
import { useSelector } from 'react-redux'
import ShortCard from '../ProductCards/ShortCard/ShortCard'
import Proptypes, { object } from 'prop-types'

const ProductsList = () => {
  const products = useSelector(store => store.products.products)

  const list = products.map(product => {
    return (
        <li key={product._id} className="card card_short">
          <ShortCard product={product} />
        </li>)
  });

  return (
      <>
        <ul className="cards-wrap">
          {list}
        </ul>
      </>
  )
}

ProductsList.propTypes = {
  products: Proptypes.arrayOf(object),
}

export default ProductsList
