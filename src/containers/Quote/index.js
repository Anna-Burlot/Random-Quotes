// == Import : npm
import { connect } from "react-redux";

// == Import : local
import Quote from "src/components/Quote";

/* === State (données) === */
const mapStateToProps = () => ({
  quote: {
    _id: "5d91b45d9980192a317c91e5",
    quoteText:
      "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.",
    quoteAuthor: "Paul Graham"
  }
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Quote);
