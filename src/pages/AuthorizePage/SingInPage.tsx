import React from 'react';
import { Link } from 'react-router-dom';
import "./AuthorizePage.scss"

export const SingInPage = () => {
  return (
    <div className="authorize-page__container">
      <div className="authorize-page__left">
        <div className="autorize-page__text">
          <h2 className="authorize-page__title">Welcome Back!</h2>

          <p className="authorize-page__p">
            To keep connecting with us please login with your personal info
          </p>
        </div>
        <Link to="/profile/log-in" className="button button--white">Log in</Link>
      </div>

      <div className="authorize-page__right">
        <h2 className="authorize-page__title authorize-page__title--right">
          Create Account
        </h2>
        <form className="authorize-page__form">
          <div className="authorize-page__fieldset">
            <input
              type="text"
              className="input input--person"
              placeholder="Name"
              autoComplete="name"
            />
            <input
              type="text"
              className="input"
              placeholder="Surname"
              autoComplete="surname"
            />
          </div>
          <input
            type="tel"
            className="input input--phone"
            placeholder="Phone number"
          />
          <input
            type="email"
            className="input input--email"
            placeholder="Email"
            autoComplete="username"
          />
          <input
            type="password"
            className="input input--password"
            placeholder="Password"
            autoComplete="new-password"
          />
          <input
            type="password"
            className="input input--password"
            placeholder="Repeat Password"
            autoComplete="new-password"
          />
        </form>
        <button
          className="button button--wide button--disabled"
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}
