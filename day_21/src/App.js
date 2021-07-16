import Todo from "./components/todo";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["how you doin"]);
  const addTodo = (value) => {
    const newTodo = [...todos, value];
    setTodos(newTodo);
  };
  const [newInput, setnewInput] = useState();
  return (
    <div className="App">
      <input type="text" className="input" onChange= {(e)=>{
        setnewInput(e.target.value)
      }}></input>
      <button
        onClick={() => {
          addTodo(newInput);
        }}
      >
        add
      </button>
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} />
      ))}
    </div>
  );
}

export default App;
