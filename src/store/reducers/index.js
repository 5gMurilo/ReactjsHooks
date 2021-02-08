import { numberReducer } from "./number";
import { loginReducer } from "./user";

export function reducer(state, action) {
  let newState = numberReducer(state, action);
  return loginReducer(newState, action);
}
