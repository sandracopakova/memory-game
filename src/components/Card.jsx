import React from "react";

export default function Card({ image, onClick, isFlipped, showTitle}) {
  return (
    <div className={`flip-card ${isFlipped ? "flip-card--flipped" : ""}`} onClick={onClick}>
      <div className="flip-card__inner">
        <div className="flip-card__front"></div>
        <figure className="flip-card__back">
          <img src={`/images/${image}.jpg`} alt="" />
          {showTitle && <figcaption>název kytky</figcaption>}
        </figure>
      </div>
    </div>
  );
}
