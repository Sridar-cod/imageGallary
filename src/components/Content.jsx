import React, { useEffect, useState } from "react";
import ImgCard from "./Filter";
import Pagination from "./Pagination";
const Content = ({ query, data, setPageToDisplay,pageToDisplay,loader }) => {
  // const [page, setPage] = useState(1);
  const [pageNums, setPageNums] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <>
      <div className="content">
        {data && data.map((photo) => <ImgCard loader={loader} photo={photo} query={query} />)}
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
