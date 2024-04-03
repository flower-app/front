import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProductById } from "../helpers/api";
import { ProductFromServer } from "../helpers/types";

type State = {
  currentProduct: ProductFromServer | null;
  isLoading: boolean;
  hasError: boolean;
};

const initialState: State = {
  currentProduct: null,
  isLoading: false,
  hasError: false,
};

export const init = createAsyncThunk("currentProduct/fetch", (productId: number) => {
  return getProductById(productId);
});

export const currentProductSlice = createSlice({
  name: "currentProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state: State) => {
      state.isLoading = true;
    });
    builder.addCase(
      init.fulfilled,
      (state: State, action: PayloadAction<ProductFromServer>) => {
        state.isLoading = false;
        state.currentProduct = action.payload;
        // state.products.push(...action.payload);
      }
    );
    builder.addCase(init.rejected, (state: State) => {
      state.hasError = true;
      state.isLoading = false;
    });
  },
});

export const actions = currentProductSlice.actions;
export default currentProductSlice.reducer;
