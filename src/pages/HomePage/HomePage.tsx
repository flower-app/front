import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CategoryPreview } from '../../components/CategoryPreview/CategoryPreview';
import { init } from '../../features/allProductsSlice';
import { getAllProducts } from '../../helpers/api';
import { ProductFromServer, PropertyType } from '../../helpers/types';
// import { getProducts } from '../../helpers/api';
// import { Product } from '../../helpers/types';
import "./HomePage.scss";



export default function HomePage() {
  const dispatch = useAppDispatch();

  return (
    <div className="home-page">
      <section className="home-page__section">
        <CategoryPreview
          isFirstBlock={true}
          title='Our Popular Bouquet Collection'
          margin=''
          reverse={true}
        />
      </section>

      <section className="home-page__section">
        <CategoryPreview
          title='20% Off Your First Purchase at Our Store!'
          margin='--margin-left'
          reverse={false}
          propertyType={PropertyType.discount}
          propertyId={2}
        />
      </section>

      <section className="home-page__section">
        <CategoryPreview
          title='Greening Your Space, Plant for Your Home'
          margin='--margin-right'
          reverse={true}
          propertyType={PropertyType.type}
          propertyId={2}
        />
      </section>
    </div>
  )
}
