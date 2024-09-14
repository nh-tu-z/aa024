import { createSelector } from "@ngrx/store";
import { User } from "../reducers/user.reducer";

export interface AppState {
    user: User;
}

export const selectedUser = (state: AppState) => state.user;

export const selectFeatureCount = createSelector(
    selectedUser,
    (user: User) => user
  );