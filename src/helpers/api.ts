import { ServerLogInResponse } from "../pages/AuthorizePage/LogInPage";
import { client } from "./fetchClient";
import { Cart, DescriptionData, LogInData, OrderFromServer, OrderInfo, ProductFromServer, PropertyType, User } from "./types";

// const API_URL = "http://localhost:3000/api";

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

export const logIn = (data: LogInData) => {
  return client.post<ServerLogInResponse>("auth/login", data);
};

export const signIn = (data: any) => {
  return client.post<User>("auth/registration", data);
};

export const getCart = () => {
  return client.get<Cart>("cart");
};

export const getUserByEmail = (userEmail: string) => {
  const data = {
    email: userEmail
  }
  return client.post<User>("users/by-email", data);
}

export const addToCart = (id: number, productQuantity: number) => {
  const data = {
  productId: id,
  quantity: productQuantity,
  }

  return client.post("cart", data);
}

export const deleteCartItem = (cartItemId: number) => {
  return client.delete("cart/cart-items/" + cartItemId);
}

export const updateCartItem = (cartItemId: number, newQuantity: number) => {
  const data = {
    quantity: newQuantity,
  };
  
  return client.put("cart/cart-items/" + cartItemId, data);
}

export const createOrder = (data: OrderInfo) => {
  return client.post("orders", data);
}

export const getAllPropertiesOptions = (property: string) => {
  return client.get<DescriptionData[]>(property)
}

export const getOrders = () => {
  return client.get<OrderFromServer[]>("orders");
}
