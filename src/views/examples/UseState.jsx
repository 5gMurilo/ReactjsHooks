import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const changeName = (inp) => {
        inp = document.querySelector("#input");
        let inptext = inp.value;
        setName(inp.value);

        inptext === inp.value ? (inp.value = "") : (inptext = "");
    };

    return (
        <div className="UseState">
            <PageTitle
                title="Hook useState"
                subtitle="Estado em compontentes funcionais"
            />

            <SectionTitle title="Exercicio 01" />

            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button
                        className="btn"
                        onClick={(_) => setCount(count - 1000)}
                    >
                        - 1000
                    </button>
                    <button
                        className="btn"
                        onClick={(_) => setCount(count - 1)}
                    >
                        - 1
                    </button>
                    <button className="btn" onClick={(_) => setCount(0)}>
                        0
                    </button>
                    <button
                        className="btn"
                        onClick={(_) => setCount(count + 1)}
                    >
                        + 1
                    </button>
                    <button
                        className="btn"
                        onClick={(_) => setCount((current) => current + 1000)}
                    >
                        + 1000
                    </button>
                </div>
            </div>

            <SectionTitle title="Exercicio 02" />

            <div className="center">
                <div>
                    <p>insira alguma coisa</p>
                    <input
                        type="text"
                        className="input"
                        id="input"
                        // onChange={(e) => setName(e.target.value)}
                    />

                    <button className="btn" onClick={changeName}>
                        carregar valor
                    </button>
                </div>

                <p>{name}</p>
            </div>
        </div>
    );
};

export default UseState;
