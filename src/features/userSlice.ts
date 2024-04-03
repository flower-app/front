import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../helpers/types";

// const initialState: User = {
//     id: 5,
//     email: 'null',
//   numberPhone: 'null',
//   firstName: 'null',
//     lastName: 'null',
// };
// const initialState: User = {
//     id: null,
//     email: null,
//   numberPhone: null,
//   firstName: null,
//     lastName: null,
// };
type State = {
  user: User | null,
}

const initialState: State = {
  user: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const actions = userSlice.actions;
export default userSlice.reducer;
