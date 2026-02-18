import { useState } from "react";
import "./AllStyle.css";
function Profile() {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });
  return (
    <div className="wrapper">
      <h2>Профиль пользователя</h2>
      <p>Имя пользователя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? "true" : "false"}</p>
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
    </div>
  );
}
export default Profile;
