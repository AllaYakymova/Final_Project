import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ShortCard from '../ProductCards/ShortCard/ShortCard'
import PropTypes from 'prop-types'
import { getProducts, getProductsPerPage, getCurrentPage, getCurrentProducts } from '../../redux/selectors/products/selectors'
import actionsWithProducts from '../../redux/actions/products/';
// import Pagination from '../Pagination/Pagination'

const ProductsList = () => {
  const products = useSelector(getProducts);
  const prodsPerPage = useSelector(getProductsPerPage);
  const current = useSelector(getCurrentPage);
  const currentProds = useSelector(getCurrentProducts);
  const dispatch = useDispatch();
  const filteredProd = products.filter(item => item.categories === 'men') //

  const getUniqueList = useCallback(() => {
    const itemNo = filteredProd.map(item => item.itemNo);
    const uniqueSet = new Set(itemNo)
    const uniqueArr = [...uniqueSet];
    let arr = [];
    uniqueArr.forEach((item) => {
      if (arr.indexOf(item) === -1) {
        const res = products.find(prod => prod.itemNo === item)
        arr = [...arr, res]
      }
    })
    return arr
  }, [products, filteredProd]);
  const uniqueList = getUniqueList();

  // setting of what products display
  useEffect(() => {
    const indexOfLastProduct = current * prodsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - prodsPerPage;
    const prods = uniqueList.slice(indexOfFirstProduct, indexOfLastProduct);
    dispatch(actionsWithProducts.setCurrentProducts(prods));
    // console.log(uniqueList);
  }, []);

  // [current, prodsPerPage, uniqueList, dispatch]

  const list = currentProds.map(product => {
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
