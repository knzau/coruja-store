import { searchCollectionItem } from "./shopUtils";
import ShopActionTypes from "./shopTypes";

const INITIAL_STATE = {
  searchFieldHidden: true,
  collections: {},
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    case ShopActionTypes.SEARCH_COLLECTIONS:
      return {
        ...state,
        collections: searchCollectionItem(state.collections, action.payload),
      };
    case ShopActionTypes.SEARCH_HIDDEN:
      return {
        ...state,
        searchFieldHidden: !state.searchFieldHidden,
      };
    default:
      return state;
  }
};

export default shopReducer;
