import collectionItemActionTypes from "./collectionItemActionTypes";

const INITIAL_STATE = {
  collectionItemDetail: {},
  modalOpen: false,
};

const collectionItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case collectionItemActionTypes.CLOSE_ITEM_MODAL:
      return {
        ...state,
        collectionItemDetail: {},
        modalOpen: false,
      };
    case collectionItemActionTypes.OPEN_COLLECTION_ITEM:
      return {
        ...state,
        collectionItemDetail: { ...action.payload },
        modalOpen: true,
      };
    default:
      return state;
  }
};

export default collectionItemReducer;
