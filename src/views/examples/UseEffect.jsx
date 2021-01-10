import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import React, { useState, useEffect, Fragment } from "react";

function calcFactorial(n) {
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calcFactorial(n - 1) * n;
}

function parOuImpar(number) {
    let calc = number % 2;
    if (calc === 0) {
        return "par";
    } else {
        return "impar";
    }
}

const UseEffect = (props) => {
    //exercicio 1

    const [number, setNumber] = useState(1);
    const [factorial, setFactorial] = useState(1);

    useEffect(
        function () {
            setFactorial(calcFactorial(number));
        },
        [number]
    );

    //exercicio 2

    const [status, setStatus] = useState("impar");

    useEffect(
        function () {
            setStatus(parOuImpar(number));
        },
        [number]
    );

    return (
        <>
            <PageTitle
                title="Hook useEffect"
                subtitle="Permite usar efeitos colaterais em componentes funcionais"
            />

            <SectionTitle title="Exercicio" />

            <div className="center">
                <span className="text">fatorial: </span>
                <span className="text red">{factorial}</span>

                <input
                    type="number"
                    className="input"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>

            <SectionTitle title="Desafio" />
            <div className="center">
                <span>Status:</span>
                <span className="status red">
                    {number} - {status}
                </span>
            </div>
        </>
    );
};

export default UseEffect;
