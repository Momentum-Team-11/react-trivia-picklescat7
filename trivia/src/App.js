import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios"
import CategorySelect from "./Components/CategorySelect";
import QuestionSet from "./Components/QuestionSet";
import EndGame from "./Components/EndGame";


const App = () => {
  const categoriesURL = "https://opentdb.com/api_category.php"; 
  const questionsURL = "https://opentdb.com/api.php?amount=5&type=boolean&category="; 
  //helper function below to set state
  const [categories, setCategories] = useState([]); //set to empty array so state knows what shape of data
  const [selected, setSelected] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
	const [defaultView, setDefaultView] = useState(true) //aka "home page"

//ask for a list of categories
  useEffect(() => {
    axios.get(categoriesURL).then((response) => { //.then is a promise; expecting to recieve a response 'response' is just a symantic name- coul dbe anything;  
    setCategories(response.data.trivia_categories);  //call-back function- give one function to another function as an argument
    });
  }, []);  //dependency array 

//useEffect(() => {}, []) w/out dependency array you get an endless request

  useEffect(() => {
    axios.get(questionsURL + `${selected}`).then((response) => {
      console.log(response);
      setQuestions(response.data.results);
			setDefaultView(false)
    });
  }, [selected])

  if (endGame && !defaultView) {
    return (
      <div>
        <EndGame
          score={score}
					setDefaultView={setDefaultView}
					defaultView={defaultView}
					setSelected={setSelected}
					selected={selected}
					setEndGame={setEndGame}
      />
		
    </div>
    )
  }
  return (
    <main>
      <header>Let's Play Trivia!</header>
  {/* // Ternary operator syntax
  //condition ? what to do if true : what to do if false */}
    <div id="container">
    {(questions.length > 0 && !defaultView) ? (
      <div>
			<button onClick={() => setDefaultView(true)}>Return Home/Change Category</button> 
      {questions.map((question, idx) => { //idx - index pos of the question
        return (                          //for every quest in array this is what shoudl look like
            <QuestionSet 
              key={idx} 
              question={question} 
              setScore={setScore} 
              score={score}
            />
          );
        })}
        <button onClick={() => setEndGame(true)}>Click to Finish</button> 
      </div>
    ) : (
      categories.map((category) => { 
          return (
            <CategorySelect 
              key={category.id}
              category={category} 
              setSelected={setSelected}  //need this for the child to be able to bubble up state
							setDefaultView={setDefaultView}
            />
            );
          })
        )}
      </div>
      <footer>By Brittany Craig ...and React</footer>
    </main>
    );
  };

export default App;