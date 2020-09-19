import collectionItemActionTypes from "./collectionItemActionTypes";

export const closeProductDetailModal = (item) => ({
  type: collectionItemActionTypes.CLOSE_ITEM_MODAL,
  payload: item
});

export const openCollectionItem = (item) => ({
  type: collectionItemActionTypes.OPEN_COLLECTION_ITEM,
  payload: item,
});
