import wishlistActionTypes from "./wishlistActionTypes";
import { addItemToWishlist, removeWishlistItem } from "./wishlistUtils";

const INITIAL_STATE = {
  wishlistItems: [],
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case wishlistActionTypes.ADD_ITEM_TO_WISHLIST:
      return {
        ...state,
        wishlistItems: addItemToWishlist(state.wishlistItems, action.payload),
      };
    case wishlistActionTypes.CLEAR_ITEMS_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: [],
      };
    case wishlistActionTypes.REMOVE_ITEM_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: removeWishlistItem(state.wishlistItems, action.payload),
      };
    default:
      return state;
  }
};

export default wishlistReducer;
