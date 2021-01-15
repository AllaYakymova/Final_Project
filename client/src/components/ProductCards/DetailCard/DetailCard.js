import React from 'react'
import CardConstructor from '../CardConstructor'
import Proptypes from 'prop-types'

const DetailCard = ({ product }) => {
  return (
    <>
      <CardConstructor
        isDetail
        image
        buyBtn
        favorite
        product={product}
      />
    </>
  )
}

// DetailCard.propTypes = {
//   product: Proptypes.shape({
//     _id: Proptypes.string.isRequired,
//     name: Proptypes.string.isRequired,
//     price: Proptypes.number.isRequired,
//     origin: Proptypes.string.isRequired,
//     createdAt: Proptypes.string.isRequired,
//     updatedAt: Proptypes.string.isRequired,
//   }),
// }
export default DetailCard
