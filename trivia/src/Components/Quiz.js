import React, { useState } from 'react';
import { decode } from 'html-entities';
import 'bulma/css/bulma.min.css';
import { Button, Box, Block, Container, Notification } from 'react-bulma-components';

//specific job of this component- did they click the right answer? if so, increment up the score
const Quiz = ({ question, setScore, score, idx, i, setCurrentQuestion, setEndGame}) => {
  const [isAnswered, setIsAnswered] = useState(false);
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correct, setIsCorrect] = useState(null);
  // const [clicked, setClicked] = useState(false);

  
  // console.log("testing" + question[1].question)
    //feature doesn't work yet

  //   const getFirst = () => {
  //     if (!clicked) {
  //       setCurrentQuestion(questionArray[0])
  //       console.log("current question" + currentQuestion)
  //     }
  // };

  // getFirst()

  const getNext = () => {
    setCurrentQuestion(i+1);
    // console.log(questionArray[i])
    // console.log("question" + questionArray[i].question)
    // console.log("correct answer" + questionArray[i].correct_answer)
    // console.log("incorrect answer: " + questionArray[i].incorrect_answers)
    // console.log("shuffled answers" + questionArray[i].answersShuffled)
    // console.log(currentQuestion.question)
  };


  let allAnswersArray =  question.incorrect_answers; //assigning incorrect_answers to new array 'allAnswersArray'
    allAnswersArray = [...allAnswersArray, question.correct_answer ] //adding in the correct_answer
    // console.log(`all answers: ${allAnswersArray}`)
    
    //working shuffle function - bless you for once stackoverflow
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    const answersShuffled = allAnswersArray
    shuffleArray(answersShuffled)
  
  // let firstObject = question[0];
  //   console.log(firstObject)
    
  return (
  <>
    <Box className="question-container">
      <div>
        <Block>
          <p>Question {i + 1} /5</p>
        </Block>
        <Block>
          <h3><strong>{decode(question.question)}</strong></h3>
        </Block>
      
      <Button.Group className="answer-buttons">
        <Button color="" id="btn-1" key={idx} disabled={isAnswered}  //once isAnswered state becomes true, it will disable the button
          onClick={()=> { 
            if (answersShuffled[0] === question.correct_answer) { 
              console.log('correct answer selected')
              setScore((score += 1))
              console.log(score)
              setIsAnswered(true)
              setIsCorrect(true)
            } else { 
              console.log('incorrect answer selected')
              setIsCorrect(false)
              setIsAnswered(true)
            }
          }
        }    
        >
          {answersShuffled[0]}</Button>

        <Button color="" renderAs="span" id= "btn-2" key={idx} disabled={isAnswered}
          onClick={()=> { 
            if (answersShuffled[1] === question.correct_answer) { 
              console.log('correct answer selected')
              setScore((score += 1))
              console.log(score)
              setIsAnswered(true)
              setIsCorrect(true)
            } else { 
              console.log('incorrect answer selected')
              setIsCorrect(false)
              setIsAnswered(true)
            }
          }
        }    
        >
          {answersShuffled[1]}</Button>
      </Button.Group>
      <Block id="message">
        
        <Container>
        {correct === true && (
          <Notification color="primary">
          {/* <div id="correct-msg"> */}
            <strong>Yaaas you got it right!</strong>
          {/* </div> */}
          </Notification>
          )
        } 
        </Container>
        <Container>
        {correct === false && (
          <Notification color="danger">
          {/* <div id="incorrect-msg"> */}
            <strong>Nooooo that was wrong!</strong>
            <p>The correct answer is {question.correct_answer}.</p>
          {/* </div> */}
          </Notification>
          )
        } 
        </Container>
      </Block>

      <Button color="info" id="btn-next" onClick={()=> { 
        if (i <= 4 && isAnswered) { 
          getNext()
        } 
        if (i >= 4 && isAnswered) {
          setEndGame(true)
          console.log("hereeeee")
          
      // } else {
      //     console.log("clicked without selecting an answer")
        } 
      }
    }
    >
      Next </Button>
      </div>
    </Box>
    </>
  );
};

export default Quiz;


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