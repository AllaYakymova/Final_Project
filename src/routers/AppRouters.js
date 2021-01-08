import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProfileForm from '../components/ProfileForm/ProfileForm'

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/profile" component={ProfileForm} />
      <Route exact path="/wishlist" render={() => <h1>wishlist</h1>} />
      <Route exact path="/history" render={() => <h1>history</h1>} />
      <Route exact path="/adress" render={() => <h1>adress</h1>} />
      <Route exact path="/" />
    </Switch>
  )
}
export default AppRoutes
