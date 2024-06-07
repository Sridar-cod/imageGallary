import React, { useEffect, useState } from "react";
import ImgCard from "./Filter";
import Pagination from "./Pagination";
const Content = ({ search }) => {
  const [imgId, setImgId] = useState([]);
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState([]);
  const [pageNums, setPageNums] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);
  const numOfPageDisplay = 30;

  const getId = () => {
    let idArr = [];
    for (let i = 1; i <= 1200; i++) {
      idArr.push(i);
    }
    setImgId(idArr);
  };

  useEffect(() => getId(), []);

  const handlePage = () => {
    const pagelimits = imgId.slice(
      page * numOfPageDisplay - numOfPageDisplay,
      page * numOfPageDisplay
    );
    setPageLimit(pagelimits);
  };

  useEffect(() => {
    if (imgId.length > 0) handlePage(imgId);
  }, [imgId, page]);

  return (
    <>
      <div className="content">
        {pageLimit?.map((id) => (
          <ImgCard id={id} search={search} />
        ))}
      </div>
      <Pagination pageNums={pageNums} page={page} setPage={setPage} />
    </>
  );
};

export default Content;
