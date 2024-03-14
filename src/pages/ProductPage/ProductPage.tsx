import React from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import "./ProductPage.scss";

export function ProductPage() {
  const { product_name_Id } = useParams();

  return (
    <div className="product-page">
      ProductPage
      <Breadcrumbs />
    </div>
  )
}
