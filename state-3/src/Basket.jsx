import { useState } from "react";
import "./AllStyle.css";
function Basket() {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);
  return (
    <div className="wrapper">
      <h2>Корзина товаров</h2>
      {cart.map((item) => {
        return (
          <p>
            {item.title} (Кол-во: {item.count})
            <button
              id={item.id}
              onClick={(e) =>
                setCart((oldCart) => {
                  return oldCart.map((card) => {
                    if (card.id == e.target.id) {
                      return { ...card, count: card.count + 1 };
                    }
                    return card;
                  });
                })
              }
            >
              +1
            </button>
            <button
              id={item.id}
              onClick={(e) =>
                setCart((oldCart) => {
                  return oldCart.filter((card) => card.id != e.target.id);
                })
              }
            >
              Удалить
            </button>
          </p>
        );
      })}
      <button onClick={() => setCart([])}>Очистить корзину</button>
    </div>
  );
}
export default Basket;
