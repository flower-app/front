import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CartItem } from '../../components/CartItem';
import { CartTotal } from '../../components/CartTotal';
import "./CartPage.scss";

const cartItems = []

export function CartPage() {
  const cartItems = useAppSelector(state => state.cartItems);


  return (
    <div className="cart-page">
      <div className="cart-page__top">
        <h2 className="cart-page__title">
          Order summary
        </h2>
        <Breadcrumbs />
      </div>
      <div className="cart-page__content">
        {(!cartItems.length)
          ? (<h2 className="cart-page__title">
              There is no products in your cart yet...
            </h2>)
          : (
            <>
              <div className="cart-page__items">
                {cartItems.map(item => (
                  <React.Fragment key={item.id}>
                    <CartItem item={item} />
                  </React.Fragment>
                ))}
              </div>
      
              <CartTotal />
            </>
          )}
      </div>
    </div>
  )
}
