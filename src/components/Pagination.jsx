import React from "react";

const Pagination = ({ prevPage, nextPage, previousPageUrl, nextPageUrl }) => {
  return (
    <div>
      {nextPageUrl && <button onClick={nextPage}>Next</button>}
      {previousPageUrl && <button onClick={prevPage}>Previous</button>}
    </div>
  );
};

export default Pagination;
