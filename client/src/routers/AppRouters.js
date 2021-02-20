import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CartPage from '../pages/CartPage/CartPage'
import CategoryPage from '../pages/CategoryPage/CategoryPage'
import ProfileForm from '../components/ProfileForm/ProfileForm'
import EnteringForm from '../components/EnteringForm/EnteringForm'
import QuickOrderForm from '../components/QuickOrderForm/QuickOrderForm'
import Account from '../components/Account/Account'
import PaymentForm from '../components/PaymentForm/PaymentForm'
import Slider from '../components/Slider/Slider'

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/slider">
        <Slider />
      </Route>
      <Route exact path="/categories">
        <CategoryPage />
      </Route>
      <Route exact path="/cart">
        <CartPage />
      </Route>
      <Route exact path="/enter">
        <EnteringForm />
      </Route>
      <Route exact path="/quickorder">
        <QuickOrderForm />
      </Route>
      <Route exact path="/payment">
        <PaymentForm />
      </Route>
      <Route exact path="/account">
        <Account />
        <ProfileForm />
      </Route>
      <Route exact path="/account/wishlist">
        <Account />
        <h1>wishlist</h1>
      </Route>
      <Route exact path="/account/history">
        <Account />
        <h1>history</h1>
      </Route>
      <Route exact path="/account/adress">
        <Account />
        <h1>adress</h1>
      </Route>
    </Switch>
  )
}
export default AppRoutes
