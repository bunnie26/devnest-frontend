const todoReducer = (state = [], action) => {
  if (action.type === "ADD_TODO") {
    return [...state, action.payload];
  } else if (action.type === "DELETE_TODO") {
    return state.filter((item, index) => index !== action.payload);
  }
  return state;
};
export default todoReducer;
