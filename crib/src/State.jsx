import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const State = () => {
  return (
    <>
      <h1>State</h1>
      <p>
        React предоставляет декларативный способ управления пользовательским
        интерфейсом. Вместо непосредственного управления отдельными частями
        пользовательского интерфейса вы описываете различные состояния (стейты,
        state), в которых может находиться ваш компонент, и переключаетесь между
        ними в ответ на действия пользователя.
      </p>
      <div className="rule">
        Состояния, в отличии от пропсов, можно изменять. При изменении состояния
        изменения произойдут во всех местах, где это состояние используется.
        Технически это достигается путем перендерования всего компонента при
        изменении какого-либо состояния.
      </div>
      <p>
        Состояния можно использвать как в классовых, так и в функциональных
        компонентах. Для работы с состоянием в классовом компоненте используется
        объекст state. В функциональных же компонентах для управления состоянием
        применяется другая архитектура, основанная на хуках.
      </p>
      <p>
        Объект state описывает внутреннее состояние компонента, он похож на
        props за тем исключением, что состояние определяется внутри компонента и
        доступно только из компонента. Если props представляет входные данные,
        которые передаются в компонент извне, то состояние хранит такие объекты,
        которые создаются в компоненте и полностью зависят от компонента.
      </p>
      <div className="rule">
        Значения из state должны использоваться при рендеринге. Если какой-то
        объект не используется в рендерниге компонента, то нет смысла сохранять
        его в state.
      </div>
      <h2>Объявление состояния</h2>
      <p>
        Стейт устанавливается в конструкторе класса, либо как свойство класса:
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {welcome: "Добро пожаловать на сайт!"};
    }
    render() {
        return <h1>{this.state.welcome}</h1>;
    }
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <Hello />
);

//или 

class Hello extends React.Component {
    state = {welcome: "Добро пожаловать на сайт!"}
    render() {
        return <h1>{this.state.welcome}</h1>;
    }
}
//...`}</SyntaxHighlighter>
      <p>
        Для функциональных компонентов используется хук useState. Хук — это
        специальная функция, которая позволяет «подцепиться» к возможностям
        React.
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`import React, { useState } from 'react';

function Example() {
    // Объявление новой переменной состояния «count»
    const [count, setCount] = useState(0);
    //...
}
`}</SyntaxHighlighter>
      <p>
        Вызов useState объявляет переменную состояния, в качестве аргумента
        принимает единственный аргумент - начальное состояние. В отличие от
        случая с классами, состояние может быть и не объектом, а строкой или
        числом. Возвращает пару значений: текущее состояние и функцию,
        обновляющую состояние. Поэтому мы пишем const [count, setCount] =
        useState(). Это похоже на this.state.count и this.setState в классах, с
        той лишь разницей, что сейчас мы принимаем их сразу в паре.
      </p>
      <div className="rule">
        Если нам нужно было бы хранить два разных значения в состоянии, то
        пришлось бы вызвать useState() дважды.
      </div>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`const [count, setCount] = useState(0);
const [price, setPrice] = useState(0);`}</SyntaxHighlighter>
      <h2>Обновление состояния</h2>
      <p>Для обновления состояния вызывается функция setState():</p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`this.setState({welcome: "Привет React"});`}</SyntaxHighlighter>
      <p>
        Изменение состояния вызовет повторный рендеринг компонента, в
        соответствии с чем веб-страница будет обновлена. В то же время не стоит
        изменять свойства состояния напрямую. При этом нам не обязательно
        обновлять все его значения. В процессе работы программы мы можем
        обновить только некоторые свойства. Тогда необновленные свойства будут
        сохранять старые значения. Пример обновления состояния:
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`// так делать нельзя
this.state.welcome = "Привет React"; 
// правильное изменение состояния 
class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Нажми"}; 
        this.press = this.press.bind(this);
    }
    press(){
        let className = (this.state.class==="off")?"on":"off";
        this.setState({class: className});
    }
    render() {
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
    }
}`}</SyntaxHighlighter>
      <p>
        Для изменения состояния в случае использования хука useState()
        используется функция полученная при вызове хука:
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`const [count, setCount] = useState(0);
//...
<button onClick={() => setCount(count + 1)}>
    Нажми на меня
</button>`}</SyntaxHighlighter>
      <h2>Асинхронное обновление</h2>
      <p>
        При наличии нескольких вызовов setState() React может объединять их в
        один общий пакет обновлений для увеличения производительности. Так как
        объекты this.props и this.state могут обновляться асинхронно, не стоит
        полагаться на значения этих объектов для вычисления состояния. Например:
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">{`this.setState({
    counter: this.state.counter + this.props.increment,
});`}</SyntaxHighlighter>
      <p>
        Для обновления надо использовать другую версию функции setState(),
        которая в качестве параметра принимает функцию. Данная функция имеет два
        параметра: предыдущее состояние объекта state и объект props на момент
        применения обновления:
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`this.setState(function(prevState, props) {
    return {
        counter: prevState.counter + props.increment
    };
});
//например, два последовательных вызова setState()
// увеличит значение только на 1
press(){ 
    this.setState({counter: this.state.counter + parseInt(this.props.increment)});
    this.setState({counter: this.state.counter + parseInt(this.props.increment)});
}
// теперь значение увеличивается на 2
incrementCounter(prevState, props) {
    return {
      counter: prevState.counter + parseInt(props.increment)
    };
}
press(){
    this.setState(this.incrementCounter);
    this.setState(this.incrementCounter);
}`}</SyntaxHighlighter>
      <p>Это равносильно и для useState():</p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`function handleClick() {
    setAge(age + 1); // setAge(42 + 1)
    setAge(age + 1); // setAge(42 + 1)
    setAge(age + 1); // setAge(42 + 1)
}

function handleClick() {
    setAge(a => a + 1); // setAge(42 => 43)
    setAge(a => a + 1); // setAge(43 => 44)
    setAge(a => a + 1); // setAge(44 => 45)
}`}</SyntaxHighlighter>
    </>
  );
};
export default State;
