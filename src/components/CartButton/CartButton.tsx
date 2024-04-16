import classNames from 'classnames'
import React, { useContext, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { init } from '../../features/cartSlice';
import { addToCart, deleteCartItem, getCart } from '../../helpers/api';
import { globalContext } from '../../helpers/globalContext';
import { ProductFromServer } from '../../helpers/types';
import { Modal } from '../Modal';

type Props = {
  isSmall?: boolean,
  amount?: number,
  product: ProductFromServer,
  text?: boolean,
  icon?: boolean,
}

export const CartButton: React.FC<Props> = ({ amount = 1, product, isSmall, text, icon }) => {
  const user = useAppSelector(state => state.user.user);
  const { setIsModalOpen } = useContext(globalContext);
  const cart = useAppSelector(state => state.cart.cart);

  const [isAddedToCart, setIsAddedToCart] = useState(cart?.cartItems.some(item => item.productId === product.id) || false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsAddedToCart(cart?.cartItems.some(item => item.productId === product.id) || false)
  }, [cart?.cartItems.length])

  async function addToCartHandle() {
    if (!user?.email) {
      setIsModalOpen(true);
      return;
    }

    const currentCartItem = cart?.cartItems.find((item) => item.productId === product.id);

    if (currentCartItem) {
      deleteCartItem(currentCartItem?.id).then(() => dispatch(init()));
      setIsAddedToCart(false)
    } else {
      addToCart(product.id, amount).then(() => dispatch(init()));;
      setIsAddedToCart(true);
    }

    dispatch(init());
  }

  return (
    <>
      <Modal />
      <button
        className={classNames(
          "button ",
          {
            "button--active": !icon && isAddedToCart,
            "button--cart": icon,
            "button--cart--not-active": icon && !isAddedToCart,
            "button--cart--small": icon && isSmall,
          }
        )}
        onClick={addToCartHandle}
      >
        {text && (
          isAddedToCart
            ? 'Added to cart'
            : 'Add to cart'
        )}
      </button>
    </>
  )
}
