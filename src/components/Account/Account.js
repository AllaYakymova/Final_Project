import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfileForm from '../ProfileForm/ProfileForm'

const Account = () => {
  return (
    <div className="account">
      <h3 className="account__header">My account</h3>
      <div className="account__nav-bar">
        <NavLink
          to="/profile"
          className="account__nav-bar__link"
          activeClassName="account__nav-bar__link_active"
        >
          My profile
        </NavLink>
        <NavLink
          to="wishlist"
          className="account__nav-bar__link"
          activeClassName="account__nav-bar__link_active"
        >
          My wishlist
        </NavLink>
        <NavLink
          to="history"
          className="account__nav-bar__link"
          activeClassName="account__nav-bar__link_active"
        >
          Purchase history
        </NavLink>
        <NavLink
          to="adress"
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
