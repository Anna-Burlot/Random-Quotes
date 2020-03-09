import axios from "axios";

import { HANDLE_CLICK, saveQuote } from "src/actions";

const ajaxMiddleware = store => next => action => {
  switch (action.type) {
    case HANDLE_CLICK:
      axios
        .get("https://quote-garden.herokuapp.com/quotes/random")
        .then(response => {
          store.dispatch(saveQuote(response.data));
        })
        .catch(error => {
          console.error(error);
        });
      next(action);
      break;
    default:
      next(action);
  }
};

export default ajaxMiddleware;
