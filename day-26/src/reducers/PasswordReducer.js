const PasswordReducer = (state = "", action) => {
  if (action.type === "PASSWORD") {
    return action.text;
  }
  return state;
};
export default PasswordReducer;
