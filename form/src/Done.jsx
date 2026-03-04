import { useLocation, useNavigate } from "react-router-dom";
import "./Done.css";
const Done = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};
  const arrValues = Object.keys(data);
  return (
    <div className="done">
      <h2>Well done</h2>
      {arrValues.map((item) => {
        return (
          <p key={item}>
            {item}:{data[item]}
          </p>
        );
      })}
      <button onClick={() => navigate("/")}>+</button>
    </div>
  );
};
export default Done;
