import React from "react";
import Confetti from "react-confetti";

const EndGame = ({ score, defaultView, setDefaultView, setEndGame }) => {

  return (
  <>
  <Confetti 
    numberOfPieces={50}/>
  <p>Well done! Your score is: {score}</p>
  <button id="play-again-btn"
      onClick={() => {
        setDefaultView(true)
        setEndGame(false)
      }}
    >
      Play Again
    </button> 
  </>
  )
};

export default EndGame;