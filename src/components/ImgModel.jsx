import React, { useState } from "react";

const Filter = ({ setSearch,search }) => {
  const filters = [
    "all",
    "animal",
    "food",
    "nature",
    "travel",
    "street photography",
    "film",
    "people",
    "sports",
  ];
  const handleFilter = (item) => {
    setSearch("")
    setSearch(item)
}

  return (
    <>
      <div className="filter">
        
        
        {filters.map((items) => {
          return (
            <h5 onClick={() => handleFilter(items)}
              style={search==items?{backgroundColor:'black',color:'white'}:null}
            >{items}</h5>
          )
        })}
      </div>
    </>
  );
};

export default Filter;
