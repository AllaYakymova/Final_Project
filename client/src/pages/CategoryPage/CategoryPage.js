import React, { useEffect } from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'
import Button from '../../components/details/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import actionsWithProducts from '../../redux/actions/products/'
import { Link } from 'react-router-dom'

const CategoryPage = () => {
  const status = useSelector(store => store.products.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionsWithProducts.fetchAllProducts.request())
    dispatch(actionsWithProducts.fetchCatalog.request())
  }, [dispatch])

  const list = (status === 'succeeded' && <ProductsList/>)

  // const loadProds = () => { dispatch(fetchedProducts()) }
  // const loadProds = () => { dispatch(fetchProducts()) }

  return (
    <>
      <header className="header container">
        <Link to='/cart'>
          <Button text="Go to cart" isBlack size26346 mrrauto/>
        </Link>

      </header>
      <div className="page-wrap">
        <div className="sidebar">
          <h1>FILTER SIDEBAR MUST BE HERE</h1>
        </div>
        <div className="main">
          {list}
        </div>
      </div>
    </>
  )
}

export default CategoryPage
