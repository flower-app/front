import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { CategoryPreview } from '../../components/CategoryPreview/CategoryPreview';
import { PropertyType } from '../../helpers/types';
import "./HomePage.scss";



export default function HomePage() {
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
