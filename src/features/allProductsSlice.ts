import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../helpers/types";


const initialState: Product[] = []

export const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    set: (allProducts, action: PayloadAction<Product[]>) => {
      action.payload.forEach((product) => allProducts.push(product));
    },
  },
});

export const actions = allProductsSlice.actions;
export default allProductsSlice.reducer;
