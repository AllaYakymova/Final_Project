import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import ShortCard from '../ProductCards/ShortCard/ShortCard'
import PropTypes from 'prop-types'
import { productsCatalog } from '../../redux/selectors'

const ProductsList = () => {
  const products = useSelector(productsCatalog);
  const menProd = products.filter(item => item.categories === 'men') //

  const getUniqueList = useCallback(() => {
    const itemNo = menProd.map(item => item.itemNo);
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
  }, [products, menProd]);

  const uniqueList = getUniqueList();

  const list = uniqueList.map(product => {
    return (
        <li key={product._id} className="card card_short">
          <ShortCard product={product} />
        </li>)
  });

  return (
      <>
        <ul className="cards-wrap">
          {list}
        </ul>
      </>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

export default ProductsList
