import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../details/Button/Button'

const Registration = () => {
  const { handleSubmit, errors, register } = useForm()

  const newCustomer = {
    firstName: 'Customer',
    lastName: 'Newone',
    login: 'Customer',
    email: 'customer@gmail.com',
    password: '1111111',
    telephone: '+380630000000',
    gender: 'male',
    avatarUrl: 'img/customers/023648.png',
    isAdmin: true,
    enabled: true
  }

  const onSubmit = (data) => {
    console.log(data)
    // delete data.confirm
    // data.login = data.email
    // data.enabled = true
    // data.isAdmin = false
    // console.log(data)
    fetch('http://localhost:5000/api/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch((err) => {
      console.log(err)
    })
  }

  onSubmit(newCustomer)

  return (
    <form className="registration-form">
      <label className="registration-form__label">
        first name
        <input
          name="firstName"
          className="registration-form__input"
          ref={register({
            required: 'Your first name is required',
            pattern: {
              value: /[A-Za-z]/,
              message: 'Please enter a correct first name',
            },
          })}
          type="text"
          placeholder="Your first name"
        />
      </label>
      {errors.name?.message && (
        <p className="registration-form__error">{errors.name?.message}</p>
      )}
      <label className="registration-form__label">
        second name
        <input
          name="lastName"
          className="registration-form__input"
          ref={register({
            required: 'Your second name is required',
            pattern: {
              value: /[A-Za-z]/,
              message: 'Please enter a correct second name',
            },
          })}
          type="text"
          placeholder="Your second name"
        />
      </label>
      {errors.secondName?.message && (
        <p className="registration-form__error">{errors.secondName?.message}</p>
      )}
      <label className="registration-form__label">
        email address
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
        password
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
      <label className="registration-form__label registration-form__label_confirm">
        <input
          name="confirm"
          className="registration-form__input"
          type="password"
          placeholder="Confirm password"
          ref={register({
            validate: {
              confirm: (value) =>
                document.getElementsByName('password')[0].value === value,
            },
          })}
        />
      </label>

      {errors.confirm?.type === 'confirm' && (
        <p className="registration-form__error">Your passwords don't match</p>
      )}
      <Button type="submit" text="register" isLight size26357 fz18 mrt85 />
    </form>
  )
}

export default Registration
