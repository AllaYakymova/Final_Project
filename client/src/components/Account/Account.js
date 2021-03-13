import React from 'react'
import { NavLink } from 'react-router-dom'

const Account = () => {
  return (
    <div className="account">
      <h3 className="account__header">My account</h3>
      <div className="account__nav-bar">
        <NavLink
          exact
          to="/account"
          className="account__nav-bar__link"
          activeClassName="account__nav-bar__link_active"
        >
          My profile
        </NavLink>
        <NavLink
          exact
          to="/account/wishlist"
          className="account__nav-bar__link"
          activeClassName="account__nav-bar__link_active"
        >
          My wishlist
        </NavLink>
        <NavLink
          exact
          to="/account/history"
          className="account__nav-bar__link"
          activeClassName="account__nav-bar__link_active"
        >
          Purchase history
        </NavLink>
        <NavLink
          exact
          to="/account/adress"
          className="account__nav-bar__link"
          activeClassName="account__nav-bar__link_active"
        >
          Adress book
        </NavLink>
      </div>
    </div>
  )
}

export default Account
