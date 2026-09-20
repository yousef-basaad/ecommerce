import { configureStore } from '@reduxjs/toolkit'
import categories from './categories/categoriesSlice'
import products from './products/productsSlice'
import cart from './cart/cartSlice'
import auth from './auth/authSlice'
import { saveCart } from '@util/cartStorage'
import { saveUser } from '@util/authStorage'

export const store = configureStore({
  reducer: {categories,products,cart,auth},
})

let previousCartItems = store.getState().cart.items;
let previousAuthUser = store.getState().auth.user;
store.subscribe(() => {
  const state = store.getState();
  if (state.cart.items !== previousCartItems) {
    previousCartItems = state.cart.items;
    saveCart(state.cart.items);
  }
  if (state.auth.user !== previousAuthUser) {
    previousAuthUser = state.auth.user;
    saveUser(state.auth.user);
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store;
