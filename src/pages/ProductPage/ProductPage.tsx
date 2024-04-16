import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import "./ProductPage.scss";
import { ProductCard } from '../../components/ProductCard';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ProductImage } from '../../components/ProductImage';
import { CartButton } from '../../components/CartButton';
import { ProductFromServer, PropertyType } from '../../helpers/types';
import { getProductsByProperty } from '../../helpers/api';
import { Loader } from '../../components/Loader';
import { init } from '../../features/currentProductSlice';

export function ProductPage() {
  const { state } = useLocation();
  const [amount, setAmount] = useState(1);
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart.cart);


  useEffect(() => {
    setAmount(1);
  }, [state.id])

  const { currentProduct, isLoading, hasError } = useAppSelector(state => state.currentProduct)

  const [isAddedToCart, setIsAddedToCart] = useState(cart?.cartItems.some(item => item.productId === currentProduct?.id) || false);

  useEffect(() => {
    setIsAddedToCart(cart?.cartItems.some(item => item.productId === currentProduct?.id) || false)
  }, [cart?.cartItems.length])

  const [recomended, setRecomended] = useState<ProductFromServer[]>([]);

  useEffect(() => {
    dispatch(init(state.id))
  }, [state.id, dispatch])

  const changeQuantityHandler = (value: number) => {
    setAmount(amount + value);
  }

  useEffect(() => {
    getProductsByProperty(currentProduct?.typeIds[0], PropertyType.type).then(setRecomended);
  }, [currentProduct])

  const visibleRecomended = recomended
    .filter(item => item.id !== currentProduct?.id)
    .slice(0, 3)



  return (
    <div className="product-page">
      {
        isLoading
          ? <Loader />
          : (
            <div>
              {currentProduct
                && (
                  <>
                    <div className="product-page__top">
                      <h2 className="product-page__title">
                        {currentProduct.typeIds[0] === 2
                          ? 'Live Plants'
                          : 'Fresh Flowers'}
                      </h2>
                      <Breadcrumbs />
                    </div>
                    <div className="product-page__content">
                      <article className="product-page__info">
                        <ProductImage product={currentProduct} />
                        <div className="product-page__description">
                          <div className="product-page__description-top">
                            <div className="product-page__summary">
                              <h1
                                className="product-page__h1"
                              >
                                {currentProduct.name}
                              </h1>
                              <p className="product-page__price">
                                {`$${currentProduct?.price.toFixed(2)}`}
                              </p>
                            </div>
                            <div className="product-page__p">
                              {currentProduct.description}
                            </div>
                          </div>

                          <div className="product-page__description-bottom">
                            <div className="product-page__quantity">
                              <span className="product-page__quantity-text">Quantity</span>
                              <div className={classNames(
                                "product-page__buttons",
                                { "product-page__buttons--disabled": isAddedToCart }
                              )}>
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
                              product={currentProduct}
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
                          {visibleRecomended.slice(0, 3).map(item => (
                            <React.Fragment key={item.id}>
                              <ProductCard product={item} />
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>)}
            </div>
          )}
    </div>
  )
}
