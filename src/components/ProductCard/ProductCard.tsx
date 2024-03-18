import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions } from '../../features/cartItemsSlice';
import { actions as favoritesActions } from '../../features/favoritesSlice';
import { CartItem, Product } from '../../helpers/types';
import { CartButton } from '../CartButton';
import { ProductImage } from '../ProductImage';
import "./ProductCard.scss";

type Props = {
  isSmall?: boolean,
  product: Product,
}

export const ProductCard: React.FC<Props> = ({ isSmall, product }) => {
  const computedPrice = (product.price - (product.price * (product.discount / 100))).toFixed(2);

  return (
    <article className={classNames(
      'product-card',
      { 'product-card--small': isSmall }
    )}>
      <ProductImage isSmall={isSmall} product={product} />
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
          {`$${computedPrice}`}
        </p>
      </div>
      <div className="product-card__buttons">
        <CartButton isSmall={isSmall} product={product} icon={true} />
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
