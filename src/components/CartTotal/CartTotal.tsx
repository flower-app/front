import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./CartTotal.scss";

export const CartTotal = () => {
  const location = useLocation();
  const isCartPage = location.pathname === '/cart';
  return (
    <div className="cart-total">
      <h3 className="cart-total__title">Total</h3>
      <div className="cart-total__content">
        <ul className="cart-total__items-list">
          {/* {cartItems.map(item => {(
                <li className="cart-total__li">
                  <p className="cart-total__item-title">{item.name}</p>
                  <span className="cart-total__item-price">{item.price}</span>
                </li>
              )})} */}
          <li className="cart-total__li">
            <p className="cart-total__item-title">Sweet Sunshine</p>
            <span className="cart-total__price">$94</span>
          </li>

          <li className="cart-total__li">
            <p className="cart-total__item-title">Sweet Sunshine</p>
            <span className="cart-total__price">$94</span>
          </li>
        </ul>
        <div className="cart-total__separator"></div>
        <ul className="cart-total__description">
          <li className="cart-total__li">
            Delivery<span className="cart-total__delivery">Free</span>
          </li>
          <li className="cart-total__li">
            Sale<span className="cart-total__price">$84</span>
          </li>
          <li className="cart-total__li">
            Total<span className="cart-total__price">$445</span>
          </li>
        </ul>
        {isCartPage && (
          <div className="cart-total__btn">
            <Link to="check-out" className="button">Check out</Link>
          </div>
        )}
      </div>
    </div>
  )
}
