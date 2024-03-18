import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from "../features/favoritesSlice";
import cartItemsReducer from "../features/cartItemsSlice";
import allProductsReduser from "../features/allProductsSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


import { combineReducers } from "redux";

  
  const rootReducer = combineReducers({
    favorites: favoritesReducer,
    cartItems: cartItemsReducer,
    allProducts: allProductsReduser,
    // user: userReducer,
  });
  
  const persistConfig = {
    key: "root",
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
  });
  
export const persistor = persistStore(store);
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  