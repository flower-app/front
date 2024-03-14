import classNames from 'classnames';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { PathnameContext } from '../../helpers/PathnameContext';
import Logo from '../Logo/Logo';
import { Nav } from '../Nav';
import './Header.scss';

export function Header() {
  const location = useLocation();
  const { isHomePage } = useContext(PathnameContext);

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    setSearchValue('');
  }, [location.pathname]);

  const searchInputHandler = () => {
  }

  return (
    <header className={classNames(
      "page__header header",
      { 'header--home-page': isHomePage },
    )}>
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
              onKeyDown={searchInputHandler}
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
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
            />
          </div>
        </div>
        {isHomePage && (
          <div className="header__bottom">
            <h1 className="header__title">
              Crafting Memories with Fragrant Flowers:
              <br/>
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
