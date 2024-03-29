import { React, useState, useCallback } from "react";
import PageTitle from "../../components/layout/PageTitle";
import UseCallbackButtons from "./UseCallbackButtons";

const UseCallback = (props) => {
    const [count, setCount] = useState(0);

    const inc = useCallback(
        function inc(delta) {
            setCount((current) => current + delta);
        },
        [setCount]
    );

    return (
        <div>
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memorizada"
            />

            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    );
};

export default UseCallback;
