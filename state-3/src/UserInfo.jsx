import React from "react";
const UserInfo = ({ user }) => {
  console.log("UserInfo");

  return (
    <>
      <h2>Профиль пользователя</h2>
      <p>Имя пользователя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? "true" : "false"}</p>
    </>
  );
};
export default React.memo(UserInfo);
