import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const Forms = () => {
  return (
    <>
      <h1>Работа с формами</h1>
      <p>
        По умолчанию браузер переходит на другую страницу при отправке
        HTML-форм. Если вас это устраивает, то не надо ничего менять, в React
        формы работают как обычно. Однако чаще всего форму удобнее обрабатывать
        с помощью JavaScript-функции, у которой есть доступ к введённым данным.
        Стандартный способ реализации такого поведения называется «управляемые
        компоненты». Он использует состояние компонента.
      </p>
      <p>
        Для отмены стандартного поведения события обычно используется метод
        event.preventDefault().
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>Имя:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Отправить" />
        </form>
        );
    }
}`}</SyntaxHighlighter>
      <p>
        В управляемом компоненте значение поля ввода всегда определяется
        состоянием React. Хотя это означает, что вы должны написать немного
        больше кода, теперь вы сможете передать значение и другим UI-элементам
        или сбросить его с других обработчиков событий.
      </p>
      <h2>Неуправляемые компоненты</h2>
      <p>
        В большинстве случаев при работе с формами мы рекомендуем использовать
        управляемые компоненты. В управляемом компоненте, данные формы
        обрабатываются React-компонентом. В качестве альтернативы можно
        использовать неуправляемые компоненты. Они хранят данные формы прямо в
        DOM.
      </p>
      <p>
        Вместо того, чтобы писать обработчик события для каждого обновления
        состояния, вы можете использовать неуправляемый компонент и читать
        значения из DOM через реф.
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`lass NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }
    
    handleSubmit(event) {
        alert('Отправленное имя: ' + this.input.current.value);
        event.preventDefault();
    }
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>Имя:<input type="text" ref={this.input} /></label>
            <input type="submit" value="Отправить" />
        </form>
        );
    }
}`}</SyntaxHighlighter>
    </>
  );
};
export default Forms;
