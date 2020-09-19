import { createSelector } from "reselect";


const selectCollection = (state) => state.collectionItem;

export const selectModalOpen = createSelector(
  [selectCollection],
  (collectionItem) => collectionItem.modalOpen
);

export const selectProductDetail = createSelector(
  [selectCollection],
  (collectionItem) => collectionItem.collectionItemDetail
);
