import { log } from 'console';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductCard } from '../../components/ProductCard';
import { actions } from '../../features/allProductsSlice';
import { getProducts } from '../../helpers/api';
// import { product } from '../../helpers/sample';
// import { Product } from '../../helpers/types';
import "./CatalogPage.scss";

// const products = [
//   product,
//   product,
//   product,
//   product,
//   product,
//   product,
//   product,
//   product,
//   product,
// ]

export function CatalogPage() {
  // const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.allProducts);
    
  useEffect(() => {
    getProducts().then(data => dispatch(actions.set(data)));
    // getProducts().then(setProducts);
  }, [dispatch]);

  return (
    <div className="catalog-page">
      <div className="catalog-page__top">
        <h2 className="catalog-page__title">Catalog</h2>
        <Breadcrumbs />
      </div>
      <div className="catalog-page__content">
        <div className="catalog-page__filtres">

        </div>
        <div className="catalog-page__catalog">
          {products.map(currProduct => (
            <React.Fragment key={currProduct.id} >
              <ProductCard product={currProduct} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
