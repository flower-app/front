import classNames from 'classnames';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { globalContext } from '../../helpers/globalContext';
import "./Modal.scss";


export const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(globalContext);

  const closeHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const div = e.target as HTMLDivElement;
    if (div.classList.contains("modal")) {
      setIsModalOpen(false);
    }
  };

  return isModalOpen ? (
    <div
      className="modal"
      onClick={closeHandler}
    >
      <div className="modal__wrapper">
        <div className="modal__top">
          <p className="modal__text">
            Please sign up or log in to your account to like this product.
          </p>
          <button
            aria-label="close modal window"
            className="modal__close-btn"
            onClick={() => setIsModalOpen(false)}
          ></button>
        </div>

        <div className="modal__buttons">
          <Link to="/profile/sign-in" className="button">
            Sign Up
          </Link>
          <Link to="/profile/log-in" className="button button--white">
            Log In
          </Link>
        </div>
      </div>
    </div>
  ) : null;
}
