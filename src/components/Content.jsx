import React, { useEffect, useState } from "react";
import ImgCard from "./Filter";
import Pagination from "./Pagination";
const Content = ({ query, data, setPageToDisplay,pageToDisplay,loader }) => {
  // const [page, setPage] = useState(1);
  const [pageNums, setPageNums] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <>
      <div className="content">
        {data.length>0? data.map((photo) => <ImgCard loader={loader} photo={photo} query={query} />) :   <h1 className="mt-5 mb-5" style={{minHeight:'60vh',textAlign:'center'}}>No images found for "{query}". Please try a different search.</h1>}
      </div>
      <Pagination
        pageNums={pageNums}
        pageToDisplay={pageToDisplay}
        setPageToDisplay={setPageToDisplay}
      />
    </>
  );
};

export default Content;
