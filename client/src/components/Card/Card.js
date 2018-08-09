import React from "react";
import "./Cards.css";

const Card = props => (
    <div className="card mt-4">
        <div className="card-header">
            <strong>
                {props.title}
            </strong>
        </div>
        <div className="card-body">{props.children}</div>
    </div>
);

export default Card;
