import React from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'
import Button from '../../components/details/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchedProducts } from '../../redux/actions/products/index'
import {fetchProducts} from '../../redux/ProductsSlice'

const CategoryPage = () => {
  const status = useSelector(store => store.products.status)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(fetchProducts())
  //   }
  // }, [status, dispatch])

  const list = (status === 'succeeded' && <ProductsList />)

  // const loadProds = () => { dispatch(fetchedProducts()) }

  const loadProds = () => { dispatch(fetchProducts()) }

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
