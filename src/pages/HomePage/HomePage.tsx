import React, { useEffect, useState } from 'react';
import { CategoryPreview } from '../../components/CategoryPreview/CategoryPreview';
import { getProducts } from '../../helpers/api';
import { Product } from '../../helpers/types';
import "./HomePage.scss";

export default function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts)
  }, []);

  return (
    <div className="home-page">
      <section className="home-page__section">
        <CategoryPreview
          isFirstBlock={true}
          title='Our Popular Bouquet Collection'
          margin=''
          reverse={true}
          products={products.slice(0, 3)}
        />
      </section>

      <section className="home-page__section">
        <CategoryPreview
          title='20% Off Your First Purchase at Our Store!'
          margin='--margin-left'
          reverse={false}
          products={products.slice(3, 6)}
        />
      </section>

      <section className="home-page__section">
        <CategoryPreview
          title='Greening Your Space, Plant for Your Home'
          margin='--margin-right'
          reverse={true}
          products={products.slice(6, 9)}
        />
      </section>
    </div>
  )
}
