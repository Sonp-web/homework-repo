const List = ({ list, addToLi }) => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            {item.text}
            <button onClick={() => addToLi(item.id)}>Кнопка !!!</button>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
