import { useMemo } from "react";
import React from "react";
const ItemList = ({ list, filterStr }) => {
  console.log("ItemList");
  const array = useMemo(() => {
    console.log("filter");

    return list.filter((item) => item.includes(filterStr));
  }, [list, filterStr]);
  return (
    <ul>
      {array.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};
export default React.memo(ItemList);
