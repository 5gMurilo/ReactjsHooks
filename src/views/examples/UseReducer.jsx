import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import { initialState, initialSecondState, reducerD } from "../../store/index";
import { numberAdd2, login } from "../../store/actions";

import { reducer } from "../../store/reducers/index";

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [state2, dispatch2] = useReducer(reducerD, initialSecondState);
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
          <button className="btn" onClick={() => numberAdd2(dispatch)}>
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
            onClick={() => login(dispatch, prompt("Insira um login"))}
          >
            Login
          </button>
        </div>
      </div>

      <SectionTitle title="Desafio" />

      <div className="center">
        <span className="text">Numero: </span>
        <span className="red">{state2.number}</span>

        <div>
          <button
            className="btn"
            onClick={() => dispatch2({ type: "multiply7ToNumber" })}
          >
            x 7
          </button>
          <button
            className="btn"
            onClick={() => dispatch2({ type: "divide25ToNumber" })}
          >
            / 25
          </button>
          <button
            className="btn"
            onClick={() =>
              dispatch2({
                type: "addNToNumber",
                payload: parseInt(prompt("Insira o valor de N")),
              })
            }
          >
            somar N{" "}
          </button>
          <button
            className="btn"
            onClick={() => dispatch2({ type: "arredondar" })}
          >
            arredondar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
