import React from "react";

export default function Card({ image, onClick, isFlipped }) {
  return (
    <div className={`flip-card ${isFlipped ? "flip-card--flipped" : ""}`} onClick={() => onClick()}>
      <div className="flip-card-inner">
        <div className="flip-card-front"></div>
        <div className="flip-card-back">
          <img src={`/images/${image}.jpg`} alt="Avatar" />
        </div>
      </div>
    </div>
  );

  return <div className="card" onClick={() => onClick()}></div>;
}
