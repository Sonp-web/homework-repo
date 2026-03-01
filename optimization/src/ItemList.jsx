import { useMemo } from "react";
import React from "react";
import withRenderTracker from "./withRenderTracker";
const ItemList = ({ list, filterStr }) => {
  const array = useMemo(() => {

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
const ItemListHOC = withRenderTracker(ItemList)
export default React.memo(ItemListHOC);
