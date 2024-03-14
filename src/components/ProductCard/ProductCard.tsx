import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../helpers/types';
import "./ProductCard.scss";

type Props = {
  isSmall?: boolean,
  product: Product,
}

export const ProductCard: React.FC<Props> = ({ isSmall, product }) => {
  return (
    <article className={classNames(
      'product-card',
      { 'product-card--small': isSmall }
    )}>
      <div
        className={classNames(
          'product-card__img-container',
          { 'product-card__img-container--small': isSmall }
        )}
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
          to={`/catalog/${product.product_name_Id}`}
          className="product-card__title"
        >
          <h3 className={classNames(
            "product-card__h3",
            {'product-card__h3--small': isSmall}
          )}>
          {product.name}
          </h3>
        </Link>
        <p className={classNames(
          "product-card__price",
          { "product-card__price--small": isSmall }
        )}>
          {`$${product.price}`}
        </p>
      </div>
      <div className="product-card__buttons">
        <button
          className={classNames(
            "button button--cart",
            {
              "button--cart--active": false,
              "button--cart--small": isSmall,
            }
          )}
        ></button>
        <Link
          to={`/catalog/${product.product_name_Id}`}

          className={classNames(
            "button button--with-arrow button--white",
            { "button--small": isSmall }
          )}
        >
          More details
          <span
            className={classNames(
              "button__arrow button__arrow--details",
              { "button__arrow--small": isSmall }
            )}
          ></span>
        </Link>
      </div>
    </article>
  )
}
