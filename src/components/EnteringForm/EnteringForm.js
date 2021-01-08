import React, { useState } from 'react'
import classNames from 'classnames'
import Login from '../Login/Login'
import Registeration from '../Registeration/Registeration'

const EnteringForm = () => {
  const [isRegistered, setIsRegistered] = useState(false)

  return (
    <div className="form-wrapper">
      <div className="registration-form__headers-wrapper">
        <h6
          onClick={(e) => {
            setIsRegistered(false)
          }}
          className={classNames(
            'registration-form__header',
            isRegistered ? null : 'registration-form__header_active'
          )}
        >
          Login
        </h6>
        <h6
          onClick={(e) => {
            setIsRegistered(true)
          }}
          className={classNames(
            'registration-form__header',

            isRegistered ? 'registration-form__header_active' : null
          )}
        >
          Registration
        </h6>
      </div>

      {isRegistered ? <Registeration /> : <Login />}
    </div>
  )
}

export default EnteringForm
