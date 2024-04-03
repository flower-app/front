import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import "./AuthorizePage.scss";


export default function AuthorizePage() {

  return (
    <div className="authorize-page">
      <Outlet />
    </div>
  )
}
