import React from 'react'
import ShortCard from '../ProductCards/ShortCard/ShortCard'
import Proptypes, { object } from 'prop-types'
import {products} from '../../utilities/utilities'

const ProductsList = () => {
  const list = products.map(product => {
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