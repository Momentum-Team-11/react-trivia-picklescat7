import React from "react";

const Category = ({name, id, clickHandler}) => {
    return (
      //onClick needs to receive a function
      
        <button className="category-btn" onClick={() => clickHandler(id)}>  
        {name}
        </button>
    );
};

export default Category;