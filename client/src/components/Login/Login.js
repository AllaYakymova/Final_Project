import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../details/Button/Button'
import axios from 'axios'

const Login = () => {
  const { handleSubmit, errors, register } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    const userData = data
    fetch('http://localhost:5000/api/customers/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((loginResult) => {
        return console.log('success', userData)
      })
      .catch((err) => {
        return console.log(err)
      })
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
      <p className="registration-form__logIn-text">
        Please enter your account details to log in
      </p>
      <label className="registration-form__label">
        <input
          name="email"
          className="registration-form__input"
          ref={register({
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              message: 'Please enter a valid email',
            },
          })}
          type="text"
          placeholder="E-mail"
        />
      </label>
      {errors.email?.message && (
        <p className="registration-form__error">{errors.email?.message}</p>
      )}
      <label className="registration-form__label">
        <input
          name="password"
          className="registration-form__input"
          ref={register({
            required: 'Password is required',
            minLength: { value: 6, message: 'Password is too short' },
          })}
          type="password"
          placeholder="Password"
        />
      </label>
      {errors.password?.message && (
        <p className="registration-form__error">{errors.password?.message}</p>
      )}
      <label className="registration-form__checkbox-wrapper">
        Keep me signed in
        <input type="checkbox" className="registration-form__checkbox" />
        <span className="registration-form__checkbox_customized"></span>
      </label>
      <Button type="submit" text="log in" isLight size26357 fz18 mrt85 />
    </form>
  )
}

export default Login
