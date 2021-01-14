import React from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'
import Button from '../../components/details/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchedProducts } from '../../redux/actions/products/index'

const CategoryPage = () => {
  const isLoaded = useSelector(store => store.products.isLoaded)
  const dispatch = useDispatch()

  const list = isLoaded && <ProductsList />

  const loadProds = () => { dispatch(fetchedProducts()) }

  return (
    <>
      <header className="header container">
        <Button text="load all products" onClick={loadProds} isBlack size26346 mrrauto/>
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
