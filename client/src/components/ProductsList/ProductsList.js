import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ShortCard from '../ProductCards/ShortCard/ShortCard'
import PropTypes from 'prop-types'
import { productsCatalog, productsPerPage, currentPage, currentProducts } from '../../redux/selectors'
import { setCurrentProducts } from '../../redux/paginationSlice'
// import Pagination from '../Pagination/Pagination'

const ProductsList = () => {
  const products = useSelector(productsCatalog);
  // const status = useSelector(store => store.products.status);
  const prodsPerPage = useSelector(productsPerPage);
  const current = useSelector(currentPage);
  const currentProds = useSelector(currentProducts);
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
    dispatch(setCurrentProducts(prods));
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
