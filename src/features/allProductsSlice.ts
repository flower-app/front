import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPageOfProducts, getProductsByProperty, getProductsByQuery } from "../helpers/api";
import { CatalogPageParams, ProductFromServer, PropertyType } from "../helpers/types";

type State = {
  products: ProductFromServer[],
  isLoading: boolean,
  hasError: boolean,
}

const initialState: State = {
  products: [],
  isLoading: false,
  hasError: false,
};

export const init = createAsyncThunk("products/fetch", (params: CatalogPageParams) => {
  return getPageOfProducts(params.page, params.sort);
});

export const getByQuery = createAsyncThunk("products/getByQuery", (query: string) => {
  return getProductsByQuery(query);
});

export type PropertyParams = {
  id: number;
  propertyType: PropertyType;
};

export const getByProperty = createAsyncThunk(
  "products/getByProperty",
  (propertyParams: PropertyParams) => {
    return getProductsByProperty(propertyParams.id, propertyParams.propertyType);
  }
);

export const allProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state: State) => {
      state.isLoading = true;
    });
    builder.addCase(init.fulfilled, (state: State, action: PayloadAction<ProductFromServer[]>) => {
      state.isLoading = false;
      state.hasError = false;
      state.products = action.payload;
    })
    builder.addCase(init.rejected, (state: State,) => {
      state.hasError = true;
      state.isLoading = false;
    });
    builder.addCase(getByProperty.pending, (state: State) => {
      state.isLoading = true;
    });
    builder.addCase(
      getByProperty.fulfilled,
      (state: State, action: PayloadAction<ProductFromServer[]>) => {
        state.isLoading = false;
         state.hasError = false;
        state.products = action.payload;
      }
    );
    builder.addCase(getByProperty.rejected, (state: State) => {
      state.hasError = true;
      state.isLoading = false;
    });
    builder.addCase(getByQuery.pending, (state: State) => {
      state.isLoading = true;
    });
    builder.addCase(
      getByQuery.fulfilled,
      (state: State, action: PayloadAction<ProductFromServer[]>) => {
        state.isLoading = false;
        state.hasError = false;
        state.products = action.payload;
      }
    );
    builder.addCase(getByQuery.rejected, (state: State) => {
      state.hasError = true;
      state.isLoading = false;
    });
  },
});

export const actions = allProductsSlice.actions;
export default allProductsSlice.reducer;
