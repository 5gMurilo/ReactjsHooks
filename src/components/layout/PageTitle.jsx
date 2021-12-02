import React from "react";
import "./PageTitle.css";

const PageTitle = (props) => {
    return (
        <div className="PageTitle">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
};

export default PageTitle;
