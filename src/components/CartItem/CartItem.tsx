import React, { useEffect, useState } from 'react';
import "./CartItem.scss";
import { Link } from 'react-router-dom';
import { CartItemFromServer, ProductFromServer } from '../../helpers/types';
import { useAppDispatch } from '../../app/hooks';
import { deleteCartItem, getProductById, updateCartItem } from '../../helpers/api';
import { Loader } from '../Loader';
import { init } from '../../features/cartSlice';

type Props = {
  cartItem: CartItemFromServer,
}


export const CartItem: React.FC<Props> = ({ cartItem }) => {
  const [product, setProduct] = useState<ProductFromServer>();
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);
    getProductById(cartItem.productId)
      .then(setProduct)
      .finally(() => setIsLoading(false));
  }, [])


  const changeQuantityHandler = (value: number) => {
    updateCartItem(cartItem.id, cartItem.quantity + value)
      .then(() => dispatch(init()));
    setQuantity(quantity + value);
  };


  const removeHandler = () => {
    deleteCartItem(cartItem.id)
      .then(() => dispatch(init())
      )
    setIsDeleted(true)
  };

  return (
    <>
      {!isDeleted && (

        <article className="cart-item">
          {isLoading && <Loader />}

          {!isLoading && !product && (
            <p>Something went wrong...</p>
          )}

          {!isLoading && product && (
            <>
              <div className="cart-item__img-container">
                <img
                  src={product.coverImage}
                  alt={product.name}
                  className="cart-item__img"
                />
              </div>
              <div className="cart-item__info">
                <div className="cart-item__top">
                  <Link
                    to={`/catalog/${product.product_name_Id}`}
                    className="cart-item__link"
                    state={{ id: product.id }}
                  >
                    <h3 className="cart-item__title">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="cart-item__price" data-price="price">
                    {`$${(product.price * quantity).toFixed(2)}`}
                  </div>
                </div>
                <div className="cart-item__bottom">
                  <div className="cart-item__quantity">
                    Quantity
                    <div className="cart-item__buttons">
                      <button
                        className='cart-item__min-btn'
                        onClick={() => changeQuantityHandler(-1)}
                        disabled={cartItem.quantity === 1}
                      >
                        -
                      </button>
                      {quantity}
                      <button
                        className='cart-item__plus-btn'
                        onClick={() => changeQuantityHandler(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    aria-label="Remove item"
                    className="cart-item__remove-btn"
                    onClick={removeHandler}
                  ></button>
                </div>
              </div>
            </>)}
        </article>
      )}
    </>
  )
}
