import classNames from 'classnames';
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { globalContext } from './helpers/globalContext';

// import './App.css';

function App() {

  return (
    <div className="page__app" id="app">
      <Header />

      <main className="page__main">
        <div className="page__wrapper">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
