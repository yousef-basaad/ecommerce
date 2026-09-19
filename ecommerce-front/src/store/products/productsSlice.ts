import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "../products/actGetProductsByCatPrefix";
import actSearchProducts from "../products/actSearchProducts";
import actGetProductById from "../products/actGetProductById";
import type { TLoading } from "@customTypes/shared";
import type { TProduct} from "@customTypes/product";

export interface IProductsState {
    records: TProduct[];
    loading: TLoading;
    error: string | null;
    current: TProduct | null;
    currentLoading: TLoading;
    currentError: string | null;
}

const initialState: IProductsState = {
    records: [],
    loading: "idle",
    error: null,
    current: null,
    currentLoading: "idle",
    currentError: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(actGetProductsByCatPrefix.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actGetProductsByCatPrefix.fulfilled, (state,action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        })
        .addCase(actGetProductsByCatPrefix.rejected, (state,action) => {
            state.loading = "failed";
           if(action.payload && typeof action.payload === "string"){
            state.error = action.payload;
           }
        })
        builder
        .addCase(actSearchProducts.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actSearchProducts.fulfilled, (state,action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        })
        .addCase(actSearchProducts.rejected, (state,action) => {
            state.loading = "failed";
           if(action.payload && typeof action.payload === "string"){
            state.error = action.payload;
           }
        })
        builder
        .addCase(actGetProductById.pending, (state) => {
            state.currentLoading = "pending";
            state.currentError = null;
        })
        .addCase(actGetProductById.fulfilled, (state,action) => {
            state.currentLoading = "succeeded";
            state.current = action.payload;
        })
        .addCase(actGetProductById.rejected, (state,action) => {
            state.currentLoading = "failed";
           if(action.payload && typeof action.payload === "string"){
            state.currentError = action.payload;
           }
        })
    },
});

export {actGetProductsByCatPrefix, actSearchProducts, actGetProductById}
export default productsSlice.reducer;
