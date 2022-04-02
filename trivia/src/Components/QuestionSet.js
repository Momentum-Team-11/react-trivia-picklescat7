import React, { useState } from 'react';
//specific job of this component- did they click the right answer? if so, increment up the score
const QuestionSet = ({ question, setScore, score, idx}) => {
  const [isAnswered, setIsAnswered] = useState(false)
  const [correct, setIsCorrect] = useState(false)

  let allAnswersArray =  question.incorrect_answers; //assigning incorrect_answers to new array 'allAnswersArray'
    allAnswersArray = [...allAnswersArray, question.correct_answer ] //adding in the correct_answer
    console.log(`all answers: ${allAnswersArray}`)
    
    //working shuffle function - bless you for once stackoverflow
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    const answersShuffled = allAnswersArray
    shuffleArray(answersShuffled)

  return (
    <div className="question-container">
      <p>{question.question}</p>

      <div className="answer-buttons">
        <button id="btn-1" key={idx} disabled={isAnswered}  //once isAnswered state becomes true, it will disable the button
          onClick=
            {answersShuffled[0] === question.correct_answer ? (
              console.log('correct answer selected'),
              setScore((score += 1)),
              console.log(score),
              setIsAnswered(true),
              setIsCorrect(true)
            ) : (
              console.log('incorrect answer selected'),
              setIsCorrect(false),
              setIsAnswered(true)
            )
          }
        >
          {answersShuffled[0]}</button>

          <button id= "btn-2" key={idx} disabled={isAnswered}
            onClick={answersShuffled[1] === question.correct_answer ? (
              console.log('correct answer selected'),
              setScore((score += 1)),
              console.log(score),
              setIsAnswered(true),
              setIsCorrect(true)
            ) : (
              console.log('incorrect answer selected'),
              setIsCorrect(false),
              setIsAnswered(true)
            )
          }
          >
            {answersShuffled[1]}</button>
      </div>
    </div>
  );
};

export default QuestionSet;


//from version 1: 
// const Question = ({question, correct_answer, incorrect_answers, index}) => {

//   let allAnswersArray = incorrect_answers; //assigning incorrect_answers to new array 'allAnswersArray'
//     allAnswersArray = [...allAnswersArray, correct_answer] //adding in the correct_answer
//     // console.log(`all answers: ${allAnswersArray}`)
    
//     //working shuffle function - bless you for once stackoverflow
//     const shuffleArray = (array) => {
//       for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//       }
//     }
//     const answersShuffled = allAnswersArray
//     shuffleArray(answersShuffled)
    
//     return (
//       //next step- how do I make true always displays first
//       <div className="question-container">
//         <h2 className="question-title" key={index}>Question: {question}</h2>
//         <ul className="answer-buttons">
//           <p key={index}>the correct answer is {correct_answer}</p>
//           <button key={index}>{answersShuffled[0]}</button>
//           <button key={index}>{answersShuffled[1]}</button>
//           <button key={index}>{answersShuffled[2]}</button>
//           <button key={index}>{answersShuffled[3]}</button>
//         </ul>
//       </div>
//     );
// };