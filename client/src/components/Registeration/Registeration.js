import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../details/Button/Button'

const Registration = () => {
  const { handleSubmit, errors, register } = useForm()

  const onSubmit = (data) => {
    delete data.confirm
    console.log(data)
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="registration-form__label">
        first name
        <input
          name="name"
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
          name="secondName"
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
        email adress
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
      <Button type='submit' text="register" isLight size26357 fz18 mrt85 />
    </form>
  )
}

export default Registration
