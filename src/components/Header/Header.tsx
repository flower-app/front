import classNames from 'classnames';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { globalContext } from '../../helpers/globalContext';
import Logo from '../Logo/Logo';
import { Nav } from '../Nav';


import './Header.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getByQuery, init } from '../../features/allProductsSlice';
import { Modal } from '../Modal';

export function Header() {
  const { isHomePage, query, setQuery, setIsModalOpen } = useContext(globalContext);
  const user = useAppSelector(state => state.user.user)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      dispatch(init({ page: 1 }));
    }
  }, [query])

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter")
      if (query.trim()) {
        const value = query.trim().replace(/ /gi, "%20");
        dispatch(getByQuery(value));
        navigate('/catalog', { state: { hasQuery: true } });

      } else {
        dispatch(init({ page: 1 }));

      }
  }

  const handleCartClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!user?.email) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  }

  return (
    <header className={classNames(
      "page__header header",
      { 'header--home-page': isHomePage },
    )}>
      <Modal />
      <div className="header__wrapper">
        <div className="header__top">
          <Logo />
          <Nav />
          <div className="top-bar">
            <input
              type="text"
              className={classNames(
                "input input--search",
                {
                  'input--search--white': isHomePage,
                }
              )}
              onKeyUp={onKeyDownHandler}
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <NavLink
              to="favorites"
              title="Favorites"
              className={({ isActive }) => classNames(
                "top-bar__icon top-bar__icon--heart",
                {
                  'top-bar__icon--heart--active': isActive,
                  'top-bar__icon--heart--white': isHomePage,
                }
              )}
            />
            <NavLink
              to="profile"
              title="Profile"
              className={({ isActive }) => classNames(
                "top-bar__icon top-bar__icon--person",
                {
                  'top-bar__icon--person--active': isActive,
                  'top-bar__icon--person--white': isHomePage,
                }
              )}
            />
            <NavLink
              to="cart"
              title="Cart"
              className={({ isActive }) => classNames(
                "top-bar__icon top-bar__icon--cart",
                {
                  'top-bar__icon--cart--active': isActive,
                  'top-bar__icon--cart--white': isHomePage,
                }
              )}
              onClick={handleCartClick}
            />
          </div>
        </div>
        {isHomePage && (
          <div className="header__bottom">
            <h1 className="header__title">
              Crafting Memories with Fragrant Flowers:
              <br />
              A Story to Cherish
            </h1>
            <Link to='about-us' className="button button--with-arrow">
              Read more <span className="button__arrow"></span>
            </Link>
          </div>
        )
        }
      </div>
    </header>
  )
}
