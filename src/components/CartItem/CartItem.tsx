import React from 'react';
import "./CartItem.scss";
import { Link } from 'react-router-dom';
import { CartItem as CartItemType } from '../../helpers/types';
import { useAppDispatch } from '../../app/hooks';
import { actions } from '../../features/cartItemsSlice';

type Props = {
  item: CartItemType,
}


export const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();


  const changeQuantityHandler = (value: number) => {
    dispatch(actions.changeItem({
      ...item,
      amount: item.amount + value,
    }))
  };

  const removeHandler = () => {
    dispatch(actions.remove(item.id));
  };

  return (
    <article className="cart-item">
      <div className="cart-item__img-container">
        <img
          src={item.img}
          alt={item.name}
          className="cart-item__img"
        />
      </div>
      <div className="cart-item__info">
        <div className="cart-item__top">
          <Link
            to={`/catalog/${item.product_name_Id}`}
            className="cart-item__link"
          >
            <h3 className="cart-item__title">
              {item.name}
            </h3>
          </Link>
          <div className="cart-item__price">
            {`$${(item.price * item.amount).toFixed(2)}`}
          </div>
        </div>
        <div className="cart-item__bottom">
          <div className="cart-item__quantity">
            Quantity
            <div className="cart-item__buttons">
              <button
                className='cart-item__min-btn'
                onClick={() => changeQuantityHandler(-1)}
                disabled={item.amount === 1}
              >
                -
              </button>
              {item.amount}
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
    </article>
  )
}
