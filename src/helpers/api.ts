import { client } from "./fetchClient";
import { DescriptionData, Product, ProductFromServer, PropertyType } from "./types";

// const API_URL = "http://localhost:3000/api";

// export function getProducts(): Promise<Product[]> {
//   return fetch(`${API_URL}/products.json`).then(response => response.json());
// }

export function getAllProducts(): Promise<ProductFromServer[]> {
  return client.get<ProductFromServer[]>('products');
}

export function getProductsByProperty(propertyId: number = 0, propertyType: PropertyType): Promise<ProductFromServer[]> {
  return client.get<ProductFromServer[]>(`products/${propertyId}/${propertyType}`);
}

export function getProductById(id: number): Promise<ProductFromServer> {
  return client.get('products/' + id);
}

export function getPageOfProducts(pageNumber: number, sortByPrice = ''): Promise<ProductFromServer[]> {
  return client.get<ProductFromServer[]>('products?page='+ pageNumber + '&size=9' + sortByPrice);
}

export function getProductsByQuery(query: string): Promise<ProductFromServer[]> {
  return client.get<ProductFromServer[]>(
    "products/search?keyword=" + query
  );
}

export function getPropertyValue(property: string, id: number = 0) {
  return client.get<DescriptionData>(
    property + '/' + id
  );
}

export function getDecsriptionData(title: string, id: number) {
  return client.get<DescriptionData>(`${title}/${id}`)
}
