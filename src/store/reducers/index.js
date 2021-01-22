function reducer(state, action) {
  switch (action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
    case "sub2ToNumber":
      return { ...state, number: state.number - 2 };
    case "login":
      return { ...state, user: action.payload };

    default:
      return state;
  }
}

export { reducer };
