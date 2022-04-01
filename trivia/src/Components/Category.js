import React from "react";

const Category = ({name, categId, clickHandler}) => {
    return (
      //onClick needs to receive a function
      
        <button className="category-btn" onClick={() => clickHandler(categId)}>  
        {name}
        </button>
    );
};

export default Category;