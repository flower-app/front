import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CartItem } from '../../components/CartItem';
import { CartTotal } from '../../components/CartTotal';
import "./CartPage.scss";

const cartItems = []

export function CartPage() {
  return (
    <div className="cart-page">
      <div className="cart-page__top">
        <h2 className="cart-page__title">
          Order summary
        </h2>
        <Breadcrumbs />
      </div>
      <div className="cart-page__content">
        <div className="cart-page__items">
          <CartItem />
          <CartItem />
        </div>

        <CartTotal />
      </div>
    </div>
  )
}
