import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { userReducer } from "./user.reducer";
import { isDevMode } from "@angular/core";

export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
    user: userReducer
}

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];