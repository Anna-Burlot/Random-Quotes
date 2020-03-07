// == Import npm
import React from "react";
import PropTypes from "prop-types";

// == Import
import "./styles.css";
// == Composant
const Quote = ({ quote }) => (
  <div className="quote">
    <p className="quote">{quote.quoteText}</p>
    <p className="author">{quote.quoteAuthor}</p>
    {/* {console.log(quoteText, quoteAuthor)} */}
  </div>
);

// == Export
export default Quote;
