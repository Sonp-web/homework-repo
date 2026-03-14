import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const UseContext = () => {
  return (
    <>
      <h1>UseContext</h1>
      <p>
        useContext — это React Hook, который позволяет вам читать и
        подписываться на контекст вашего компонента.
      </p>
      <h2>useContext(SomeContext)</h2>
      <p>Параметры</p>
      <ul>
        <li>
          SomeContext: контекст, который вы ранее создали с помощью
          createContext. Сам контекст не содержит информацию, он представляет
          только ту информацию, которую вы можете предоставить или прочитать из
          компонентов.
        </li>
      </ul>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`import { useContext } from 'react';

function MyComponent() {
    const theme = useContext(ThemeContext);
// ...`}</SyntaxHighlighter>
      <p>
        useContext возвращает значение контекста для вызывающего компонента. Он
        определяется как value переданный ближайшему SomeContext.Provider выше
        вызывающего компонента в дереве. Если такого провайдера нет, то
        возвращаемое значение будет тем, defaultValue которое вы определили в
        createContext для этого контекста. Возвращаемое значение всегда
        актуально. React автоматически перерисовывает компоненты, которые
        считывают некоторый контекст, если он изменяется.
      </p>
      <div className="rule">
        Неважно, сколько уровней компонентов находится между провайдером и
        потребителем контекста. UseContext() всегда ищет ближайшего провайдера
        над компонентом, который его вызывает. Он ищет вверх и не рассматривает
        провайдеров в компоненте, из которого вы вызываете useContext().
      </div>
      <p>Пример использования контекста в этом проекте:</p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`//Создадим компонент с нашим контекстом ThemeContext.js
import { useState, useEffect, createContext } from 'react'
const Context = createContext(); //создадим контекст без значения по умолчанию
const ThemeContext = (props) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark'); // читаем сохранненую тему из localStorage, если её нет используем темную тему
    useEffect(()=>{
        localStorage.setItem('theme',theme); // записываем информацию о выбранной теме в localStorage
    },[theme])
    const toggleTheme = () => {
        setTheme((theme)=>theme === 'dark' ? 'light' : 'dark');
    }
    const ctx = {
        theme,
        toggleTheme
    }
    return (
        <Context.Provider value={ctx}>{props.children}</Context.Provider> // возвращаем обертку с контекстом для наших компонентов
    )
}
export {ThemeContext, Context}; // экспортируем компонент и контекст

//оборачиваем наши компоненты в index.js в обертку с контекстом для дальнейшего использования
import {ThemeContext} from './components/ThemeContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContext>
      //...
    </ThemeContext>
  </React.StrictMode>
);
// Используем наш контекст в компонентах
// NavigationLinks.js
import { Context } from "./ThemeContext"; // импорт контекста
const NavigationLinks = () => {
    const {theme} = useContext(Context);
    return (
        <nav className={"navigation " + theme }> // используем полученный контекст для выбора класса css
            /...
        </nav>
    )
}`}</SyntaxHighlighter>
      <h2>API</h2>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`const MyContext = React.createContext(defaultValue)`}
      </SyntaxHighlighter>
      <p>
        Создаёт объект Context. Когда React рендерит компонент, который подписан
        на этот объект, React получит текущее значение контекста из ближайшего
        подходящего Provider выше в дереве компонентов.
      </p>
      <p>
        Аргумент defaultValue используется только в том случае, если для
        компонента нет подходящего Provider выше в дереве. Значение по умолчанию
        может быть полезно для тестирования компонентов в изоляции без
        необходимости оборачивать их. Обратите внимание: если передать undefined
        как значение Provider, компоненты, использующие этот контекст, не будут
        использовать defaultValue.
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`<MyContext.Provider value={/* некоторое значение */}>`}</SyntaxHighlighter>
      <p>
        Каждый объект Context используется вместе с Provider компонентом,
        который позволяет дочерним компонентам, использующим этот контекст,
        подписаться на его изменения.
      </p>
      <p>
        Компонент Provider принимает проп value, который будет передан во все
        компоненты, использующие этот контекст и являющиеся потомками этого
        компонента Provider. Один Provider может быть связан с несколькими
        компонентами, потребляющими контекст. Так же компоненты Provider могут
        быть вложены друг в друга, переопределяя значение контекста глубже в
        дереве.
      </p>
      <p>
        Все потребители, которые являются потомками Provider, будут повторно
        рендериться, как только проп value у Provider изменится. Потребитель
        (включая .contextType и useContext) перерендерится при изменении
        контекста, даже если его родитель, не использующий данный контекст,
        блокирует повторные рендеры с помощью shouldComponentUpdate.
      </p>
      <h2>Использование в классовых компонентах</h2>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`class MyClass extends React.Component {
componentDidMount() {
    let value = this.context;
    /* выполнить побочный эффект на этапе монтирования, используя значение MyContext */
}
componentDidUpdate() {
    let value = this.context;
    /* ... */
}
componentWillUnmount() {
    let value = this.context;
    /* ... */
}
render() {
    let value = this.context;
    /* отрендерить что-то, используя значение MyContext */
    }
}
MyClass.contextType = MyContext;

//используя static
class MyClass extends React.Component {
    static contextType = MyContext;
    render() {
      let value = this.context;
      /* отрендерить что-то, используя значение MyContext */
    }
  }`}</SyntaxHighlighter>
      <p>
        В свойство класса contextType может быть назначен объект контекста,
        созданный с помощью React.createContext(). С помощью этого свойства вы
        можете использовать ближайшее и актуальное значение указанного контекста
        при помощи this.context. В этом случае вы получаете доступ к контексту,
        как во всех методах жизненного цикла, так и в рендер-методе.
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`<MyContext.Consumer>
    {value => /* отрендерить что-то, используя значение контекста */}
</MyContext.Consumer>`}</SyntaxHighlighter>
      <p>
        Consumer — это React-компонент, который подписывается на изменения
        контекста. В свою очередь, использование этого компонента позволяет вам
        подписаться на контекст в функциональном компоненте.
      </p>
      <p>
        Consumer принимает функцию в качестве дочернего компонента. Эта функция
        принимает текущее значение контекста и возвращает React-компонент.
        Передаваемый аргумент value будет равен ближайшему (вверх по дереву)
        значению этого контекста, а именно пропу value компонента Provider. Если
        такого компонента Provider не существует, аргумент value будет равен
        значению defaultValue, которое было передано в createContext().
      </p>
      <div className="rule">
        Consumer можно заменить использованием хука useContext().
      </div>
      <p>
        Объекту Context можно задать строковое свойство displayName. React
        DevTools использует это свойство при отображении контекста.
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`const MyContext = React.createContext(/* некоторое значение */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" в DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" в DevTools`}</SyntaxHighlighter>
    </>
  );
};
export default UseContext;
