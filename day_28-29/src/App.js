import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { SearchIcon } from "@primer/octicons-react";
import { useState, useEffect } from "react";

function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  const UpdatePlaceData = () => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=40c4ae47ddf64f718a5131051210108&q=${place}&days=3`
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
          <div className="main">
            <div className="card">
              {placeData.location ? (
                <div className="internal-card">
                  <img src={placeData.current.condition.icon}></img>
                  <div className="temp">{placeData.current.temp_c}°c</div>
                  <div className="place">{placeData.location.name}</div>
                  <hr className="line" />
                  <div className="weather">
                    {placeData.current.condition.text}
                  </div>
                  <div className="days">
                    <div className="day">
                      <img
                        src={
                          placeData.forecast.forecastday[0].day.condition.icon
                        }
                      />
                      <div className="temps">
                        {placeData.forecast.forecastday[0].day.mintemp_c}°c /{" "}
                        {placeData.forecast.forecastday[0].day.maxtemp_c}°c
                      </div>
                      <h3>{placeData.forecast.forecastday[0].date}</h3>
                    </div>
                    <div className="day">
                      <img
                        src={
                          placeData.forecast.forecastday[1].day.condition.icon
                        }
                      />
                      <div className="temps">
                        {placeData.forecast.forecastday[1].day.mintemp_c}°c /{" "}
                        {placeData.forecast.forecastday[1].day.maxtemp_c}°c
                      </div>
                      <h3>{placeData.forecast.forecastday[1].date}</h3>
                    </div>
                    <div className="day">
                      <img
                        src={
                          placeData.forecast.forecastday[2].day.condition.icon
                        }
                      />
                      <div className="temps">
                        {placeData.forecast.forecastday[2].day.mintemp_c}°c /{" "}
                        {placeData.forecast.forecastday[2].day.maxtemp_c}°c
                      </div>
                      <h3>{placeData.forecast.forecastday[2].date}</h3>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="internal-card">
                  <h1>Enter a Valid Place</h1>
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
