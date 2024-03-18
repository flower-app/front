import React from 'react'

export const QuantityHandler = () => {
  // const dispatch = useAppDispatch();


  // const changeQuantityHandler = (value: number) => {
  //   dispatch(actions.changeItem({
  //     ...item,
  //     amount: item.amount + value,
  //   }))
  // };

  return (
    <div className="quantity">
      Quantity
      <div className="quantity__buttons">
        <button
          className='quantity__min-btn'
        >
          -
        </button>
        1
        <button
          className='quantity__plus-btn'
        >
          +
        </button>
      </div>
    </div>
  )
}
