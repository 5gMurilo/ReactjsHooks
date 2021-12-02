import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = function (a1, a2) {
    return [...a1]
        .map(function (e, i) {
            return `${e}${a2[i] || ""}`;
        })
        .join("");
};

const UseRef = (props) => {
    const [value1, setValue1] = useState("");

    const count = useRef(0);
    const myInput1 = useRef(null);

    const [value2, setValue2] = useState("");
    const myInput2 = useRef(null);

    useEffect(
        function () {
            count.current++;
            myInput2.current.focus();
        },
        [value1]
    );

    //exercicio 2

    useEffect(
        function () {
            count.current++;
            myInput1.current.focus();
        },
        [value2]
    );
    return (
        <div>
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade current"
            />

            <SectionTitle title="Exercicio #01" />

            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)}[</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input
                    type="text"
                    className="input"
                    value={value1}
                    ref={myInput1}
                    onChange={(e) => setValue1(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <input
                    type="text"
                    className="input"
                    value={value2}
                    ref={myInput2}
                    onChange={(e) => setValue2(e.target.value)}
                />
            </div>
        </div>
    );
};

export default UseRef;
