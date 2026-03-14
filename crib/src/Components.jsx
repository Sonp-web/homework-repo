import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Components = () => {
  return (
    <>
      <h1>Components</h1>
      <p>
        Приложения React состоят из компонентов. Компоненты позволяют разбить
        интерфейс на независимые части, про которые легко думать в отдельности.
        Их можно складывать вместе и использовать несколько раз. Компонент может
        быть маленьким, как кнопка, или большим, как целая страница.
      </p>
      <p>
        Компоненты — это независимые и многократно используемые фрагменты кода,
        функции. Они служат той же цели, что и функции JavaScript, но работают
        изолированно и возвращают JSX.
      </p>
      <h2>Функциональные и классовые компоненты</h2>
      <ul>
        Компонент бывает:
        <li>Функциональный</li>
        <li>Классовый</li>
      </ul>
      <p>Проще всего объявить React-компонент как функцию:</p>

      <SyntaxHighlighter language="jsx" className="my-code">
        {`function Welcome{
    return <h1> Привет, {props.name} </h1>;
}`}
      </SyntaxHighlighter>
      <p>
        Эта функция — компонент, она получает данные в одном объекте («пропсы»)
        в качестве параметра и возвращает React-элемент. Такие компоненты
        называются «функциональными», так как они буквально являются функциями.
      </p>
      <p>Компоненты можно определять как классы ES6:</p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`class Welcome extends React.Component {
    render() {
        return <h1> Привет, {this.props.name} </h1>;
    }
}`}
      </SyntaxHighlighter>

      <p>С точки зрения React, эти два компонента эквивалентны.</p>
      <div className="rule">
        Компонент класса должен включать extends React.Component оператор. Этот
        оператор создает наследование для React.Component и предоставляет вашему
        компоненту доступ к функциям React.Component.
      </div>
      <h2>Композиция компонентов</h2>
      <p>
        Компоненты могут ссылаться на другие компоненты в возвращённом ими
        дереве. Это позволяет использовать одну и ту же абстракцию — компоненты
        — на любом уровне нашего приложения. Неважно, пишем ли мы кнопку, форму
        или целый экран: все они, как правило, представляют собой компоненты в
        React-приложениях.
      </p>
      <p>
        Например, компонент App может отрендерить компонент Welcome несколько
        раз:
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`function Welcome(props) {
    return <h1>Привет, {props.name}</h1>;
}
  
function App() {
    return (
        <div>
            <Welcome name= "Алиса" />
            <Welcome name= "Базилио" />
            <Welcome name= "Буратино" />
        </div>
    );
}
`}
      </SyntaxHighlighter>

      <h2>Рендер компонентов</h2>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`function Welcome(props) {
    return <h1>Привет, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Алиса" />;
root.render(element);`}
      </SyntaxHighlighter>

      <ul>
        <li>{`Мы вызываем root.render() c React-элементом <Welcome name="Алиса" />.`}</li>
        <li>{`React вызывает наш компонент Welcome с пропсами {name: 'Алиса'}.`}</li>
        <li>{`Наш компонент Welcome возвращает элемент <h1>Привет, Алиса</h1> в качестве результата.`}</li>
        <li>{`React DOM делает минимальные изменения в DOM, чтобы получилось <h1>Привет, Алиса</h1>.`}</li>
      </ul>
      <div className="rule">
        Всегда называйте компоненты с заглавной буквы. Если компонент начинается
        с маленькой буквы, React принимает его за DOM-тег.
      </div>
      <h2>Извлечение компонентов</h2>
      <p>
        В больших приложениях очень полезно иметь палитру компонентов, которые
        можно многократно использовать. Правило извлечения компонента: Если
        какая-то часть интерфейса многократно в нём повторяется (Button, Panel,
        Avatar) или сама по себе достаточно сложная (App, FeedStory, Comment),
        имеет смысл её вынести в независимый компонент.
      </p>
    </>
  );
};
export default Components;
