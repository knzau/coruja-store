import ShopActionTypes from "./shopTypes";

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

export const searchCollections = (collectionsMap) => ({
  type: ShopActionTypes.SEARCH_COLLECTIONS,
  payload: collectionsMap,
});

export const toggleSearchFieldHidden = () => ({
  type: ShopActionTypes.SEARCH_HIDDEN,
});

