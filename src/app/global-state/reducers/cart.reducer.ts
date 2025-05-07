import { createReducer, on } from "@ngrx/store";
import { CartItem } from "../../models/cart-item";
import { addToCart, removeFromCart } from "../actions/cart.actions";

export type CartState = {
    cartItems: CartItem[],
}

const initCartState: CartState = {
    cartItems: [],
}

export const cartReducer = createReducer(
    initCartState,
    on(addToCart, (state, { id, name, count }) => {
        if (!state.cartItems.find(i => i.id === id)) {
            return { ...state, cartItems: [...state.cartItems, { id, name, count }] }
        }
        return state
    }),
    on(removeFromCart, (state, { id }) => {
        return { ...state, cartItems: state.cartItems.filter(i => i.id !== id) }
    })
)