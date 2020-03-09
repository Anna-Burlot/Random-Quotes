import { HANDLE_CLICK, SAVE_QUOTE } from "src/actions";

export const initialState = {
  isQuote: false,
  quote: {
    quoteText: "",
    quoteAuthor: "",
    quoteColor: "#ad0c42"
  },
  colors: [
    "#866053",
    "#607d8b",
    "#af6800",
    "#007368",
    "#7a4eca",
    "#b043c3",
    "#ad0c42",
    "#1c7bc7",
    "#03a9f4",
    "#2c9e30",
    "#e88b00"
  ]
};

const randomColor = (array, currentColor) => {
  let color = "";
  do {
    color = array[Math.floor(Math.random() * array.length)];
  } while (color == currentColor);
  return color;
};

const quote = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_CLICK:
      return {
        ...state,
        isQuote: true
      };
    case SAVE_QUOTE:
      return {
        ...state,
        quote: {
          ...action.quote,
          quoteColor: randomColor(state.colors, state.quote.quoteColor)
        }
      };
    default:
      return state;
  }
};

export default quote;
