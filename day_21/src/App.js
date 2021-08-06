import "./App.css";
import { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setvalue] = useState("");
  const [cal, setCal] = useState("");
  return (
    <div className="App">
      <div className="main">
        <input
          type="text"
          onChange={(e) => {
            setvalue(e.target.value);
          }}
          value={value}
          required
          placeholder="Enter Item"
        ></input>
        <input
          type="number"
          onChange={(e) => {
            setCal(e.target.value);
            console.log(cal);
          }}
          value={cal}
          required
          placeholder="Enter Calorie"
        ></input>
        <button
          onClick={() => {
            setTodos([...todos, { value: value, cal: cal }]);
            setvalue("");
            setCal("");
          }}
        >
          +
        </button>
      </div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;
