import React from "react";
const SearchInput = ({ setText }) => {
  console.log("searchInput");

  return <input type="text" onChange={setText}></input>;
};
export default React.memo(SearchInput);
