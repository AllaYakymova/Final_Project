import React, { useMemo } from 'react'
import DetailCard from '../../components/ProductCards/DetailCard/DetailCard'
import { useSelector } from 'react-redux'
import { getProducts } from '../../redux/selectors/products/selectors'
import Button from '../../components/details/Button/Button'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

const ProductPage = ({ match = {} }) => {
  const products = useSelector(getProducts)
  const {
    params: { product },
  } = match

  const productTarget = useMemo(() => products.find(item => item._id === product), [products, product])

  return (
    <div className="page-wrap container">
      <div className='app'>
        <Link to='/cart'>
          <Button text="Go to cart" isBlack size26346 mrrauto/>
        </Link>
        <Link to='/categories'>
          <Button text="Go to catalog" isBlack size26346 mrrauto/>
        </Link>
        <DetailCard product={productTarget}/>
      </div>
    </div>
  )
}

export default ProductPage

// <div>
// <Link to='/cart'>
//   <Button text="Go to cart" isBlack size26346 mrrauto/>
// </Link>
// <Link to='/categories'>
//   <Button text="Go to catalog" isBlack size26346 mrrauto/>
// </Link>
// </div>
