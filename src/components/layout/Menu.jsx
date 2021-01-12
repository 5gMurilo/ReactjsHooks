import "./Menu.css";

import React from "react";
import {Link} from 'react-router-dom';

const Menu = (props) => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="UseState">UseState()</Link>
                    </li>

                    <li>
                        <Link to="UseEffect">UseEffect()</Link>
                    </li>

                    <li>
                        <Link to="UseRef">UseRef()</Link>
                    </li>

                    <li>
                        <Link to="UseMemo">UseMemo()</Link>
                    </li>

                    <li>
                        <Link to="UseCallback">UseCallback()</Link>
                    </li>

                    <li>
                        <Link to="UseContext">UseContext()</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Menu;
