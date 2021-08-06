import React from "react";

function Todo({ todo, setTodos, todos, index }) {
  return (
    <div className="todo">
      <div className="upper">
        <h1>{todo.value}</h1>
        <button
          onClick={() => {
            const newTodos = todos.filter((el, i) => i != index);
            setTodos(newTodos);
          }}
        >
          Delete
        </button>
      </div>
      <h2>
        You have consumed <span>{todo.cal}</span> calories.
      </h2>
    </div>
  );
}

export default Todo;
