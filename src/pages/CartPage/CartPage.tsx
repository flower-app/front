import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CartItem } from '../../components/CartItem';
import { CartTotal } from '../../components/CartTotal';
import { Loader } from '../../components/Loader';
import { init } from '../../features/cartSlice';
import "./CartPage.scss";

export function CartPage() {
  const { cart, isLoading, hasError } = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(init());
  }, [])
  useEffect(() => {
    console.log(
      cart?.total
    );
  }, [cart?.total])

  return (
    <div className="cart-page">
      <div className="cart-page__top">
        <h2 className="cart-page__title">
          Order summary
        </h2>
        <Breadcrumbs />
      </div>
      <div className="cart-page__content">
        {isLoading && <Loader />}

        {!isLoading && hasError && (
          <p>Something went wrong...</p>
        )}

        {!isLoading && !hasError && cart && (
          cart.cartItems.length === 0
            ? (<h2 className="cart-page__title">
              There is no products in your cart yet...
            </h2>)
            : (
              <>
                <div className="cart-page__items">
                  {cart.cartItems.map(item => (
                    <React.Fragment key={item.id}>
                      <CartItem cartItem={item} />
                    </React.Fragment>
                  ))}
                </div>
                <CartTotal />
              </>
            ))}
      </div>
    </div>
  )
}
