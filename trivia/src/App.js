import "./index.css";
import Category from "./Components/Category";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [categories, setCategories] = useState([]); //sets categories useState to empty array initially (null??)

  useEffect(() => {
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
      <h2>Choose a topic and let's play!</h2>
      <div className="category-list">
        {/* .map creates a new array */}
        {categories.map((category) => (
          <Category
            name={category.name}
            key={category.id}
          />
        ))}
      </div>
    </>
    )}
export default App;

//one object- trivia categories
