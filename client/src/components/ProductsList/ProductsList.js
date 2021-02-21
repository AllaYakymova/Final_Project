import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShortCard from '../ProductCards/ShortCard/ShortCard'
import PropTypes from 'prop-types'
import { getCurrentPage, getFilteredProducts, getProductsPerPage } from '../../redux/selectors/products/selectors'
import actionsWithProducts from '../../redux/actions/products'
// import Pagination from '../Pagination/Pagination'

const ProductsList = () => {
  const prodsPerPage = useSelector(getProductsPerPage)
  const currentPage = useSelector(getCurrentPage)
  const currentProds = useSelector(getFilteredProducts('men'))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionsWithProducts.setCurrentProducts(currentProds))
  }, [currentProds, prodsPerPage, currentPage, dispatch])

  const list = currentProds.map(product => {
    return (
      <li key={product._id} className="card card_short">
        <ShortCard product={product}/>
      </li>)
  })

  // const pagination = (status === 'succeeded' && <Pagination filteredProd={filteredProd}/>);
  // console.log(pagination)

  return (
    <div>
      <ul className="cards-wrap">
        {list}
      </ul>
    </div>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

export default ProductsList
