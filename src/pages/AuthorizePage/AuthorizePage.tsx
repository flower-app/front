import React from 'react';
import "./AuthorizePage.scss";

export default function AuthorizePage() {
  return (
    <div className="authorize-page">
      <div className="authorize-page__container">
        <div className="authorize-page__left">
          <div className="autorize-page__text">
            <h2 className="authorize-page__title">Welcome Back!</h2>

            <p className="authorize-page__p">
              To keep connecting with us please login with your personal info
            </p>
          </div>
          <button className="button button--white">Log in</button>
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
              />
              <input
                type="text"
                className="input"
                placeholder="Surname"
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
            />
            <input 
              type="password" 
              className="input input--password"
              placeholder="Password"
            />
            <input 
              type="password" 
              className="input input--password"
              placeholder="Repeat Password"
            />
          </form>
          <button
            className="button button--wide button--disabled"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="authorize-page__container">
        <div className="authorize-page__left">
          <div className="autorize-page__text">
            <h2 className="authorize-page__title">Don’t have an Account?</h2>

            <p className="authorize-page__p">
              Sign up now to stay connected with us! Enter your personal information to create your account.
            </p>
          </div>
          <button className="button button--white">
            Sign Up
          </button>
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
            />
            <input 
              type="password" 
              className="input input--password"
              placeholder="Password"
            />
          </form>
          <button
            className="button button--wide button--disabled"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}
