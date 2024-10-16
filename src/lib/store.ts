import { apiSlice } from "@/app/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import filterReducer from "./features/filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
