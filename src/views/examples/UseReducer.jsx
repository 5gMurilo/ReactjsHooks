import React from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  producst: [],
  user: null,
  //foco
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  return (
    <div>
      <PageTitle title="UseReducer()"></PageTitle>
      <div className="center"></div>
    </div>
  );
};

export default UseReducer;
