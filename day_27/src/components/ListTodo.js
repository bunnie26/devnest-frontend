import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../actions/index";
// import { useSelector } from "react-redux";
function ListTodo() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo, index) => (
        <div className="Todo">
          <h2>{todo.title}</h2>
          <button
            onClick={() => {
              dispatch(removeItem(index));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListTodo;
