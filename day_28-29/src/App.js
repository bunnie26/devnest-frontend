import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { SearchIcon } from "@primer/octicons-react";
import { useState, useEffect } from "react";

function App() {
  const [place, setPlace] = useState("");

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=40c4ae47ddf64f718a5131051210108&q=jaipur"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });
  return (
    <div className="App">
      <div className="container search">
        <div className="row">
          <div className="col-12 form">
            <input
              type="text"
              placeholder="Enter City Name"
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            ></input>
            <button className="btn btn-primary">
              <SearchIcon size={18} />
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
