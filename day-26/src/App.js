import "./App.css";
import { updatedEmail, updatedPass } from "./actions/action";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const email = useSelector((state) => state.EmailReducer);
  const password = useSelector((state) => state.PasswordReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Form</h1>
      <input
        
        type="text"
        placeholder="Enter Email"
        onChange={(e) => {
          dispatch(updatedEmail(e.target.value));
        }}
      ></input>
      <input
        
        type="text"
        placeholder="Enter Password"
        onChange={(e) => {
          dispatch(updatedPass(e.target.value));
        }}
      ></input>

      <h3>
        Email: <span className="email">{email}</span>
      </h3>
      <h3>
        Password: <span className="password">{password}</span>
      </h3>
    </div>
  );
}

export default App;
