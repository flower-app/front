import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { CartTotal } from '../../components/CartTotal'
import "./CheckOutPage.scss"

export default function CheckOutPage() {

  const formatExpiryDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value.replace(/\D/g, '');

    if (value.length > 2) {
      input.value = value.slice(0, 2) + '/' + value.slice(2);
    } else {
      input.value = value;
    }
  }

  function formatPhoneNumber(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target;
    const value = input.value.replace(/\D/g, '');

    if (value.length <= 10) {
      input.value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    } else {
      input.value = value.slice(0, 10).replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
  }

  const isChecked = false;
  const isDisabled = false;

  return (
    <div className="check-out-page">
      <div className="check-out-page__top">
        <h2 className="check-out-page__title">Check out</h2>
        <Breadcrumbs />
      </div>
      <div className="check-out-page__content">
        <div className="check-out__left">
          <form className="check-out-page__form">
            <fieldset className="check-out-page__fieldset">
              <div
                className={classNames(
                  'check-out-page__legend-wrapper',
                  { 'check-out-page__legend-wrapper--checked': isChecked }
                )}
              >
                <legend
                  className={classNames(
                    'check-out-page__legend',
                  )}
                >
                  {isChecked && (
                    <span
                      className="check-out-page__check"
                    ></span>)}
                  1. Contact information
                </legend>
                {isChecked && (
                  <button
                    aria-label="edit"
                    className="check-out-page__edit-btn"
                  ></button>)}
              </div>

              <div className="check-out-page__fields">
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Surname"
                />
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  className="input"
                  placeholder="Phone number"
                  onChange={formatPhoneNumber}
                />
                <button className="button button--wide">
                  Continue to shipping
                </button>
              </div>
            </fieldset>

            <fieldset className="check-out-page__fieldset">
              <div
                className={classNames(
                  'check-out-page__legend-wrapper',
                  {
                    'check-out-page__legend-wrapper--checked': isChecked,
                    'check-out-page__legend-wrapper--disabled': isDisabled,
                  }
                )}
              >
                <legend
                  className={classNames(
                    'check-out-page__legend',
                  )}
                >
                  {isChecked && (
                    <span
                      className="check-out-page__check"
                    ></span>)}
                  2. Shipping details
                </legend>
                {isChecked && (
                  <button
                    aria-label="edit"
                    className="check-out-page__edit-btn"
                  ></button>)}
              </div>

              <div className={classNames(
                'check-out-page__fields',
                { 'check-out-page__fields--disabled': isDisabled }
              )}>
                <input
                  type="text"
                  className="input"
                  placeholder="Country"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="City"
                />
                <div className='check-out-page__inputs-wrapper'>
                  <input
                    type="text"
                    className="input"
                    placeholder="Street"
                  />
                  <input
                    type="text"
                    className="input"
                    placeholder="Apartment"
                  />
                </div>
                <button className="button button--wide">
                  Continue to payment
                </button>
              </div>
            </fieldset>
            <fieldset className="check-out-page__fieldset">
              <div
                className={classNames(
                  'check-out-page__legend-wrapper',
                  {
                    'check-out-page__legend-wrapper--checked': isChecked,
                    'check-out-page__legend-wrapper--disabled': isDisabled,
                  }
                )}
              >
                <legend
                  className={classNames(
                    'check-out-page__legend',
                  )}
                >
                  {isChecked && (
                    <span
                      className="check-out-page__check"
                    ></span>)}
                  3. Payment
                </legend>
                {isChecked && (
                  <button
                    aria-label="edit"
                    className="check-out-page__edit-btn"
                  ></button>)}
              </div>
              <div className={classNames(
                'check-out-page__fields',
                { 'check-out-page__fields--disabled': isDisabled }
              )}>

                <input
                  type="text"
                  className="input"
                  placeholder="Card number"
                />
                <div className='check-out-page__inputs-wrapper'>
                  <input
                    type="text"
                    className="input"
                    placeholder="MM/YY"
                    id="expiryDate"
                    maxLength={5}
                    onChange={formatExpiryDate}
                  />
                  <input
                    type="text"
                    className="input"
                    placeholder="CVV code"
                  />
                </div>
                <label className="check-out-page__remember-container">
                  <input
                    type="checkbox"
                    className="check-out-page__remember-checkbox"
                  />
                  <span className="check-out-page__remember-checkmark"></span>
                  Remember the card
                </label>

                <button className="button button--wide">
                  Make a purchase
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <CartTotal />
      </div>
    </div>
  )
}
