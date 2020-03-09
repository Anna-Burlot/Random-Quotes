// == Import npm
import React from "react";
import PropTypes from "prop-types";

// == Import
import "./styles.css";
// == Composant
const Quote = ({ quote, isQuote }) => (
  <div className={isQuote ? "quote" : "not-displayed"}>
    {quote.quoteText && (
      <>
        <p className="quote" style={{ color: quote.quoteColor }}>
          {quote.quoteText}
        </p>
        <h2 className="author" style={{ color: quote.quoteColor }}>
          {quote.quoteAuthor ? quote.quoteAuthor : "Anonyme"}
        </h2>
      </>
    )}
  </div>
);

Quote.propTypes = {
  isQuote: PropTypes.bool.isRequired,
  quote: PropTypes.shape({
    quoteText: PropTypes.string.isRequired,
    quoteAuthor: PropTypes.string.isRequired,
    quoteColor: PropTypes.string.isRequired
  }).isRequired
};

// == Export
export default Quote;
