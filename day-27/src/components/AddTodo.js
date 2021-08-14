import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/index";
function AddTodo() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="main">
      <input
        type="text"
        required
        placeholder="Add Todo..."
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      ></input>
      {item ? (
        <button
          onClick={() => {
            console.log(item);
            dispatch(
              addItem({
                title: item,
                done: false,
              })
            );
            setItem("");
          }}
        >
          Add
        </button>
      ) : (
        <button>Add</button>
      )}
    </div>
  );
}

export default AddTodo;
