import React, { useContext, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = () => {
  const context = useContext(DataContext);

  function addNumber(n) {
    context.setState({
      ...context.state,
      number: context.state.number + n,
    });
  }

  const { number, text, setNumber, setText } = useContext(AppContext);

  useEffect(() => {
    if (number > 1250) {
      setText("Taporra menó");
    }
  }, [number]);

  return (
    <>
      <PageTitle
        title="UseContext()"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto"
      />
      <SectionTitle title="#exercicio 01" />
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

      <SectionTitle title="#exercicio 02" />

      <div className="center">
        <span className="text">{text}</span>
        <span className="text">{number}</span>

        <div>
          <button className="btn" onClick={() => setNumber(number - 1)}>
            -1
          </button>
          <button className="btn" onClick={() => setNumber(number + 1)}>
            +1
          </button>
        </div>
      </div>
    </>
  );
};

export default UseContext;
