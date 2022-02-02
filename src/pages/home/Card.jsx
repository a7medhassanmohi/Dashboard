import React from "react";

function Card({ name, numb, icon, bg }) {
  return (
    <div className="card" style={{ background: bg }}>
      <div className="content">
        <div className="title">
          <h5>{name}</h5>
          {icon}
        </div>
        <h4> {numb} </h4>
      </div>
    </div>
  );
}

export default Card;
