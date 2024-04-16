import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

import { Loader } from '../Loader';
import "./CartTotal.scss";

type Props = {
  total?: number
}

export const CartTotal: React.FC<Props> = ({ total }) => {
  const location = useLocation();
  const isCartPage = location.pathname === '/cart';
  const { cart, isLoading, hasError } = useAppSelector(state => state.cart)

  return (
    <div className="cart-total">
      {isLoading && <Loader />}

      {!isLoading && hasError && (
        <p>Something went wrong...</p>
      )}

      {!isLoading && !hasError && cart && (
        <>
          <h3 className="cart-total__title">Total</h3>
          <div className="cart-total__content">
            <ul className="cart-total__items-list">
              {cart?.cartItems.map(item => (
                <li className="cart-total__li" key={item.id}>
                  <p className="cart-total__item-title">{item.productName}</p>
                  <span className="cart-total__price">
                    {(item.productPrice * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="cart-total__separator"></div>
            <ul className="cart-total__description">
              <li className="cart-total__li">
                Delivery<span className="cart-total__delivery">Free</span>
              </li>
              {/* <li className="cart-total__li">
                Sale<span className="cart-total__price">${saleAmount.toFixed(2)}</span>
              </li> */}
              <li className="cart-total__li">
                Total<span className="cart-total__price">${cart.total.toFixed(2)}</span>
              </li>
            </ul>
            {isCartPage && (
              <div className="cart-total__btn">
                <Link to="check-out" className="button">Check out</Link>
              </div>
            )}
          </div>
        </>)}
    </div>
  )
}
