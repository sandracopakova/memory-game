import React from "react";

export default function Card({ image, onClick, isFlipped }) {
  return (
    <div className={`flip-card ${isFlipped ? "flip-card--flipped" : ""}`} onClick={onClick}>
      <div className="flip-card__inner">
        <div className="flip-card__front"></div>
        <div className="flip-card__back">
          <img src={`/images/${image}.jpg`} alt="" />
        </div>
      </div>
    </div>
  );
}
