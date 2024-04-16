import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductFromServer } from "../helpers/types"

const dataFromStorage = localStorage.getItem('favorites')

const initialState: ProductFromServer[] = dataFromStorage ? JSON.parse(dataFromStorage) : [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    add: (favorites, action: PayloadAction<ProductFromServer>) => {
      favorites.push(action.payload)
    },
    remove: (favorites, action: PayloadAction<number>) => {
      return favorites.filter((product) => product.id !== action.payload);
    },
  },
});

export const actions = favoritesSlice.actions;
export default favoritesSlice.reducer;
