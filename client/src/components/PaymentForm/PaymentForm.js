import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import mastercardImg from '../details/icons/mastercard.png'
import visaImg from '../details/icons/visa.png'
import americanExpressImg from '../details/icons/americanExpress.jpg'
import Button from '../details/Button/Button'
import Cleave from 'cleave.js/react'
import Swal from 'sweetalert2'
import Confetti from 'react-confetti'

const PaymentForm = () => {
  const { handleSubmit, errors, register } = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = (data) => {
    delete data.CVC
    console.log(data)
    setSuccess(true)
  }

  if (success) {
    Swal.fire({
      icon: 'success',
      title: 'Thank you for purchase!',
      text: 'Have a good day!',
      customClass: {
        popup: 'payment-form__swal-popup',
        title: 'payment-form__swal-title',
        confirmButton: 'payment-form__swal-button',
        content: 'payment-form__swal-text',
      },
    }).then(function () {
      window.location = '/'
    })
    return <Confetti />
  }

  const expiryDateValidator = (value) => {
    const currentYear = new Date().getFullYear()
    const lastTwoDigits = currentYear.toString().slice(2, 4)
    if (value.slice(3, 5) < lastTwoDigits) {
      return false
    } else if (value.slice(3, 5) === lastTwoDigits) {
      const currentMonth = new Date().getMonth()
      const formatedMonth = (currentMonth + 1).toString()
      if (value.slice(0, 2) <= formatedMonth) {
        return false
      } else {
        return true
      }
    }
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
        <div className="payment-form__payment-method-option_other">other</div>
        <input
          type="text"
          name="cardType"
          ref={register}
          className="payment-form__input_cardType"
        />
      </div>
      <label className="payment-form__label">
        Card Number
        <Cleave
          name="card"
          htmlRef={register({
            required: 'Card is required',
            validate: {
              validateCardNumber: (value) => {
                const cardType = document.querySelector(
                  '.payment-form__input_cardType',
                )
                if (cardType.value === 'unknown') {
                  return false
                }
              },
            },
          })}
          placeholder="Enter your credit card number"
          options={{
            creditCard: true,
            onCreditCardTypeChanged: function (type) {
              const cardType = document.querySelector(
                '.payment-form__input_cardType',
              )
              cardType.value = type
            },
          }}
          className="payment-form__input payment-form__input_cardNumber"
        />
        {errors.card?.type === 'validateCardNumber' && (
          <p className="registration-form__error">
            Please enter a valid card number
          </p>
        )}
        {errors.card?.message && (
          <p className="registration-form__error">{errors.card?.message}</p>
        )}
      </label>
      <label className="payment-form__label">
        Card Holder Name
        <input
          name="cardHolder"
          className="payment-form__input payment-form__input_cardHolder"
          ref={register({ required: 'Card holder name is required' })}
        />
      </label>
      {errors.cardHolder?.message && (
        <p className="registration-form__error">{errors.cardHolder?.message}</p>
      )}
      <label className="payment-form__label">
        Card Expiry Date
        <Cleave
          name="expiryDate"
          className="payment-form__input payment-form__input_expiry-date"
          options={{ date: true, datePattern: ['m', 'y'] }}
          htmlRef={register({
            required: 'Expiry Date is required',
            validate: {
              validateExpiry: (value) => expiryDateValidator(value),
            },
          })}
        />
        {errors.expiryDate?.type === 'validateExpiry' && (
          <p className="registration-form__error">Expired</p>
        )}
        {errors.expiryDate?.message && (
          <p className="registration-form__error">
            {errors.expiryDate?.message}
          </p>
        )}
      </label>
      <label className="payment-form__label payment-form__label_cvc">
        <div>
          CVC/CVV/CID
          <input
            name="CVC"
            className="payment-form__input payment-form__input_cvv"
            ref={register({
              required: 'CVC/CVV/CID is required',
              pattern: {
                value: /^[0-9]{3}$/,
                message: 'Please enter a valid CVC/CVV/CID',
              },
            })}
          />
        </div>
        <a
          className="payment-form__what-is-cvc"
          href="https://en.wikipedia.org/wiki/CVC_Capital_Partners"
        >
          What is CVC/CVV/CID?
        </a>
      </label>
      {errors.CVC?.message && (
        <p className="registration-form__error">{errors.CVC?.message}</p>
      )}
      <Button type="submit" text="pay" fz18 size26957 isBlack mrt55 />
    </form>
  )
}

export default PaymentForm
