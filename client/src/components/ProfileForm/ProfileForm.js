import React, { useState, Fragment } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../details/Button/Button'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

const ProfileForm = () => {
  const { handleSubmit, errors, register } = useForm()
  const [selectedDate, handleDateChange] = useState(new Date())

  const onSubmit = (data) => console.log(data)

  const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value)
    if (!phoneNumber) {
      return value
    }
    const formatedPhone = phoneNumber.formatInternational()
    console.log(formatedPhone)
    return formatedPhone
  }

  return (
    <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="profile-form__label profile-form__label_mr-t">
        <div className="profile-form__warning">
          email adress
          <span className="profile-form__warning-text">
            All fields required
          </span>
        </div>
        <input
          name="email"
          className="profile-form__input"
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
        <p className="profile-form__error">{errors.email?.message}</p>
      )}
      <label className="profile-form__label">
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
        <p className="profile-form__error">{errors.name?.message}</p>
      )}
      <label className="profile-form__label">
        second name
        <input
          name="secondName"
          className="profile-form__input"
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
        <p className="profile-form__error">{errors.secondName?.message}</p>
      )}
      <label className="profile-form__label profile-form__label_no-star">
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
          onChange={(e) => {
            normalizePhoneNumber(e.target.value)
          }}
        />
      </label>
      {errors.phone?.message && (
        <p className="profile-form__error">{errors.phone?.message}</p>
      )}
      <div className="profile-form__gender-wrapper">
        <label className="profile-form__gender-label">
          <input
            className="profile-form__checkbox"
            type="radio"
            name="gender"
            value="female"
            ref={register({
              required: 'Your gender is required',
            })}
          />
          <span className="profile-form__checkbox_new"></span>
          Female
        </label>
        <label className="profile-form__gender-label">
          <input
            className="profile-form__checkbox"
            type="radio"
            name="gender"
            value="male"
            ref={register({
              required: 'Your gender is required',
            })}
          />
          <span className="profile-form__checkbox_new"></span>
          Male
        </label>
      </div>
      {errors.gender?.message && (
        <p className="profile-form__error">{errors.gender?.message}</p>
      )}
      <label className="profile-form__label profile-form__label_no-star">
        birthday
        <input
          className="profile-form__input profile-form__input_birthday"
          type="date"
          name="birthday"
          min="1950-01-01"
          max="2021-01-01"
          ref={register({
            required: 'Your birthday is required',
          })}
        />
      </label>
      {errors.birthday?.message && (
        <p className="profile-form__error">{errors.birthday?.message}</p>
      )}
      <Button type="submit" text="save" size26957 isBlack fz24 mrrauto mrt85 />
    </form>
  )
}

export default ProfileForm
