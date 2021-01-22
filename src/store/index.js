import { reducer } from "./reducers";

export const initialState = {
  cart: [],
  producst: [],
  user: null,
  //foco
  number: 0,
};

export const initialSecondState = {
  number: 1,
};

export function reducerD(state, action) {
  switch (action.type) {
    case "multiply7ToNumber":
      return { ...state, number: state.number * 7 };
    case "divide25ToNumber":
      return { ...state, number: state.number / 25 };
    case "arredondar":
      return { ...state, number: Math.round(state.number) };
    case "addNToNumber":
      return { ...state, number: state.number + action.payload };
    default:
      return state;
  }
}
