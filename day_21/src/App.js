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
  const [calories, setCalory] = useState([]);
  const addCalory = (cal) => {
    const newCalory = [...calories, cal];
    setCalory(newCalory);
  };
  return (
    <div className="App">
      <div className="content">
        <input
          type="text"
          placeholder="Add Food Item"
          className="input"
          onChange={(e) => {
            setnewInput(e.target.value);
          }}
          value={newInput}
        ></input>
        <input
          type="number"
          placeholder="Add Calory"
          className="input"
          onChange={(d) => {
            setCalory(d.target.value);
          }}
          value={calories}
        ></input>
        <button
          onClick={() => {
            addTodo(newInput);
            addCalory(newInput);
            setnewInput("");
          }}
        >
          add
        </button>
      </div>
      {todos.map((todo, index) => (
        <Todo
          todo={todo}
          key={index}
          todos={todos}
          setTodos={setTodos}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;
