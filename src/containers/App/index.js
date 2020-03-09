// == Import : npm
import { connect } from "react-redux";

// == Import : local
import App from "src/components/App";
import { handleClick } from "src/actions";

/* === State (données) === */
const mapStateToProps = state => ({
  isQuote: state.isQuote,
  quoteColor: state.quote.quoteColor
});

/* === Actions === */
const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(handleClick());
  }
});

// Container
// == Export
export default connect(mapStateToProps, mapDispatchToProps)(App);
