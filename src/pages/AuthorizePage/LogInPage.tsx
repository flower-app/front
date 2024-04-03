import "./AuthorizePage.scss";
import React from 'react'
import { Link } from "react-router-dom";

export const LogInPage = () => {
  return (
    <div className="authorize-page__container">
      <div className="authorize-page__left">
        <div className="autorize-page__text">
          <h2 className="authorize-page__title">Don’t have an Account?</h2>

          <p className="authorize-page__p">
            Sign up now to stay connected with us! Enter your personal information to create your account.
          </p>
        </div>
        <Link to="/profile/sign-in" className="button button--white">
          Sign Up
        </Link>
      </div>

      <div className="authorize-page__right">
        <h2 className="authorize-page__title authorize-page__title--right">
          Log in
        </h2>
        <form className="authorize-page__form">
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
            autoComplete="current-password"
          />
        </form>
        <button
          className="button button--wide button--disabled"
        >
          Log in
        </button>
      </div>
    </div>
  )
}
