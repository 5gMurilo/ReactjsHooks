import React, { useContext } from "react";
import PageTitle from "../../components/layout/PageTitle";

import DataContext from "../../data/DataContext";

const UseContext = () => {
  const context = useContext(DataContext);

  function addNumber(n) {
    context.setState({
      ...context.state,
      number: context.state.number + n,
    });
  }

  return (
    <>
      <PageTitle
        title="UseContext()"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto"
      />
      <div className="center">
        <h1 className="red">data</h1>
        <span className="text">text: {context.state.text}</span>
        <span className="text">number: {context.state.number}</span>

        <div>
          <button className="btn" onClick={() => addNumber(+1)}>
            +1
          </button>
          <button className="btn" onClick={() => addNumber(-1)}>
            -1
          </button>
        </div>
      </div>
    </>
  );
};

export default UseContext;
