import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const RegistrationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();
  const password = watch("password");
  const navigate = useNavigate();
  const onSubmit = (data) => {
    try {
      navigate("./done", {
        state: {
          data: data,
        },
      });
    } catch (e) {
      console.log(e);
    }

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", {
            required: "Обязательное поле для ввода",
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <input
          type="email"
          {...register("email", {
            required: "Обязательное поле для ввода",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Неверный email",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          {...register("password", {
            required: "Обязательное поле для ввода",
            minLength: {
              value: 6,
              message: "Слишком короткий пароль",
            },
            pattern: {
              value: /[A-Z]/,
              message: "Должна быть хотя бы одна заглавная буква",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          {...register("twinPassword", {
            required: "Пароли не совпадают",
            validate: (value) => value === password || "Пароли не совпадают",
          })}
        />
        {errors.twinPassword && <p>{errors.twinPassword.message}</p>}
        <input
          type="date"
          {...register("date", { required: "Обязательное поле для ввода" })}
        />
        {errors.date && <p>{errors.date.message}</p>}
        <select {...register("male")}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <input
          type="tel"
          {...register("tel", { required: "Обязательное поле для ввода" })}
        />
        {errors.tel && <p>{errors.tel.message}</p>}
        <button type="submit">Зарегистрироваться</button>
      </form>
      <Outlet />
    </>
  );
};
export default RegistrationForm;
