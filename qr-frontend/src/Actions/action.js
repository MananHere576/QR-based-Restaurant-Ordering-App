//action types
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

// action creators
export const addItemToCart = (tableId, item) => ({
  type: ADD_ITEM,
  payload: { tableId, item },
});

export const removeItemFromCart = (tableId, itemId) => ({
  type: DELETE_ITEM,
  payload: { tableId, itemId },
});
