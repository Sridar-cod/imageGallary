import React from "react";

const Filter = ({ setQuery,query }) => {
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
    setQuery("")
    setQuery(item)
}

  return (
    <>
      <div className="filter">
        
        
        {filters.map((items) => {
          return (
            <p onClick={() => handleFilter(items)}
              style={query==items?{backgroundColor:'black',color:'white'}:null}
            >{items}</p>
          )
        })}
      </div>
    </>
  );
};

export default Filter;
