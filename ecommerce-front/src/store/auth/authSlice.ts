import { createSlice } from "@reduxjs/toolkit";
import type { TLoading } from "@customTypes/shared";
import type { TAuthUser } from "@customTypes/user";
import actLogin from "./act/actLogin";
import actRegister from "./act/actRegister";
import { loadUser } from "@util/authStorage";

export interface IAuthState {
    user: TAuthUser | null;
    loading: TLoading;
    error: string | null;
}

const initialState: IAuthState = {
    user: loadUser(),
    loading: "idle",
    error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(actLogin.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actLogin.fulfilled, (state,action) => {
            state.loading = "succeeded";
            state.user = action.payload;
        })
        .addCase(actLogin.rejected, (state,action) => {
            state.loading = "failed";
           if(action.payload && typeof action.payload === "string"){
            state.error = action.payload;
           }
        })
        .addCase(actRegister.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actRegister.fulfilled, (state,action) => {
            state.loading = "succeeded";
            state.user = action.payload;
        })
        .addCase(actRegister.rejected, (state,action) => {
            state.loading = "failed";
           if(action.payload && typeof action.payload === "string"){
            state.error = action.payload;
           }
        })
    },
});

export const { logout } = authSlice.actions;
export { actLogin, actRegister };
export default authSlice.reducer;
