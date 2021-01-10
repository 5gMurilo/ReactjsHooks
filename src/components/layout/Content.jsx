import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from "../../views/examples/NotFound";
import UseCallback from "../../views/examples/UseCallback";
import UseContext from "../../views/examples/UseContext";
import UseEffect from "../../views/examples/UseEffect";
import UseMemo from "../../views/examples/UseMemo";
import UseRef from "../../views/examples/UseRef";
import UseState from "../../views/examples/UseState";
import Home from "./Home";

const Content = (props) => {
    return (
        <main className="Content">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                {/* rotas das paginas  */}

                <Route path="/UseState">
                    <UseState></UseState>
                </Route>

                <Route path="/useEffect">
                    <UseEffect></UseEffect>
                </Route>

                <Route path="/useRef">
                    <UseRef></UseRef>
                </Route>

                <Route path="/useMemo">
                    <UseMemo />
                </Route>

                <Route path="/UseCallback">
                    <UseCallback> </UseCallback>
                </Route>

                <Route path="/UseContext">
                    <UseContext></UseContext>
                </Route>
                {/* rota para pagina não encontrada */}

                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </main>
    );
};

export default Content;
