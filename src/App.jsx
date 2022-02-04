import React, { useState } from "react";
import Card from "./components/Card";
import shuffle from "array-shuffle";

const images = ["calathea", "monstera", "scindapsus", "schefflera", "zamioculcas"];

export default function App() {
  const [cards, setCards] = useState(shuffle([...images, ...images]));
  const [flippedIndexes, setFlippedIndexes] = useState([]);

  const restartGame = () => {
    setFlippedIndexes([]);
    setTimeout(() => {
      setCards(shuffle([...images, ...images]));
    }, 800);
  };

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
              const newState = [...flippedIndexes];
              if (flippedIndexes.length % 2 === 0 && flippedIndexes.length !== 0) {
                const card1 = cards[flippedIndexes[flippedIndexes.length - 2]];
                const card2 = cards[flippedIndexes[flippedIndexes.length - 1]];
                if (card1 !== card2) {
                  newState.pop();
                  newState.pop();
                }
              }
              setFlippedIndexes([...newState, i]);
            }}
          />
        ))}
      </div>
      <button className="new-game" onClick={restartGame}>
        New Game
      </button>
    </div>
  );
}
