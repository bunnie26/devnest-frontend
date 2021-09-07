const addItem = (item) => {
  return {
    type: "ADD_TODO",
    payload: item,
  };
};
const removeItem = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

export { addItem, removeItem };
