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
    'technology',
    "night",
    "cityscape"
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
            <p onClick={() => handleFilter(items)}
              style={search==items?{backgroundColor:'black',color:'white'}:null}
            >{items}</p>
          )
        })}
      </div>
    </>
  );
};

export default Filter;
