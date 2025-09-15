import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { UserState, userReducer } from "./user.reducer";
import { isDevMode } from "@angular/core";
import { cartReducer, CartState } from "./cart.reducer";

export interface AppState {
    user: UserState;
    cart: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
    user: userReducer,
    cart: cartReducer
}

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];