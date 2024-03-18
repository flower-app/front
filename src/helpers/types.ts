export type Product = {
  id: number;
  name: string;
  product_name_Id: string;
  color: Color[];
  type: ProductType;
  season: Season;
  contains: string[];
  description: string;
  price: number;
  discount: number;
  img: string;
};

export type CartItem = {
  id: number;
  name: string;
  price: number;
  discountDeducted: number;
  amount: number;
  img: string;
  product_name_Id: string;
};

export type Color = "red" | "yellow" | "pink" | "white" | "purple";

export type ProductType = "mono" | "mixed" | "potted";

export type Season = "winter" | "spring" | "summer" | "fall";