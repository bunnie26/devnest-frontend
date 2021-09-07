import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Family from "./components/Family";

function App() {
  return (
    <div className="App">
      <Router>
        <ReactBootStrap.Navbar bg="dark" expand="lg" variant="dark" fixed="top">
          <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand as={Link} to="/" >
              The Originals
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
              <ReactBootStrap.Nav className="me-auto">
                <ReactBootStrap.Nav.Link as={Link} to="/components/Home">
                  Home
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link as={Link} to="/components/Family">
                  Family
                </ReactBootStrap.Nav.Link>
                {/* <ReactBootStrap.NavDropdown
                  title="Dropdown"
                  id="basic-nav-dropdown"
                >
                  <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                    Action
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                    Another action
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                    Something
                  </ReactBootStrap.NavDropdown.Item>

                </ReactBootStrap.NavDropdown> */}
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
        {/* <h1>welcome to new Orleans</h1> */}

        {/* ----------------------------------------------------------------------------------- */}
        <switch>
          <Route path="/components/Home" component={Home} />
          <Route path="/components/Family" component={Family} />
        </switch>
      </Router>
    </div>
  );
}

export default App;
