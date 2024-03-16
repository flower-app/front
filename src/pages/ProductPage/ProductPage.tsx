import React from 'react';
// import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import "./ProductPage.scss";
import { product } from '../../helpers/sample';
import { CartItem } from '../../components/CartItem';
import { ProductCard } from '../../components/ProductCard';
import classNames from 'classnames';

export function ProductPage() {
  // const { product_name_Id } = useParams();

  return (
    <div className="product-page">
      <div className="product-page__top">
        <h2 className="product-page__title">
          {product.type === 'potted'
            ? 'Live Plants'
            : 'Fresh Flowers'}
        </h2>
        <Breadcrumbs />
      </div>
      <div className="product-page__content">
        <article className="product-page__info">
          <div
            className="product-page__img-container"
          >
            <img
              src={product.img}
              alt={product.name} className="product-page__img"
            />

            <button className={classNames(
              'product-page__fav-btn',
              { 'product-page__fav-btn--active': false },
            )}></button>
          </div>
          <div className="product-page__description">
            <div className="product-page__description-top">
              <div className="product-page__summary">
                <h1
                  className="product-page__h1"
                >
                  {product.name}
                </h1>
                <p className="product-page__price">
                  {`$${product.price}`}
                </p>
              </div>
              <div className="product-page__p">
                {product.description}
              </div>
            </div>

            <div className="product-page__description-bottom">
              <div className="product-page__quantity">
                Quantity
                <div className="product-page__buttons">
                  <button
                    className='product-page__min-btn'
                  >
                    -
                  </button>
                  1
                  <button
                    className='product-page__plus-btn'
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="button"
              >Add to cart</button>
            </div>
          </div>
        </article>

        <div className="product-page__recommended">
          <h3 className="product-page__h3">
            See also
          </h3>
          <div className="product-page__recommended-container">
            <ProductCard product={product}/>
            <ProductCard product={product}/>
            <ProductCard product={product}/>
          </div>
        </div>
      </div>
    </div>
  )
}
