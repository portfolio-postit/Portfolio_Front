import React from "react";
import Routing from "./Routing";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routing />
    </Router>
  );
};

export default App;
