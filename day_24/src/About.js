import React from "react";
import { useContext } from "react";
import AppContext from "./context/app-context";

function About() {
  const { login } = useContext(AppContext);
  return (
    <div className="About">
      {login ? <h1>This is about section</h1> : <h1>You are not logged in, Go and log in</h1>}
      <p></p>
    </div>
  );
}

export default About;
