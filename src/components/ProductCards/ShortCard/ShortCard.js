import React from 'react';
import CardConstructor from '../CardConstructor'
import Proptypes from 'prop-types'

const ShortCard = ({ product }) => {
  return (
    <>
      <CardConstructor
        isShort={true}
        image={true}
        product={product}
      />
    </>
  )
}

ShortCard.propTypes = {
  product: Proptypes.shape({
    id: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    price: Proptypes.number.isRequired,
  })
}

export default ShortCard