import React from "react";

const Category = ({name}) => {
    return (
      <ul>
        <button className="category-list">
            {name}
        </button>
      </ul>
    );
};

export default Category;