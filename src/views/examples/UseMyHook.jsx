import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import { UseCounter } from "../../Hooks/UseCounter";
import { useFetch } from "../../Hooks/useFetch";

const UseMyHook = () => {
  const url = "http://files.cod3r.com.br/curso-react/estados.json";

  const [count, inc, dec] = UseCounter();
  const response = useFetch(url);

  function showStates(states) {
    return states.map((state) => (
      <li key={state.nome} className="list">
        {state.nome} - {state.sigla}
      </li>
    ));
  }
  return (
    <>
      <PageTitle title="My Hook" subtitle="Hook criado por mim" />

      <SectionTitle title="Exercício #01 - mudando estado com incremento e decremento de numeros" />
      <div className="center">
        <span className="text">{count}</span>

        <div>
          <button className="btn" onClick={() => inc()}>
            incremento
          </button>
          <button className="btn" onClick={() => dec()}>
            decremento
          </button>
        </div>
      </div>

      <SectionTitle title="Exercício #02 - carregando dados da url" />
      <div className="center">
        <ul className="ul">
          {response.data ? showStates(response.data) : false}
        </ul>
      </div>
    </>
  );
};

export default UseMyHook;
