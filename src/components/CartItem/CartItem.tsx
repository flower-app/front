import React from 'react';
import "./CartItem.scss";
import { product } from '../../helpers/sample';
import { Link } from 'react-router-dom';

export const CartItem = () => {
  return (
    <article className="cart-item">
      <div className="cart-item__img-container">
        <img 
          src={product.img} 
          alt={product.name} 
          className="cart-item__img" 
        />
      </div>
      <div className="cart-item__info">
        <div className="cart-item__top">
          <Link
            to={`catalog/${product.product_name_Id}`}
            className="cart-item__link"
          >
            <h3 className="cart-item__title">
              {product.name}
            </h3>
          </Link>
          <div className="cart-item__price">
            {`$${product.price}`}
          </div>
        </div>
        <div className="cart-item__bottom">
          <div className="cart-item__quantity">
            Quantity 
            <div className="cart-item__buttons">
              <button 
                className='cart-item__min-btn'
              >
                -
              </button>
              1
              <button 
                className='cart-item__plus-btn'
              >
                +
              </button>
            </div>
          </div>
          <button
            aria-label="Remove item"
            className="cart-item__remove-btn"
          ></button>
        </div>
      </div>
    </article>
  )
}
