import React, { useContext, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Pagination } from '../../components/Pagination';
import { ProductCard } from '../../components/ProductCard';
import { getByQuery, init } from '../../features/allProductsSlice';
import { globalContext } from '../../helpers/globalContext';

import "./CatalogPage.scss";

import { Loader } from '../../components/Loader';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Select } from '../../components/Select';
import { ProductFromServer, PropertyType } from '../../helpers/types';

export enum SortByPriceParams {
  None = '',
  Cheapest = '&sort=price',
  Expensive = '&sort=price,DESC',
}

export function CatalogPage() {
  const { isLoading, hasError } = useAppSelector(state => state.products);
  const allProducts = useAppSelector(state => state.products.products);
  const dispatch = useAppDispatch();
  const [filtersUsed, setFiltersUsed] = useState(false);
  const [sortByPrice, setSortByPrice] = useState(SortByPriceParams.None)
  const [currentPage, setCurrentPage] = useState(0);
  const { query, setQuery } = useContext(globalContext);

  // useEffect(() => {
  //   if (!query) {
  //     dispatch(init({ page: currentPage, sort: sortByPrice }));
  //   }
  // }, []);

  useEffect(() => {
    setCurrentPage(0)
  }, [sortByPrice])

  useEffect(() => {
    if (query) {
      if (query.trim()) {
        const value = query.trim().replace(/ /gi, "%20");
        dispatch(getByQuery(value));
      }
    } else {
      dispatch(init({ page: currentPage, sort: sortByPrice }));
    }
  }, [currentPage, sortByPrice, filtersUsed]);

  function onResetFilters() {
    dispatch(init({ page: 0 }));
    setFiltersUsed(false);
    setSortByPrice(SortByPriceParams.None);
    setQuery('');
  }

  return (
    <div className="catalog-page">
      <div className="catalog-page__top">
        <h2 className="catalog-page__title">Catalog</h2>
        <Breadcrumbs />
      </div>
      <div className="catalog-page__content">
        <div className="catalog-page__filtres">
            <Select
              label="Color"
              property={PropertyType.color}
              searchName="colors"
              setFiltersUsed={setFiltersUsed}
            />
            <Select
              label="Type"
              property={PropertyType.type}
              searchName="types"
              setFiltersUsed={setFiltersUsed}
            />
            <Select
              label="Price"
              setSortByPrice={setSortByPrice}
              propertyList={Object.entries(SortByPriceParams)}
              setFiltersUsed={setFiltersUsed}
            />
            <Select
              label="Size"
              property={PropertyType.size}
              searchName="sizes"
              setFiltersUsed={setFiltersUsed}
            />
            <Select
              label="Season"
              property={PropertyType.season}
              searchName="seasons"
              setFiltersUsed={setFiltersUsed}
            />
            {(filtersUsed || query) && (
            <button
              onClick={onResetFilters}
              className="catalog-page__reset-btn"
            >
              Reset
            </button>
            )}
        </div>

        {isLoading && <Loader />}

        {!isLoading && hasError && (
          <p>Something went wrong...</p>
        )}

        {!isLoading && !hasError && allProducts.length > 0 && (
          <>
            <div className="catalog-page__catalog">
              {allProducts.map(currProduct => (
                <React.Fragment key={currProduct.id} >
                  <ProductCard product={currProduct} />
                </React.Fragment>
              ))}
            </div>
              {(!filtersUsed && !query) && (
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
              )}
          </>)}
        
        {!isLoading && !hasError && allProducts.length === 0 && (
          <p>There is no products with this params...</p>
        )}
      </div>
    </div>
  )
}

