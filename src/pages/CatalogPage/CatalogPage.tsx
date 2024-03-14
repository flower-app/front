import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductCard } from '../../components/ProductCard';
import { product } from '../../helpers/sample';
import "./CatalogPage.scss";

const products = [
  product,
  product,
  product,
  product,
  product,
  product,
  product,
  product,
  product,
]

export function CatalogPage() {
  return (
    <div className="catalog-page">
      <h2 className="catalog-page__title">Catalog</h2>
      <Breadcrumbs />
      <div className="catalog-page__content">
        <div className="catalog-page__filtres">

        </div>
        <div className="catalog-page__catalog">
          {products.map(currProduct => (
            <ProductCard product={currProduct} />
          ))}
        </div>
      </div>
    </div>
  )
}
