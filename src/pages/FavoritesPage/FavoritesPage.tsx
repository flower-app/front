import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductCard } from '../../components/ProductCard';
import { Product } from '../../helpers/types';
import "./FavoritesPage.scss";

export default function FavoritesPage() {
  const favorites = useAppSelector(state => state.favorites)

  return (
    <div className="favorites-page">
      <div className="favorites-page__top">
        <h2 className="favorites-page__title">
          Favorites
        </h2>
        <Breadcrumbs />
      </div>
      <div className="favorites-page__catalog">
        {favorites.map((product: Product) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
