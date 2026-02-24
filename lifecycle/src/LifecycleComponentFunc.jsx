import { useState, useEffect } from "react";
function LifecycleComponentFunc() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch(
          "https://todo-redev.herokuapp.com/api/todos?isCompleted=true",
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyM0BnbWFpbC5jb20iLCJpZCI6MjIwMSwiaWF0IjoxNzcxNDM0NDI1fQ.B46W-DKss246oDkixErTRJGKvbwrKvpwPVMoynoFa5Y",
              accept: "application/json",
            },
          },
        );
        const data = await responce.json();
        console.log(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
    return () => {
      console.log("delete");
    };
  }, []);
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((oldCount) => oldCount + 1)}>
        {count}
      </button>
    </>
  );
}
export default LifecycleComponentFunc;
