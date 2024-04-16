import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCart } from "../helpers/api";
import { Cart } from "../helpers/types";

type State = {
  cart: Cart | null;
  isLoading: boolean;
  hasError: boolean;
};

const initialState: State = {
  cart: null,
  isLoading: false,
  hasError: false,
};

export const init = createAsyncThunk(
  "cart/fetch",
  () => {
    return getCart();
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state: State) => {
      state.isLoading = true;
    });
    builder.addCase(
      init.fulfilled,
      (state: State, action: PayloadAction<Cart>) => {
        state.isLoading = false;
        state.cart = action.payload;
      }
    );
    builder.addCase(init.rejected, (state: State) => {
      state.hasError = true;
      state.isLoading = false;
    });
  },
});

export const actions = cartSlice.actions;
export default cartSlice.reducer;
