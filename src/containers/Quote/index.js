// == Import : npm
import { connect } from "react-redux";

// == Import : local
import Quote from "src/components/Quote";

/* === State (données) === */
const mapStateToProps = state => ({
  quote: state.quote,
  isQuote: state.isQuote
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Quote);
