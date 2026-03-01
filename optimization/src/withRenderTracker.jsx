import { useRef, useEffect } from "react";
const withRenderTracker = (WrapperComponent) => {
  return (props) => {
    let num = useRef(0);
    useEffect(() => {
      console.log(
        `Компонент ${WrapperComponent.name} рендерился ${++num.current} раз`,
      );
    });
    return <WrapperComponent {...props} />;
  };
};
export default withRenderTracker;
