import React, { useState } from "react";

function Todo({ todo, setTodos, todos, index }) {
  const [edit, setEdit] = useState(false);
  const [edititem, setEdititem] = useState(todo.value);
  const [editcal, setEditcal] = useState(todo.cal);
  console.log(todos);
  return (
    <>
      <div className="todo">
        <div className="upper">
          {!edit ? (
            <h1>{todo.value}</h1>
          ) : (
            <div className="edit-input">
              <input
                type="text"
                value={edititem}
                onChange={(e) => {
                  setEdititem(e.target.value);
                }}
              ></input>{" "}
              <input
                type="number"
                value={editcal}
                onChange={(e) => {
                  setEditcal(e.target.value);
                }}
              ></input>
            </div>
          )}
          <div className="buttons">
            <button
              onClick={() => {
                const newTodos = todos.filter((el, i) => i != index);
                setTodos(newTodos);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                if (edit) {
                  const temp = [...todos];
                  temp[index].value = edititem;
                  temp[index].cal = editcal;
                  setTodos(temp);
                  setEditcal(todo.cal);
                  setEdititem(todo.value);
                }
                setEdit((state) => !state);
              }}
            >
              {edit ? "Save" : "Edit"}
            </button>
          </div>
        </div>
        <h2>
          You have consumed <span>{todo.cal}</span> calories.
        </h2>
      </div>
    </>
  );
}

export default Todo;
