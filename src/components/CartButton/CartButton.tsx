import classNames from 'classnames'
import React, { useContext, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as cartActions } from '../../features/cartItemsSlice';
import { actions } from '../../features/userSlice';
import { globalContext } from '../../helpers/globalContext';
import { CartItem, Product, ProductFromServer } from '../../helpers/types';
import { Modal } from '../Modal';
// import { User } from "../helpers/types";

type Props = {
  isSmall?: boolean,
  amount?: number,
  product: ProductFromServer,
  // product: Product,
  text?: boolean,
  icon?: boolean,
}

export const CartButton: React.FC<Props> = ({ amount = 1, product, isSmall, text, icon }) => {
  const user = useAppSelector(state => state.user.user);
  const { setIsModalOpen } = useContext(globalContext);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cartItems);
  // const computedPrice = (product.price - (product.price * (product.discount / 100))).toFixed(2);
  // const discountAmount = product.price * (product.discount / 100);
  const isAddedToCart = cartItems.some(currProduct => currProduct.id === product.id);

  // useEffect(() => {
  //   const user = {
  //     id: 5,
  //     email: 'null',
  //     numberPhone: 'null',
  //     firstName: 'null',
  //     lastName: 'null',
  //   }
  //   dispatch(actions.set(user))

  // }, [])

  const addToCartHandle = () => {
    if (!user) {
      setIsModalOpen(true);
      return;
    }
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      // price: +computedPrice,
      // discountDeducted: discountAmount,
      discountDeducted: 999,
      amount: amount,
      img: product.coverImage,
      product_name_Id: product.product_name_Id,
    }

    isAddedToCart
      ? dispatch(cartActions.remove(product.id))
      : dispatch(cartActions.add(cartItem));
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
