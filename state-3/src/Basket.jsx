import { useState } from "react";
import "./AllStyle.css";
import CartItem from "./CartItem";
function Basket() {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
    { id: 3, title: "Футболка", count: 1 },
    { id: 4, title: "Кепка", count: 2 },
  ]);
  return (
    <div className="wrapper">
      <h2>Корзина товаров</h2>
      {cart.map((item) => {
        return (
          <CartItem key={item.id} item={item} setCart={setCart}></CartItem>
        );
      })}
      <button onClick={() => setCart([])}>Очистить корзину</button>
    </div>
  );
}
export default Basket;
