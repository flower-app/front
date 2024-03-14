import React from 'react';
import "./ProductCardLarge.scss"

import { product } from '../../helpers/sample';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default function ProductCardLarge() {

  return (
    <div className='product-card'>
      <div
        className="product-card__img-container"
      >
        <img
          src={product.img}
          alt={product.name} className="product-card__img"
        />

        <button className={classNames(
          'product-card__fav-btn',
          { 'product-card__fav-btn--active': false },
        )}></button>

      </div>
      <div className="product-card__summary">
        <Link
          to={`catalog/${product.product_name_Id}`}
          className="product-card__title"
        >
          {product.name}
        </Link>
        <p className="product-card__price">
          {`$${product.price}`}
        </p>
      </div>
      <div className="product-card__buttons">
        <button
          className={classNames(
            "button button--cart",
            { "button--cart--active": false }
          )}

        ></button>
        <button className="button button--with-arrow button--white">More details<span className="button__arrow button__arrow--details "></span></button>
      </div>
    </div>
  )
}




