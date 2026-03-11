import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const Refs = () => {
  return (
    <>
      <h1>Refs</h1>
      <p>
        Рефы дают возможность получить доступ к DOM-узлам или React-элементам,
        созданным в рендер-методе.
      </p>
      <p>
        В обычном потоке данных React родительские компоненты могут
        взаимодействовать с дочерними только через пропсы. Чтобы модифицировать
        потомка, вы должны заново отрендерить его с новыми пропсами. Тем не
        менее, могут возникать ситуации, когда вам требуется императивно
        изменить дочерний элемент, обойдя обычный поток данных. Подлежащий
        изменениям дочерний элемент может быть как React-компонентом, так и
        DOM-элементом. React предоставляет лазейку для обоих случаев.
      </p>
      <p>Ситуации, в которых использование рефов является оправданным:</p>
      <ul>
        <li>Управление фокусом, выделение текста или воспроизведение медиа.</li>
        <li>Императивный вызов анимаций.</li>
        <li>Интеграция со сторонними DOM-библиотеками.</li>
      </ul>
      <div className="rule">
        Избегайте использования рефов в ситуациях, когда задачу можно решить
        декларативным способом.
      </div>
      <p>
        Рефы создаются с помощью React.createRef() и прикрепляются к
        React-элементам через ref атрибут. Обычно рефы присваиваются свойству
        экземпляра класса в конструкторе, чтобы на них можно было ссылаться из
        любой части компонента.
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return <div ref={this.myRef} />;
    }
}`}</SyntaxHighlighter>
      <p>
        Когда реф передаётся элементу в методе render, ссылка на данный узел
        доступна через свойство рефа current.
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`const node = this.myRef.current;`}</SyntaxHighlighter>
      <p>Значение рефа отличается в зависимости от типа узла:</p>
      <ul>
        <li>
          Когда атрибут ref используется с HTML-элементом, свойство current
          созданного рефа в конструкторе с помощью React.createRef() получает
          соответствующий DOM-элемент.
        </li>
        <li>
          Когда атрибут ref используется с классовым компонентом, свойство
          current объекта-рефа получает экземпляр смонтированного компонента.
        </li>
        <li>
          Нельзя использовать ref атрибут с функциональными компонентами, потому
          что для них не создаётся экземпляров.
        </li>
      </ul>
      <p>В функциональных компонентах необходимо использовать хук useRef().</p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`const ref = useRef(initialValue)`}
      </SyntaxHighlighter>
      <p>Параметры</p>
      <ul>
        <li>
          initialValue: значение, которое вы хотите, чтобы свойство объекта ref
          current было изначально. Это может быть значение любого типа. Этот
          аргумент игнорируется после начального рендеринга.
        </li>
      </ul>
      <p>
        useRef возвращает объект с одним свойством: current: Изначально
        установленное в initialValue. Позже вы можете установить его на что-то
        другое. Если вы передадите объект ref в React как ref атрибут узла JSX,
        React установит его current свойство. При следующих рендерах useRefбудет
        возвращаться тот же объект
      </p>
      <div className="rule">
        Не записывайте и не читайте ref.current во время рендеринга. Вместо
        этого вы можете читать или писать ссылки из обработчиков событий или
        эффектов
      </div>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`import { useRef } from 'react';
export default function Form() {
    const inputRef = useRef(null);
    function handleClick() {
        inputRef.current.focus();
    }
    return (
    <>
        <input ref={inputRef} />
        <button onClick={handleClick}>Focus the input</button>
    </>
    );
}`}</SyntaxHighlighter>
    </>
  );
};
export default Refs;
