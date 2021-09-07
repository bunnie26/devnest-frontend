const EmailReducer = (state = "", action) => {
    if (action.type === "EMAIL") {
      return action.text;
    }
    return state;
  };
  export default EmailReducer;