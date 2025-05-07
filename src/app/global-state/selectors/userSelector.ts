import { createSelector } from "@ngrx/store";
import { UserState } from "../reducers/user.reducer";
import { AppState } from "../reducers";

export const selectedUser = (state: AppState) => state.user;

export const selectFeatureCount = createSelector(
    selectedUser,
    (user: UserState) => user
);