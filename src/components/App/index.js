// == Import npm
import React from "react";
import PropTypes from "prop-types";

// == Import
import "./styles.css";
import Quote from "src/containers/Quote";

// == Composant
const App = () => (
  <div className="app">
    <button type="button">New quote</button>
    <Quote />
  </div>
);

// == Export
export default App;
