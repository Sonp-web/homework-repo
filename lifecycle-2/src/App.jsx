import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [imgs, setImgs] = useState();
  const [breeds, setBreeds] = useState();
  const [activeBreed, setActiveBreed] = useState("all");
  useEffect(() => {
    const fetching = async () => {
      const responce = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await responce.json();
      setBreeds([
        <option value="all">Все породы</option>,
        ...Object.getOwnPropertyNames(data.message).map((item) => (
          <option value={item}>{item}</option>
        )),
      ]);
      console.log();
    };
    fetching();
  }, []);

  useEffect(() => {
    setImgs(<h1>Загрузка...</h1>);
    let temp = count == 0 ? 3 : document.getElementById("number").value;
    let url =
      activeBreed == "all"
        ? `https://dog.ceo/api/breeds/image/random/${temp}`
        : `https://dog.ceo/api/breed/${activeBreed}/images/random/${temp}`;
    const fetching = async () => {
      const responce = await fetch(url);
      const data = await responce.json();
      const preload = data.message.map((item) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = item;
          img.onload = resolve;
        });
      });
      await Promise.all(preload);
      setImgs(
        data.message.map((item) => {
          return <img src={item}></img>;
        }),
      );
    };
    fetching();
  }, [count, activeBreed]);

  return (
    <>
      <h1>Галерея собак</h1>
      <p>Картинки обновлены {count} раз(а)</p>
      <div className="div">
        <div>
          <label htmlFor="breed">Порода:</label>
          <select
            name="breed"
            id="breed"
            onChange={(e) => setActiveBreed(e.target.value)}
          >
            {breeds}
          </select>
        </div>
        <label htmlFor="number">Показать</label>
        <input type="number" id="number" placeholder="3" />
        <button onClick={() => setCount((oldCount) => oldCount + 1)}>
          Обновить
        </button>
      </div>
      <div className="img__wrapper">{imgs}</div>
    </>
  );
}

export default App;
