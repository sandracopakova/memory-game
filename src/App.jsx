import React, { useState } from "react";
import Card from "./components/Card";

const images = ["calathea", "monstera", "scindapsus", "schefflera", "zamioculcas"];

export default function App() {
  const [cards, setCards] = useState([...images, ...images]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  console.log(flippedIndexes);

  return (
    <div className="container">
      <div className="header">
        <h1 className="header__title">Memory game</h1>
        <div className="header__desctiption">click any card to begin</div>
      </div>
      <div className="cards">
        {cards.map((card, i) => (
          <Card
            key={"card" + i}
            image={card}
            isFlipped={flippedIndexes.includes(i)}
            onClick={() => {
              console.log(i);
              setFlippedIndexes([...flippedIndexes, i]);
            }}
          />
        ))}
      </div>
    </div>
  );
}
