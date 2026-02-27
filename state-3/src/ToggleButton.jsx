const ToggleButton = ({ onClick, value }) => {
  return (
    <>
      <button onClick={onClick}>{value}</button>
    </>
  );
};
export default ToggleButton;
