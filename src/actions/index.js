export const HANDLE_CLICK = "HANDLE_CLICK";
export const SAVE_QUOTE = "SAVE_QUOTE";

export const handleClick = () => ({
  type: HANDLE_CLICK
});

export const saveQuote = quote => ({
  type: SAVE_QUOTE,
  quote
});
