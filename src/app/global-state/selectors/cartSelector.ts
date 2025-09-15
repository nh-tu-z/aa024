import { createSelector } from "@ngrx/store";
import { CartItem } from "../../models/cart-item";
import { AppState } from "../reducers";
import { CartState } from "../reducers/cart.reducer";


export const cart = (state: AppState) => state.cart;

export const selectCart = createSelector(
    cart,
    (cart: CartState) => cart
);