import React from "react";

const Question = ({question, correct_answer, incorrect_answers, index}) => {

  const allAnswersArray = [correct_answer]; //assigning correct_answer to new array 'allAnswersArray'
    incorrect_answers.forEach((answer) => {  //take each answer in the incorrect_answer array and push into the new AllAnswersArray
        allAnswersArray.push(answer);
    });
    
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
      //next step- how do I make true always displays first
      <div className="question-container">
        <h2 className="question-title" key={index}>Question: {question}</h2>
        <ul className="answer-buttons">
          <p key={index}>the correct answer is {correct_answer}</p>
          <button key={index}>{answersShuffled[0]}</button>
          <button key={index}>{answersShuffled[1]}</button>
          <button key={index}>{answersShuffled[2]}</button>
          <button key={index}>{answersShuffled[3]}</button>
        </ul>
      </div>
    );
};

export default Question;