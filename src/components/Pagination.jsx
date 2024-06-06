import React, { useState } from "react";

const Pagination = ({ pageNums, setPage, page }) => {
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
    setPage(pageNum);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="pagination  d-flex justify-content-center">
        <div className="d-flex pagination__inner">
          <span onClick={() => handlePageMove("left")}>⬅️</span>
          {pageNum.map((num) => {
            return (
              <h5
                className="pagination__inner__h5"
                style={
                  page == num
                    ? { backgroundColor: "#2a7cff", color: "white" }
                    : null
                }
                onClick={() => handlepageClick(num)}
              >
                {num}
              </h5>
            );
          })}
          <span onClick={() => handlePageMove("right")}>➡️</span>
        </div>
      </div>
    </>
  );
};

export default Pagination;
