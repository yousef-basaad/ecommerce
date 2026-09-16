import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TCartItem } from "@customTypes/cart";
import type { TProduct } from "@customTypes/product";
import { loadCart } from "@util/cartStorage";

export interface ICartState {
  items: TCartItem[];
}

const initialState: ICartState = {
  items: loadCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TProduct>) => {
      const existing = state.items.find((item) => item.product.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((item) => item.product.id !== action.payload);
    },
    incrementItem: (state, action: PayloadAction<string | number>) => {
      const item = state.items.find((item) => item.product.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementItem: (state, action: PayloadAction<string | number>) => {
      const item = state.items.find((item) => item.product.id === action.payload);
      if (!item) return;
      item.quantity -= 1;
      if (item.quantity <= 0) {
        state.items = state.items.filter((i) => i.product.id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, incrementItem, decrementItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
