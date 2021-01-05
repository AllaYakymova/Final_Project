import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import CartPage from '../pages/CartPage/CartPage'
import CategoryPage from '../pages/CategoryPage/CategoryPage'

const AppRoutes = () => {
  return (
    <Switch>
      <Redirect exact from='/' to='/categories' />
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
