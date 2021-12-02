export function loginReducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
