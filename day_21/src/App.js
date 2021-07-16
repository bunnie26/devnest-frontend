import Todo from "./components/todo";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (value) => {
    const newTodo = [...todos, value];
    setTodos(newTodo);
  };
  const [newInput, setnewInput] = useState("");
  return (
    <div className="App">
      <div className = "content">
      <input
        type="text"
        className="input"
        onChange={(e) => {
          setnewInput(e.target.value);
        }}
        value = {newInput}
      ></input>
      <button
        onClick={() => {
          addTodo(newInput);
          setnewInput("");
        }}
      >
        add
      </button>
      </div>
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} todos = {todos} setTodos = {setTodos} index = {index}/>
      ))}
    </div>
  );
}

export default App;
