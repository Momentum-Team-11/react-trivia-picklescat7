import React, { useState } from 'react';
//specific job of this component- did they click the right answer? if so, increment up the score

  
const Quiz = (props) => {
	const [isAnswered, setIsAnswered] = useState(false)
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const { data } = props;
    // Create a new Audio instance that uses our meow sound file
	const getNextQuestion = () => {
		setCurrentQuestion(currentQuestion + 1);
    // Here we are calling the sound instance that we created earlier
  };
	
	return (
    <div>
			{data.length ? (
        <>
          {data.currentQuestion}
        </>
      ) : null}
			<>
         <button onClick={() => getNextQuestion()}>Next Question!</button>
			</>
      {/* <p>{question.question}</p>
      <button disabled={isAnswered}  //once isAnswered state becomes true, it will disable the button
        onClick={() => {
          console.log('correct answer selected');
          setScore((score += 1));
          console.log(score);
          setIsAnswered(true);
        }}
      >
        {question.correct_answer}</button>
        <button disabled={isAnswered}
          onClick={() => {
            setIsAnswered(true);
          }}
        >
          {question.incorrect_answers}</button> */}
    </div>
  );
};

export default Quiz

// const Randomizer = (props) => {
//   const [currentCat, setCurrentCat] = useState(0);
//   const { data } = props;

//   // We need to set up a function that will allow
//   // the user to see the next cat in our list of cats.
//   // In this function we are incrementing our variable named currentCat
//   // by one every time this function gets called
  
	

//   return (
//     <Main>
//       {/* Our function getNextCat is being called in the onClick of our
//     button element. Every time a user clicks the button, we want to show a new 
//     cat picture. We are doing that by calling getNextCat! */}
//       {/* Here we are checking to see if there are any items in our 
//       array called data. Remember, our data array is being passed as props
//       from the parent component called App! */}
//       {data.length ? (
//         <ImageContainer>
//           <img alt="" src={data[currentCat].url} height="100%" width="100%" />
//         </ImageContainer>
//       ) : null}
//       <Button onClick={() => getNextCat()}>Moar!</Button>
//     </Main>
//   );
// };