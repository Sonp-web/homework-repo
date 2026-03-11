import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const Key = () => {
  return (
    <>
      <h1>Key</h1>
      <p>
        Как правило, вы будете рендерить списки внутри какого-нибудь компонента.
      </p>
      <p>
        Если запустить рендер элементов массива, то мы увидим предупреждение о
        том, что у каждого элемента массива должен быть ключ (key). «Ключ» — это
        специальный строковый атрибут, который нужно указывать при создании
        списка элементов.
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}`}</SyntaxHighlighter>
      <p>
        Ключи помогают React определять, какие элементы были изменены, добавлены
        или удалены. Их необходимо указывать, чтобы React мог сопоставлять
        элементы массива с течением времени.
      </p>
      <p>
        Лучший способ выбрать ключ — это использовать строку, которая будет явно
        отличать элемент списка от его соседей. Чаще всего вы будете
        использовать ID из ваших данных как ключи.
      </p>
      <p>
        Когда у вас нет заданных ID для списка, то в крайнем случае можно
        использовать индекс элемента как ключ.
      </p>
      <div className="rule">
        Не рекомендуется использовать индексы как ключи, если порядок элементов
        может поменяться. Это негативно скажется на производительности и может
        вызвать проблемы с состоянием компонента
      </div>
      <p>
        Ключи нужно определять непосредственно внутри массивов. Например, если
        вы извлекаете компонент ListItem, то нужно указывать ключ для{" "}
        {`<ListItem />`} в массиве, а не в элементе {`<li>`} внутри самого
        ListItem.
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`function ListItem(props) {
    // Правильно! Не нужно определять здесь ключ:
    return <li>{props.value}</li>;
}
    
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Правильно! Ключ нужно определять внутри массива:
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>
        {listItems}
        </ul>
    );
}`}</SyntaxHighlighter>
      <div className="rule">
        Ключи внутри массива должны быть уникальными только среди своих соседних
        элементов. Им не нужно быть уникальными глобально. Можно использовать
        один и тот же ключ в двух разных массивах.
      </div>
      <p>
        Ключи служат подсказками для React, но они никогда не передаются в ваши
        компоненты. Если в компоненте нужно то же самое значение, то передайте
        его явно через проп с другим именем.
      </p>
      <p>
        JSX позволяет встроить любое выражение в фигурные скобки, так что мы
        можем включить результат выполнения map():
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
        {numbers.map((number) =>
            <ListItem key={number.toString()}
                    value={number} />
        )}
        </ul>
    );
}`}</SyntaxHighlighter>
    </>
  );
};
export default Key;
