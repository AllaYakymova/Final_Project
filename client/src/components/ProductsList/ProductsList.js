import React from 'react'
import { useSelector } from 'react-redux'
import ShortCard from '../ProductCards/ShortCard/ShortCard'
import Proptypes, { object } from 'prop-types'

const ProductsList = ({ prods }) => {
  // const products = useSelector(store => store.products)

  const list = prods.map(product => {
    return (
        <li key={product.id} className="card card_short">
          <ShortCard product={product} />
        </li>)
  });

  return (
      <div >
        <ul className="cards-wrap">
          {list}
        </ul>
      </div>
  )
}

ProductsList.propTypes = {
  products: Proptypes.arrayOf(object),
}

export default ProductsList
