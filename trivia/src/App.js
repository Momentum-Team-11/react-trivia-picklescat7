import "./index.css";
import Category from "./Components/Category";
import Question from "./Components/Question";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [categories, setCategories] = useState([]); //sets categories useState to empty array initially (null??)
  const [questionArray, setQuestionArray] = useState([]); 
  const [defaultView, setDefaultView] = useState(true)


  const getQuestionArray = (categId) => {
    //make axios get request
    axios.get(`https://opentdb.com/api.php?amount=10&category=${categId}&type=boolean`)
      .then((response) => {
        setQuestionArray(response.data.results);
        setDefaultView(false);
    console.log("Click Happened")
    console.log(response)
});
    
  }

  useEffect(() => {  //this is a hook. Instructions to component to do something after it renders somethign on the page
  //     make ajax request here
  //     inside the '.then'  set state for categories
    axios.get("https://opentdb.com/api_category.php")
        .then((response) => {
          setCategories(response.data.trivia_categories);
    });
  }, []);

  return (
    <> 
      <h1>Welcome to TRIVIA!!</h1>
      {defaultView ? 
      <>
      <h2>Choose a topic and let's play!</h2>
      <div className="category-list">
        {/* map creates a new array */}
        {categories.map((category) => (
          <Category
            name={category.name}
            id={category.id}
            key={category.id}
            clickHandler={getQuestionArray}
          />
        ))}
      </div>
    </> :
      <>
      <h2>Let's play True or False!</h2>
      <div className="question-view">
        {/* map creates a new array */}
        {questionArray.map((quest, index) => (
          <Question
            key={index}
            question={quest.question}
            correct_answer={quest.correct_answer}
            incorrect_answers={quest.incorrect_answers}
            // clickHandler={getQuestionArray}
          />
        ))}
        console.log(incorrect_answers)
      </div>
      </> 
      }
    </>
    )}
export default App;
// {quest.incorrect_answers.map((incorrect, idx) => (
              
//   )
//one object- trivia categories
//let newAnswers = [correctAnswer, ...answers];
// {dataItems.map((item, index) => (
//   <div key={index}>
//     <h1>{item.title}</h1>
//     {item.content.map((c, i) => (
//       <div key={i}>
//         <img src={c.imageUrl} />
//         <h3>{c.title}</h3>
//         <h3>{c.description}</h3>
//         <hr />
//       </div>
//     ))}
//   </div>
// ))}