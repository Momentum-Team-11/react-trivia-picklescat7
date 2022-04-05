import React from "react";
import Confetti from "react-confetti";
import 'bulma/css/bulma.min.css';
import { Button, Box, Heading, Block } from 'react-bulma-components';

const EndGame = ({ score, setDefaultView, setEndGame, setCurrentQuestion, setScore}) => {
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
  <Box
    style={{
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: 400,
    justifyContent: 'center',
  }}
  >
  
  <Confetti 
  className="canvas"
  colors={sgColors}
  numberOfPieces={100}
    />
  <Block>
    <Heading>
      <strong>Well done! Your score is: {score}</strong>
    </Heading> 
  </Block>
  <Block>
    <Button color="success" id="play-again-btn"
      onClick={() => {
        setScore(0)
        setDefaultView(true)
        setEndGame(false)
        setCurrentQuestion(0)
      }}
    >
      <strong>Play Again</strong>
    </Button> 
  </Block>
  </Box>
  )
};

export default EndGame;