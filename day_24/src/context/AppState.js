import React from "react";
import AppContext from "./app-context";
import { useState } from "react";

const AppState = (props) => {
  const [login, setLogin] = useState(false);
  return (
    <AppContext.Provider value={{ login: login, setLogin: setLogin }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
