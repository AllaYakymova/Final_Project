import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import CartPage from '../pages/CartPage/CartPage'
import CategoryPage from '../pages/CategoryPage/CategoryPage'

const AppRoutes = ({ prods }) => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage prods={prods}/>
      </Route>
      <Route exact path="/categories">
        <CategoryPage />
      </Route>
      <Route exact path="/cart">
        <CartPage />
      </Route>
    </Switch>
  )
};
export default AppRoutes
