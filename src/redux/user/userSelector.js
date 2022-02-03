import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user && user.currentUser
);

export const selectCurrentUserName = createSelector(
  [selectCurrentUser],
  (user) => user && user.currentUser?.displayName
);


