import React from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'
import Button from '../../components/details/Button/Button'
import { fetchProducts } from '../../redux/sagas/getProductsSaga'
import { useDispatch } from 'react-redux'

const MainPage = ({ prods }) => {
  const dispatch = useDispatch()

  return (
    <div className="page-wrap">
      <header className="header">
        <Button text="load all products" onClick={() => dispatch(fetchProducts())} />
      </header>
      <div className="main__new" />
      <ProductsList prods={prods} />
      <footer className="footer" />
    </div>
  )
}

export default MainPage
