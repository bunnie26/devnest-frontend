import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="Home">
      <h1>This is Home Page</h1>
    </div>
  );
};

export default App;
