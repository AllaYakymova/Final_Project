import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ShortCard from '../ProductCards/ShortCard/ShortCard'
import PropTypes from 'prop-types'
import { getProducts, getProductsPerPage, getCurrentPage, getCurrentProducts, getFilteredProducts } from '../../redux/selectors/products/selectors'
// import Pagination from '../Pagination/Pagination'

const ProductsList = () => {
  const products = useSelector(getProducts);
  const prodsPerPage = useSelector(getProductsPerPage);
  const current = useSelector(getCurrentPage);
  // const currentProds = useSelector(getFilteredProducts('men'));
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actionsWithProducts.setCurrentProducts(currentProds));
  }, [prodsPerPage, current, dispatch]);

  const list = products.map(product => {
    return (
        <li key={product._id} className="card card_short">
          <ShortCard product={product} />
        </li>)
  });

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
