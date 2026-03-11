import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Props = () => {
  return (
    <>
      <h1>Props</h1>
      <p>
        Компоненты React используют props для связи друг с другом. Каждый
        родительский компонент может передавать некоторую информацию своим
        дочерним компонентам, предоставляя им реквизиты (пропсы).
      </p>
      <p>
        Props - это объект. Получить его свойства можно также, как и при работе
        с обычным объектом:
      </p>
      <div className="rule">
        Компонент никогда не должен что-то записывать в свои пропсы, пропсы
        можно только читать!
      </div>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`// функциональный компонент
function MyComponent(props){
    return (<div>{props.message}</div>)
}

// классовый компонент
class MyComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<div>{this.props.message}</div>)
    }
}

// используя дектруктуризацию 
function MyComponent({message}){
    return (<div>{message}</div>)
}`}
      </SyntaxHighlighter>
      <p>
        Если вы хотите присвоить пропсу значение по умолчанию, чтобы вернуться к
        нему, когда значение не указано, вы можете сделать это с помощью
        деструктуризации, поставив = и значение по умолчанию сразу после
        параметра:
      </p>

      <SyntaxHighlighter language="jsx" className="my-code">
        {`function Avatar({ person, size = 100 }) {
    // ...
}`}
      </SyntaxHighlighter>
      <p>
        Теперь, если компонент рендерится без size реквизита, size будет
        установлено значение 100. Значение по умолчанию используется только в
        том случае, если size реквизит отсутствует или если вы передаете size=
        {undefined}. Но если вы передадите size={null}или size={0}, значение по
        умолчанию не будет использоваться.
      </p>
      <div className="rule">
        Если не передавать значение в пропс, то по умолчанию оно будет true. Эти
        два JSX выражения эквивалентны:
      </div>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`<MyTextBox autocomplete />
<MyTextBox autocomplete={true} />`}
      </SyntaxHighlighter>

      <p>
        В JSX-выражениях содержимое, которое расположено между открывающими и
        закрывающими тегами, передаётся с помощью специального пропса:
        props.children.
      </p>
      <p>
        Если поместить строку между открывающим и закрывающим тегом, то
        props.children будет равно этой строке. Это полезно при создании
        встроенных HTML-элементов. HTML не экранируется, поэтому JSX можно
        писать так же, как HTML, к примеру:
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`<MyComponent>Привет, мир!</MyComponent>
<div>Это одновременно и валидный HTML и JSX.</div>`}
      </SyntaxHighlighter>

      <div className="rule">
        JSX удаляет пустые строки и пробелы в начале и конце строки. Новые
        строки, примыкающие к тегу будут удалены. Новые строки между строковых
        литералов сжимаются в один пробел
      </div>
      <p>
        Чтобы отобразить вложенные компоненты, можно указать несколько
        JSX-элементов в качестве дочерних.
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`<MyContainer>
    <MyFirstComponent />
    <MySecondComponent />
</MyContainer>`}
      </SyntaxHighlighter>

      <p>
        Можно смешивать различные типы потомков: использовать строковый литерал
        вместе с JSX-элементами (1). Также React-компонент может возвращать
        массив (2) элементов:
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`//(1)
<div>
    Ниже представлен список:
    <ul>
        <li>Элемент 1</li>
        <li>Элемент 2</li>
    </ul>
</div>

//(2)
render() {
    // Не нужно оборачивать список элементов в дополнительный элемент!
    return [
      <li key="A">Первый элемент</li>,
      <li key="B">Второй элемент</li>,
      <li key="C">Третий элемент</li>,
    ];
}`}
      </SyntaxHighlighter>

      <p>
        Можно передать любое JavaScript-выражение как дочерний компонент,
        обернув его в "{}". Часто это бывает полезно при рендере списка
        JSX-выражений произвольной длины. Например, эта запись рендерит
        HTML-список:
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`function Item(props) {
    return <li>{props.message}</li>;
}

function TodoList() {
    const todos = ['закончить документацию', 'отправить пулреквест', 'снова напомнить Паше про ревью'];
    return (
        <ul>
            {todos.map((message) => <Item key={message} message={message} />)}
        </ul>
    );
}`}
      </SyntaxHighlighter>

      <div className="rule">
        Дочерние компоненты, передаваемые пользовательскому компоненту, могут
        быть чем угодно с тем условием, что компонент преобразует их во что-то,
        что React сможет понять и отрендерить.
      </div>
      <p>Пример передачи функции в качестве дочернего компонента:</p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`// Вызывает колбэк numTimes раз для создания повторяющего компонента
function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
    }
    return <div>{items}</div>;
}

function ListOfTenThings() {
    return (
    <Repeat numTimes={10}>
        {(index) => <div key={index}>Это элемент списка с ключом {index}</div>}
    </Repeat>
    );
}`}
      </SyntaxHighlighter>

      <p>
        Значения false, null, undefined и true — валидные дочерние компоненты.
        Просто они не рендерятся. Этот подход может быть полезным для рендера по
        условию. Вот пример, где JSX рендерит {`<Header />`}, если showHeader
        равняется true:
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`<div>
    {showHeader && <Header />}
    <Content />
</div>`}
      </SyntaxHighlighter>

      <p>
        Есть один нюанс в том, что React будет рендерить «ложные» (falsy)
        значения, такие как число 0. 0 будет отображён, если массив
        props.messages пуст (1). Чтобы исправить это, убедитесь что выражение
        перед оператором && всегда является boolean (2). И наоборот, если вы
        хотите, чтобы такие значения как false, true, null или undefined
        отрисовались, то сначала вы должны преобразовать их в строку (3):
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`// (1)
<div>{props.messages.length && <MessageList messages={props.messages} />}</div>
// (2)
<div>{props.messages.length > 0 && <MessageList messages={props.messages} />} </div>
// (3)
<div>Моя переменная JavaScript - {String(myVariable)}.</div>`}
      </SyntaxHighlighter>
    </>
  );
};
export default Props;
