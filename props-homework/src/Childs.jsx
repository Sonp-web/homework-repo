const Childs = ({ childs }) => {
  return (
    <p>
      My children:
      {childs.map((item) => {
        return <span>{item}</span>;
      })}
    </p>
  );
};
export default Childs;
