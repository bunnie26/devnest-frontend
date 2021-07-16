const Todo = ({ todo, setTodos, todos, index }) => {
  return (
    <div className="gg">
      <h1>{todo}</h1>
      <button
        onClick={() => {
          const newTodos = todos.filter((el, i) => i != index);
          setTodos(newTodos);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default Todo;
