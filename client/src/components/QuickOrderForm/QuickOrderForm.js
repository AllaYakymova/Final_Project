import React, { useState, Fragment } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../details/Button/Button'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

const QuickOrderForm = () => {
  const { handleSubmit, errors, register } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <form className="quick-order-form" onSubmit={handleSubmit(onSubmit)}>
      <h4 className="quick-order-form__header">Quick Order</h4>
      <label className="profile-form__label quick-order-form__label">
        first name
        <input
          name="name"
          className="profile-form__input"
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
        <p className="profile-form__error quick-order-form__error">
          {errors.name?.message}
        </p>
      )}
      <label className="profile-form__label quick-order-form__label">
        MOBILE PHONE
        <input
          name="phone"
          className="profile-form__input"
          ref={register({
            required: 'Your phone is required',
            minLength: { value: 5, message: 'Please enter a correct phone' },
            pattern: {
              value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
              message: 'Please enter a correct phone',
            },
          })}
          type="tel"
          placeholder="+ 38"
        />
      </label>
      {errors.phone?.message && (
        <p className="profile-form__error quick-order-form__error">
          {errors.phone?.message}
        </p>
      )}
      <Button type="submit" text="contact me" size26957 isBlack fz24 mrt85 />
    </form>
  )
}

export default QuickOrderForm
