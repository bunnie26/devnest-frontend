import "./App.css";
import { useState, useEffect } from "react";

function App() {
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
      <h1>HELLO BROTHER</h1>
    </div>
  );
}

export default App;
