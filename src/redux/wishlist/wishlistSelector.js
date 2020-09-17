import { createSelector } from "reselect";

const selectWishlist = (state) => state.wishlist;


export const selectwishlistItems = createSelector(
  [selectWishlist],
  (wishlist) => wishlist.wishlistItems
);

export const selectwishlistItemsCount = createSelector(
    [selectwishlistItems],
    (wishlist) => wishlist.length
)