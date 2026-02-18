//{
//  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGUyNkBleGFtcGxlLmNvbSIsImlkIjoyMDg5LCJpYXQiOjE3NjgzMTkxODl9._3iBTmGIHmvv2pXzi22YK63qoIj79NMsP5okMZbcr_E"
//}
async function registration(username, email, password, gender, age) {
  try {
    const responce = await fetch(
      "https://todo-redev.herokuapp.com/api/users/register",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          gender: gender,
          age: age,
        }),
      },
    );
    const data = await responce.json();
    console.log("registration");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
async function login(email, password) {
  try {
    const responce = await fetch(
      "https://todo-redev.herokuapp.com/api/auth/login",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      },
    );
    const data = await responce.json();
    console.log("login");
    console.log(data);
    return ({ token } = data);
  } catch (error) {
    console.log("error ", error);
  }
}
async function createTask(str, token) {
  try {
    const responce = await fetch("https://todo-redev.herokuapp.com/api/todos", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: str,
      }),
    });
    const data = await responce.json();
    console.log("createTask");
    console.log(data);
    return ({ id } = data);
  } catch (error) {
    console.log("error ", error);
  }
}
async function getTasks(token) {
  try {
    const responce = await fetch("https://todo-redev.herokuapp.com/api/todos", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    });
    const data = await responce.json();
    console.log("getTask");
    console.log(data);
    return data;
  } catch (error) {
    console.log("error ", error);
  }
}
async function editTask(str, id, token) {
  try {
    const responce = await fetch(
      `https://todo-redev.herokuapp.com/api/todos/${id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: str,
        }),
      },
    );
    const data = await responce.json();
    console.log("editTask");
    console.log(data);
  } catch (error) {
    console.log("error ", error);
  }
}
async function deleteTask(id, token) {
  try {
    const responce = await fetch(
      `https://todo-redev.herokuapp.com/api/todos/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      },
    );
    const data = await responce.json();
    console.log("deleteTask");
    console.log(data);
  } catch (error) {
    console.log("error ", error);
  }
}

async function editTaskComplete(id, token) {
  try {
    const responce = await fetch(
      `https://todo-redev.herokuapp.com/api/todos/${id}/isCompleted`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
        body: JSON.stringify({
          isCompleted: true,
        }),
      },
    );
    const data = await responce.json();
    console.log("editTaskComplete");
    console.log(data);
  } catch (error) {
    console.log("error ", error);
  }
}

async function main() {
  await registration(
    "egor26",
    "example26@example.com",
    "Asd1111$",
    "female",
    26,
  );

  const { token } = await login("example26@example.com", "Asd1111$");

  const { id } = await createTask("ÐšÑƒÐ¿Ð¸Ñ‚ÑŒ Ñ€Ñ‹Ð±Ñƒ", token);

  const tasks = await getTasks(token);

  await editTask("ÐšÑƒÐ¿Ð¸Ñ‚ÑŒ Ð¼ÑÑÐ¾", id, token);

  //
  await editTaskComplete(id, token);
  await getTasks(token);

  await deleteTask(id, token);
}

main();
