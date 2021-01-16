import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
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
    case "sub2ToNumber":
      return { ...state, number: state.number - 2 };
    case "login":
      return { ...state, user: action.payload };
      break;
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <PageTitle
        title="UseReducer()"
        subtitle="uma outra maneira de ter estados em componentes"
      ></PageTitle>
      <SectionTitle title="Exercício" />
      <div className="center">
        <span className="red">number</span>
        <span className="text">{state.number}</span>

        <div>
          <span className="text">
            {state.user === null ? (
              "Nenhum usuário logado"
            ) : (
              <span className="red">Usuário: {state.user} </span>
            )}
          </span>
        </div>

        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "add2ToNumber" })}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "sub2ToNumber" })}
          >
            -2
          </button>

          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "maria" })}
          >
            Login
          </button>
        </div>
      </div>

      <SectionTitle title="Desafio" />

      <div></div>
    </div>
  );
};

export default UseReducer;
