import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CartPage from '../pages/CartPage/CartPage'
import CategoryPage from '../pages/CategoryPage/CategoryPage'
import ProfileForm from '../components/ProfileForm/ProfileForm'
import EnteringForm from '../components/EnteringForm/EnteringForm'
import QuickOrderForm from '../components/QuickOrderForm/QuickOrderForm'
import Account from '../components/Account/Account'
import PaymentForm from '../components/PaymentForm/PaymentForm'

const AppRoutes = () => {
  return (
    // <Switch>
    <>
      {/* <Redirect exact from="/" to="/categories" /> */}
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
      <Route path="/account">
        <Account />
      </Route>
      <Route path="/account/profile">
        <ProfileForm />
      </Route>
      <Route exact path="/account/wishlist">
        <h1>wishlist</h1>
      </Route>
      <Route exact path="/account/history">
        <h1>history</h1>
      </Route>
      <Route exact path="/account/adress">
        <h1>adress</h1>
      </Route>
    </>
    /* </Switch> */
  )
}
export default AppRoutes
