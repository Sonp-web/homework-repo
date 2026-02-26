import { useState } from "react";
import "./AllStyle.css";
import UserInfo from "./UserInfo";
function Profile() {
  const [test, setTest] = useState(0);
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });
  return (
    <div className="wrapper">
      <UserInfo user={user}></UserInfo>
      <button
        onClick={() =>
          setUser((oldUser) => {
            return { ...oldUser, name: "Егор" };
          })
        }
      >
        Сменить имя
      </button>
      <button
        onClick={() =>
          setUser((oldUser) => {
            return { ...oldUser, age: oldUser.age + 1 };
          })
        }
      >
        Увеличить возраст
      </button>
      <button
        onClick={() =>
          setUser((oldUser) => {
            return { ...oldUser, isActive: !oldUser.isActive };
          })
        }
      >
        Переключить активность
      </button>
      <button onClick={() => setTest((oldTest) => oldTest + 1)}>{test}</button>
    </div>
  );
}
export default Profile;
