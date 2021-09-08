import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { SearchIcon } from "@primer/octicons-react";
import { useState, useEffect } from "react";

function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  const UpdatePlaceData = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=40c4ae47ddf64f718a5131051210108&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlaceData(data);
        console.log(data);
      });
  };

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
            <button className="btn btn-primary" onClick={UpdatePlaceData}>
              <SearchIcon size={18} />
            </button>
          </div>
          <div className="offset-md-4 col-12 col-md-4 weather">
            <div className="card">
              {placeData.location ? (
                <div className="internal-card">
                  <img src={placeData.current.condition.icon}></img>
                  <div className="temp">{placeData.current.temp_c}°c</div>
                  <div className="place">{placeData.location.name}</div>
                </div>
              ) : (
                <div className="internal-card">
                  <h1>Place not found</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
