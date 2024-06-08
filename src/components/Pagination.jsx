import React from "react";

const Pagination = ({ prevPage, nextPage, previousPageUrl, nextPageUrl }) => {
  return (
    <div>
      {nextPageUrl && <button onClick={nextPage}>Next</button>}
      {previousPageUrl && <button onClick={prevPage}>Previous</button>}

      {/* //* AS SEEN IN VIDEO BUT DOESN'T WORK (MINE WORKS) */}
      {/* {nextPage && <button onClick={nextPage}>Next</button>}
      {prevPage && <button onClick={prevPage}>Previous</button>} */}
    </div>
  );
};

export default Pagination;
