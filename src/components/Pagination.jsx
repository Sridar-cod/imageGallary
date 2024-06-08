import React, { useState } from "react";

const Pagination = ({ pageNums, setPageToDisplay, pageToDisplay }) => {
  const [pageIndex, setPageIndex] = useState({ startIndex: 0, endIndex: 5 });
  const pageNum = pageNums.slice(pageIndex.startIndex, pageIndex.endIndex);

  const handlePageMove = (info) => {
    if (info == "right" && pageIndex.endIndex < pageNums.length) {
      setPageIndex((pre) => {
        return {
          ...pre,
          startIndex: pre.startIndex++,
          endIndex: pre.endIndex++,
        };
      });
    } else {
      if (pageIndex.startIndex >= 1 && info == "left") {
        setPageIndex((pre) => {
          return {
            ...pre,
            startIndex: pre.startIndex--,
            endIndex: pre.endIndex--,
          };
        });
      }
    }
  };

  const handlepageClick = (pageNum) => {
    setPageToDisplay(pageNum);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="pagination  d-flex justify-content-center">
        <div className="d-flex pagination__inner">
          <img
            src="./assets/left.svg"
            width={"30px"}
            onClick={() => handlePageMove("left")}
            alt=""
          />

          {pageNum.map((num) => {
            return (
              <h5
                className="pagination__inner__h5"
                style={
                  pageToDisplay == num
                    ? { backgroundColor: "#000000", color: "white" }
                    : null
                }
                onClick={() => handlepageClick(num)}
              >
                {num}
              </h5>
            );
          })}
          <img
            src="./assets/right.svg"
            width={"30px"}
            alt=""
            onClick={() => handlePageMove("right")}
          />
        </div>
      </div>
    </>
  );
};

export default Pagination;
