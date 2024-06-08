import React from "react";

const Pagination = ({ prevPage, nextPage }) => {
  return (
    <div>
      <button onClick={nextPage}>Next</button>
      <button onClick={prevPage}>Previous</button>
    </div>
  );
};

export default Pagination;
