import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { product } from '../../helpers/sample';
import { ProductCard } from '../ProductCard/ProductCard';
import "./CategoryPreview.scss";

type Props = {
  isFirstBlock?: boolean,
  title: string;
  margin: string;
  reverse: boolean;
}

export const CategoryPreview: React.FC<Props> = ({isFirstBlock, title, margin, reverse }) => {

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
          <div
            className={classNames(
              "category-preview__gallery",
              { 'category-preview__gallery--reverse': reverse }
            )}
          >
            <ProductCard product={product} />
            <ProductCard isSmall={true} product={product} />
            <ProductCard isSmall={true} product={product} />
          </div>

          <div className="category-preview__btn">
            <Link to='catalog' className="button button--with-arrow">
              See catalog <span className="button__arrow"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
