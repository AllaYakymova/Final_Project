import React, { useState } from 'react'
import { usePaymentInputs } from 'react-payment-inputs'
import { useForm } from 'react-hook-form'
import mastercardImg from '../details/icons/mastercard.png'
import visaImg from '../details/icons/visa.png'
import americanExpressImg from '../details/icons/americanExpress.jpg'
import Button from '../details/Button/Button'

const PaymentForm = () => {
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs()

  const { handleSubmit, errors, register } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  // const [values, setValues] = useState({
  //   cardNumber: '',
  //   cardHolder: '',
  //   expiryDate: '',
  // })
  //
  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   const form = e.target.parentNode.parentNode
  //   const errors = document.querySelector('.registration-form__error')
  //   console.log(e.target.closest('.registration-form__error'))
  //   // if(e.target.closest('.registration-form__error'))
  //   // if (form.contains(errors)) {
  //   //   setValues({ ...values, [name]: '' })
  //   // } else {
  //   //   setValues({ ...values, [name]: value })
  //   // }
  // }

  const onBlur = (e) => {
    e.target.setAttribute('name', 'cardNumber')
    e.target.setAttribute('ref', register)
    console.log(e.target)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
      <h4 className="payment-form__header">
        Please select your payment method
      </h4>
      <p className="payment-form__total-price">
        Total payment amount &#36;1260
      </p>
      <div className="payment-form__payment-method-wrapper">
        <img
          className="payment-form__payment-method-option"
          src={mastercardImg}
          alt="mastercard"
        />
        <img
          className="payment-form__payment-method-option"
          src={visaImg}
          alt="visa"
        />
        <img
          className="payment-form__payment-method-option"
          src={americanExpressImg}
          alt="americanExpress"
        />
      </div>
      <label className="payment-form__label">
        Card Number
        <input
          className="payment-form__input payment-form__input_cardNumber"
          {...getCardNumberProps({ onBlur: onBlur })}
        />
        {meta.error && meta.isTouched && (
          <p className="registration-form__error">
            {meta.erroredInputs.cardNumber}
          </p>
        )}
      </label>
      <label className="payment-form__label">
        Card Holder Name
        <input
          name="cardHolder"
          className="payment-form__input payment-form__input_cardHolder"
        />
      </label>
      <label className="payment-form__label">
        Card Expiry Date
        <input
          name="expiryDate"
          className="payment-form__input payment-form__input_expiry-date"
          {...getExpiryDateProps({ onBlur: onBlur })}
        />
        {meta.error && meta.isTouched && (
          <p className="registration-form__error">
            {meta.erroredInputs.expiryDate}
          </p>
        )}
      </label>
      <label className="payment-form__label payment-form__label_cvc">
        <div>
          CVC/CVV/CID
          <input
            className="payment-form__input payment-form__input_cvv"
            {...getCVCProps()}
          />
        </div>
        <a
          className="payment-form__what-is-cvc"
          href="https://en.wikipedia.org/wiki/CVC_Capital_Partners"
        >
          What is CVC/CVV/CID?
        </a>
        {meta.error && meta.isTouched && (
          <p className="registration-form__error">{meta.erroredInputs.cvc}</p>
        )}
      </label>
      <Button type="submit" text="pay" fz18 size26957 isBlack mrt55 />
    </form>
  )
}

export default PaymentForm
