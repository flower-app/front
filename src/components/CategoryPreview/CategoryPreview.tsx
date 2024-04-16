import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts, getProductsByProperty } from '../../helpers/api';
import { ProductFromServer, PropertyType } from '../../helpers/types';
import { Loader } from '../Loader';
import { ProductCard } from '../ProductCard/ProductCard';
import "./CategoryPreview.scss";

type Props = {
  isFirstBlock?: boolean,
  title: string;
  margin: string;
  reverse: boolean;
  propertyType?: PropertyType;
  propertyId?: number;
}

export const CategoryPreview: React.FC<Props> = ({ isFirstBlock, title, margin, reverse, propertyType, propertyId }) => {
  const [productsFromServer, setProductsFromServer] = useState<ProductFromServer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);


  useEffect(() => {
    setHasError(false)
    setIsLoading(true);
    if (propertyType && propertyId) {
      getProductsByProperty(propertyId, propertyType)
        .then(setProductsFromServer)
        .catch(() => setHasError(true))
        .finally(() => setIsLoading(false))
    } else {
      getAllProducts()
        .then(setProductsFromServer)
        .catch(() => setHasError(true))
        .finally(() => setIsLoading(false))
    }
  }, []);

  return (
    <div className="category-preview">
      <div
        className={classNames(
          "category-preview__wrapper",
          {
            'category-preview__wrapper--reverse': reverse,
            'category-preview__wrapper--isFirst': isFirstBlock,
          }
        )}
      >
        <h2
          className={`category-preview__title category-preview__title${margin}`}
        >
          {title}
        </h2>
        <div
          className={classNames(
            "category-preview__content",
            { 'category-preview__content--reverse': reverse }
          )}
        >
          {isLoading && <Loader />}
          <div
            className={classNames(
              "category-preview__gallery",
              { 'category-preview__gallery--reverse': reverse }
            )}
          >
            {hasError
              ? <p> Something went wrong </p>
              : (<>
                {productsFromServer
                  .slice(0, 3)
                  .map((currProduct, index) => {
                    return (
                      <React.Fragment key={currProduct.id}>
                        {(index === 0)
                          ? <ProductCard product={currProduct} />
                          : <ProductCard isSmall={true} product={currProduct} />}
                      </React.Fragment>
                    )
                  })
                }
              </>)}
          </div>

          <div className="category-preview__btn">
            <Link
              to='/catalog'
              className="button button--with-arrow"
            >
              See catalog <span className="button__arrow"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
