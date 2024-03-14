import React, { createContext, useMemo } from 'react'
import { useLocation } from 'react-router-dom';

type Props = {
  children: React.ReactNode,
};

const defaultValue = {
  isHomePage: true,
};

export const PathnameContext = createContext(defaultValue);

export const PathnameProvider: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  const value = useMemo(() => ({
    isHomePage,
  }), [location.pathname])

  return (
    <PathnameContext.Provider value={value}>
      {children}
    </PathnameContext.Provider>
  )
}
