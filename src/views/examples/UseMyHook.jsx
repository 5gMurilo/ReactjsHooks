import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import { UseCounter } from "../../Hooks/UseCounter";

const UseMyHook = () => {
  const [count, inc, dec] = UseCounter();

  return (
    <>
      <PageTitle title="My Hook" subtitle="Hook criado por mim" />

      <SectionTitle title="Exercício #01" />
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
    </>
  );
};

export default UseMyHook;
