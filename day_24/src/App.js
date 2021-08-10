import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppContext from "./context/app-context";
import { useContext } from "react";

import AppState from "./context/AppState";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <AppState>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </AppState>
      </div>
    </Router>
  );
}

const Home = () => {
  const { login, setLogin } = useContext(AppContext);
  return (
    <div className="Home">
      <button
        onClick={() => {
          setLogin(!login);
        }}
      >
        {login ? "Log out" : "Log in"}
      </button>
      {login ? <h1>You are now Logged-in</h1> : <h1>Click the button to Log In</h1>}
    </div>
  );
};

export default App;
