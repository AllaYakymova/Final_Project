import React, { useMemo } from 'react'
import DetailCard from '../../components/ProductCards/DetailCard/DetailCard'
import { useSelector } from 'react-redux'
// import PropTypes from 'prop-types';

const ProductPage = ({ match = {} }) => {
  const products = useSelector(store => store.products.products)

  const {
    params: {product}
  } = match

  const memoProduct = useMemo(() => products.find(item => item._id === product), [products, product])

  return (
      <div className="page-wrap container">
        <DetailCard product={memoProduct} />
      </div>
  )
}

export default ProductPage
