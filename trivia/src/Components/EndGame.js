import React from "react";
import Confetti from "react-confetti";

const EndGame = ({ score, setDefaultView, setEndGame, setCurrentQuestion }) => {
  const sgColors = [
    "#9ce8c2",
    "#60d399",
    "#b9e2fe",
    "#4fb3f6",
    "#bdc7fb",
    "#6d83f3",
    "#ff7968",
    "#ffe8e5",
    "#fedd8e",
    "#fbbe2e"
  ];

  return (
  <>
  <Confetti 
  className="canvas"
  colors={sgColors}
  numberOfPieces={50}
    />
  <p>Well done! Your score is: {score}</p>
  <button id="play-again-btn"
      onClick={() => {
        setDefaultView(true)
        setEndGame(false)
        setCurrentQuestion(0)
      }}
    >
      Play Again
    </button> 
  </>
  )
};

export default EndGame;