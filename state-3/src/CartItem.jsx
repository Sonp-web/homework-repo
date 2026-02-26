import React from "react";
const CartItem = ({ item, setCart }) => {
  console.log("CartItem");

  return (
    <>
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
    </>
  );
};
export default React.memo(CartItem);
