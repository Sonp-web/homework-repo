import "./App.css";
import axios from "axios";
import { usersApi, type UserType } from "../api/userApi";
import { useForm } from "react-hook-form";

function App() {
  const { handleSubmit, register } = useForm<UserType>();
  const registerUser = async (user: UserType) => {
    try {
      const { data } = await usersApi.addUser(user);
      console.log(data);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(e.response?.data?.message || e.message);
      } else if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log("Unknown error");
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(registerUser)}>
        <label htmlFor="email">email</label>
        <input
          id="email"
          {...register("email", {
            required: "Обязательное поле для ввода",
          })}
        />
        <label htmlFor="password">password</label>
        <input
          id="password"
          {...register("password", {
            required: "Обязательное поле для ввода",
          })}
        />
        <label htmlFor="name">name</label>
        <input
          id="name"
          {...register("name", {
            required: "Обязательное поле для ввода",
          })}
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
}

export default App;
