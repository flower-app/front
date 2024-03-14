import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import "./FavoritesPage.scss";

export default function FavoritesPage() {
  return (
    <div className="favorites-page">
      <div className="favorites-page__top">
        <h2 className="favorites-page__title">
          Favorites
        </h2>
        <Breadcrumbs />
      </div>
    </div>
  )
}
