import React, { useState } from "react";
import Card from "./components/Card";
import shuffle from "array-shuffle";

const images = ["calathea", "monstera", "scindapsus", "schefflera", "zamioculcas"];

export default function App() {
  const [cards, setCards] = useState(shuffle([...images, ...images]));
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [clickBlocked, setClickBlocked] = useState(false);

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
              if (clickBlocked) {
                return;
              }
              const newIndexes = [...flippedIndexes, i];
              if (newIndexes.length % 2 === 0 && newIndexes.length !== 0) {
                const card1 = cards[i];
                const card2 = cards[flippedIndexes[flippedIndexes.length - 1]];
                if (card1 !== card2) {
                  setClickBlocked(true);
                  setTimeout(() => {
                    const toSet = [...newIndexes];
                    toSet.pop();
                    toSet.pop();
                    setFlippedIndexes(toSet);
                    setClickBlocked(false);
                  }, 2000);
                }
              }
              setFlippedIndexes(newIndexes);
            }}
          />
        ))}
      </div>
    </div>
  );
}
