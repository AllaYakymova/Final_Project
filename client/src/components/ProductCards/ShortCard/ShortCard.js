import React from 'react'
import CardConstructor from '../CardConstructor'
import { Link } from 'react-router-dom'

const ShortCard = ({ product }) => {
  const route = '/categories/' + product._id;

  return (
    <Link to={route}>
      <CardConstructor
        isShort
        image
        product={product}
      />
    </Link>
  )
}

export default ShortCard
