import { CartItem, CartState } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const saveCartToLocalStorage = (state: CartState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("algostar_cart", JSON.stringify(state.items));
  }
};

const initialState: CartState = {
  items: [],
  isInitialized: false,
};

const cartSlice = createSlice({
  name: "algostar_cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      saveCartToLocalStorage(state);
    },
    updateQuantity: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      }
      saveCartToLocalStorage(state);
    },
    initializeCart: (state) => {
      if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem("algostar_cart");
        if (savedCart) {
          state.items = JSON.parse(savedCart);
        }
      }
      state.isInitialized = true;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, initializeCart } =
  cartSlice.actions;
export default cartSlice.reducer;
