function reducer(state: any, action: any) {
  switch (action.type) {
    case "set":
      return {
        ...state,
        endeavors: action.endeavors,
      };
    case "add":
      return {
        ...state,
        endeavors: [...state.endeavors, action.endeavor],
      };
    case "error":
      return {
        ...state,
        error: true,
      };
    case "updateInput":
      return {
        ...state,
        [action.inputValue]: action.value,
      };
    default:
      new Error();
  }
}

export default reducer;
