import React from "react";
const SearchInput = ({ setText }) => {

  return <input type="text" onChange={setText}></input>;
};
export default React.memo(SearchInput);
