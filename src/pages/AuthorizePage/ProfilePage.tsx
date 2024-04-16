import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions } from '../../features/userSlice';
import { getOrders } from '../../helpers/api';
import { OrderFromServer } from '../../helpers/types';
import "./AuthorizePage.scss";
import "./Profile.scss";


export default function ProfilePage() {
  const [orders, setOrders] = useState<OrderFromServer[]>();


  const user = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user?.email) {
      getOrders()
        .then(setOrders)
        .catch(() => console.log('No orders'));
    }
  }, [user?.email])

  function getDate(string: string) {
    return string.slice(0, 10).replace(/-/g, ".")
  }


  function handleLogOut() {
    dispatch(actions.deleteUser());
    localStorage.removeItem('token')
  }

  return (
    <div className="authorize-page">
      {user?.email
        ? (<div className="profile">
          <h2 className="profile__title">Your Account</h2>
          <div className="profile__info">
            <div className="profile__subtitle">
              Your account and contact info:
            </div>
            <div className="profile__block">
              <div>
                <p className="profile__field-title">
                  Name:
                </p>
                <div className="input">{user.firstName}</div>
              </div>

              <div>
                <p className="profile__field-title">
                  Last Name:
                </p>
                <div className="input">{user.lastName}</div>
              </div>
            </div>
            <div className="profile__block">
              <div>
                <p className="profile__field-title">
                  Email:
                </p>
                <div className="input">{user.email}</div>
              </div>

              <div>
                <p className="profile__field-title">
                  Phone:
                </p>
                <div className="input">{user.numberPhone}</div>
              </div>
            </div>
            <div className="profile__subtitle">
              Your account orders:
            </div>
            {
              orders?.length
                ? (
                  <ul className="profile__orders">
                    {orders.map(order => {
                      return (
                        <li className="profile__order" key={order.id}>
                          <div className="profile__order-info">
                            <div className="profile__order-id">
                              {"#" + order.id}
                            </div>

                            <p className="profile__order-date">{getDate(order.orderDate)}</p>
                            <p className="profile__order-total">{order.total.toFixed(2) + "$"}</p>

                          </div>
                          <div className="profile__order-status">
                            Status:
                            <p>{order.status}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                )
                : (
                  <p>There is no orders yet...</p>
                )
            }
          </div>

          <button
            className='profile__log-out'
            onClick={handleLogOut}
          >
            <span className="profile__log-out-icon"></span>
            Log out
          </button>
        </div>
        )
        : <Outlet />
      }
    </div>
  )
}
