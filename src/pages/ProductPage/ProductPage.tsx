import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import "./ProductPage.scss";
import { product } from '../../helpers/sample';
import { CartItem } from '../../components/CartItem';
import { ProductCard } from '../../components/ProductCard';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ProductImage } from '../../components/ProductImage';
import { CartButton } from '../../components/CartButton';
import { Product } from '../../helpers/types';
// import { CartItem } from '../../helpers/types';

export function ProductPage() {
  const { product_name_Id } = useParams();
  const [amount, setAmount] = useState(1);
  // const dispatch = useAppDispatch();

  
  const changeQuantityHandler = (value: number) => {
    setAmount(amount + value);
  }
  
  const products = useAppSelector(state => state.allProducts);
  
  const product: Product = products.find(product => product.product_name_Id === product_name_Id) as Product;
  
  const computedPrice = (product.price - (product.price * (product.discount / 100))).toFixed(2);

  return (
    <>
      {product
        ? (
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
                <ProductImage product={product} />
                <div className="product-page__description">
                  <div className="product-page__description-top">
                    <div className="product-page__summary">
                      <h1
                        className="product-page__h1"
                      >
                        {product.name}
                      </h1>
                      <p className="product-page__price">
                        ${computedPrice}
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
                          onClick={() => changeQuantityHandler(-1)}
                          disabled={amount === 1}
                        >
                          -
                        </button>
                        {amount}
                        <button
                          className='product-page__plus-btn'
                          onClick={() => changeQuantityHandler(1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <CartButton 
                      product={product} 
                      text={true} 
                      icon={false} 
                      amount={amount} 
                    />
                  </div>
                </div>
              </article>

              <div className="product-page__recommended">
                <h3 className="product-page__h3">
                  See also
                </h3>
                <div className="product-page__recommended-container">
                  {products.slice(3, 6).map(item => (
                    <React.Fragment key={item.id}>
                      <ProductCard product={item} />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
        : (<h2 className="product-page__title">Not found...</h2>)
      }
    </>
  )
}
