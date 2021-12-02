export function numberReducer(state, action) {
  switch (action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
    case "sub2ToNumber":
      return { ...state, number: state.number - 2 };
    default:
      return state;
  }
}
