import { Product } from "./types";

const API_URL = "http://localhost:3000/api";

export function getProducts(): Promise<Product[]> {
  return fetch(`${API_URL}/products.json`).then(response => response.json());
}
