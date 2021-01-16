import React, { useMemo } from 'react'
import DetailCard from '../../components/ProductCards/DetailCard/DetailCard'
import { useSelector } from 'react-redux'
import { productsCatalog } from '../../redux/selectors'
// import PropTypes from 'prop-types';

const ProductPage = ({ match = {} }) => {
  const products = useSelector(productsCatalog)
  const {
    params: {product}
  } = match

  const productTarget = useMemo(() => products.find(item => item._id === product), [products, product]);

  return (
      <div className="page-wrap container">
        <DetailCard product={productTarget} />
      </div>
  )
}

export default ProductPage
