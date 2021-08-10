import React from "react";
import { useContext } from "react";
import AppContext from "./context/app-context";

function Contact() {
  const { login } = useContext(AppContext);
  return (
    <div className="Contact">
      {login ? <><h1>This is Contact section</h1><h2>+91 9212173314</h2></>: <h1>Go and log in</h1>}
      
    </div>
  );
}

export default Contact;
