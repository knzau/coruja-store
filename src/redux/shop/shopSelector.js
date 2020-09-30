import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectSearchHidden = createSelector(
  [selectShop],
  (shop) => shop.searchFieldHidden
);

export const selectCollectionsArray = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections)
);

export const selectCollectionsForPages = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);
