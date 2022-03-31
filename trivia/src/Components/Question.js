import React from "react";

const Question = ({question, correct_answer, incorrect_answers, index}) => {
    return (
      <div className="question">
        <h2>Question: {question}</h2>
        <ul className="answers">
          <li key={index}>{correct_answer}</li>
          <li>{incorrect_answers}</li>
        </ul>
      </div>
    );
};

export default Question;