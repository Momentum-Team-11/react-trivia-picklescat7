import React from "react";

const EndGame = ({ score, defaultView, setDefaultView, setEndGame }) => {
  console.log(defaultView) //false
  return (
  <>
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