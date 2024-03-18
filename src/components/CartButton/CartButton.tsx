import classNames from 'classnames'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions } from '../../features/cartItemsSlice';
import { CartItem, Product } from '../../helpers/types';

type Props = {
  isSmall?: boolean,
  amount?: number,
  product: Product,
  text?: boolean,
  icon?: boolean,
}

export const CartButton: React.FC<Props> = ({amount = 1, product, isSmall, text, icon}) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cartItems);
  const computedPrice = (product.price - (product.price * (product.discount / 100))).toFixed(2);
  const discountAmount = product.price * (product.discount / 100);
  const isAddedToCart = cartItems.some(currProduct => currProduct.id === product.id);

  const addToCartHandle = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: +computedPrice,
      discountDeducted: discountAmount,
      amount: amount,
      img: product.img,
      product_name_Id: product.product_name_Id,
    }

    isAddedToCart
      ? dispatch(actions.remove(product.id))
      : dispatch(actions.add(cartItem));
  }

  return (
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
  )
}
