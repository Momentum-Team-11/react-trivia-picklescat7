import React from "react";
import 'bulma/css/bulma.min.css';
import { Button} from 'react-bulma-components';

//Category will render the categories and save which one has been selected
const CategorySelect = ({ category, setSelected, setDefaultView }) => {
  return (
    // <div className="category-select">
      
        <Button color="success" m="2" className="category-btn"
          onClick={() => {
            console.log("category selected!");
            setSelected(category.id);
            setDefaultView(false)
          }}
        >
        {category.name}
        </Button>
    
    // </div>
  );
};

export default CategorySelect;


//from vs. 1:
//Category will render the categories and save which one has been selected
// const Category = ({name, categId, clickHandler}) => {
//   return (
//     //onClick needs to receive a function
    
//       <button className="category-btn" onClick={() => clickHandler(categId)}>  
//       {name}
//       </button>
//   );
// };