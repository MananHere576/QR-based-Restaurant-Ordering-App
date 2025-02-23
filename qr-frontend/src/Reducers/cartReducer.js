import { ADD_ITEM } from "../Actions/action";
const initialState = {};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const { tableId, item } = action.payload;
      const tableCart = state[tableId] || [];
      return {
        ...state,
        [tableId]: [...tableCart, item],
      };
    default:
      return state;
  }
};

export default cartReducer;
