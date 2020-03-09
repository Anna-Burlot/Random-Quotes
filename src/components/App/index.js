// == Import npm
import React from "react";
import PropTypes from "prop-types";

// == Import
import "./styles.css";
import Quote from "src/containers/Quote";

// == Composant
const App = ({ isQuote, handleClick, quoteColor }) => {
  return (
    <div className="app">
      <div className="button-container">
        <button
          className={!isQuote ? "alone-button" : ""}
          onClick={handleClick}
          type="button"
          style={{ backgroundColor: quoteColor }}
        >
          New quote
        </button>
      </div>
      <Quote />
    </div>
  );
};

App.propTypes = {
  isQuote: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  quoteColor: PropTypes.string.isRequired
};

// == Export
export default App;
