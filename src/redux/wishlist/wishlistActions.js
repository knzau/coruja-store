import wishlistActionTypes from "./wishlistActionTypes";

export const addItemWishlist = (item) => ({
  type: wishlistActionTypes.ADD_ITEM_TO_WISHLIST,
  payload: item,
});

export const clearItemFromWishlist = (item) => ({
  type: wishlistActionTypes.CLEAR_ITEM_FROM_WISHLIST,
  payload: item,
});

export const removeWishlistItem = (item) => ({
  type: wishlistActionTypes.REMOVE_ITEM_FROM_WISHLIST,
  payload: item,
});
