import React from "react";

const Card = (props) => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="eng">{props.eng}</div>
      </div>
      <div className="back">
        <div className="eng">{props.han}</div>
        <div className="eng">{props.pin}</div>
      </div>
    </div>
  </div>
);

export default Card;
