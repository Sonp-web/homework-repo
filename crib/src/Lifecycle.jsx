import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Lifecycle = () => {
  return (
    <>
      <h1>Lifecycle</h1>
      <p>
        В процессе работы компонент проходит через ряд этапов жизненного цикла.
        На каждом из этапов вызывается определенная функция, в которой мы можем
        определить какие-либо действия.
      </p>
      <ul>
        У каждого компонента в React есть три основные фазы:
        <li>монтирование</li>
        <li>обновление</li>
        <li>размонтирование</li>
      </ul>
      <h2>Монтирование</h2>
      <ul>
        Монтирование означает размещение элементов в DOM. React имеет четыре
        встроенных метода, которые вызываются в этом порядке при монтировании
        компонента:
        <li>constructor()</li>
        <li>getDerivedStateFromProps()</li>
        <li>render()</li>
        <li>componentDidMount()</li>
      </ul>
      <div className="rule">
        Метод render() является обязательным и является методом, который
        фактически выводит HTML в DOM. Он всегда будет вызываться, остальные
        методы являются необязательными и будут вызываться, если вы их
        определите.
      </div>
      <p>
        Метод constructor() вызывается прежде всего, когда компонент
        инициируется, и это естественное место для установки начальных state и
        других начальных значений. Метод constructor() вызывается с props, в
        качестве аргументов, и вы всегда должны начинать с вызова super(props),
        это инициирует метод конструктора родителя и позволяет компоненту
        наследовать методы от своего родителя ( React.Component).
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'));`}
      </SyntaxHighlighter>

      <p>
        Метод getDerivedStateFromProps()вызывается непосредственно перед
        рендерингом элемента(ов) в DOM. Это естественное место для установки
        stateобъекта на основе начального props. Он принимает stateв качестве
        аргумента и возвращает объект с изменениями в файле state. В приведенном
        ниже примере предпочтительным цветом является «красный», но метод
        getDerivedStateFromProps()обновляет любимый цвет на основе
        favcolатрибута:
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
    }
    render() {
        return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));`}
      </SyntaxHighlighter>

      <p>
        Метод componentDidMount()вызывается после рендеринга компонента. Здесь
        вы запускаете операторы, требующие, чтобы компонент уже был помещен в
        DOM.
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    render() {
        return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'));`}
      </SyntaxHighlighter>

      <h2>Обновление</h2>
      <p>
        Следующим этапом жизненного цикла является обновление компонента.
        Компонент обновляется всякий раз, когда происходит изменение компонента
        state или props. React имеет пять встроенных методов, которые вызываются
        в указанном порядке при обновлении компонента:
      </p>
      <ul>
        <li>getDerivedStateFromProps()</li>
        <li>shouldComponentUpdate()</li>
        <li>render()</li>
        <li>getSnapshotBeforeUpdate()</li>
        <li>componentDidUpdate()</li>
      </ul>
      <p>
        Также при обновлениях getDerivedStateFromProps вызывается метод. Это
        первый метод, который вызывается при обновлении компонента. Это
        по-прежнему естественное место для установки state объекта на основе
        исходных реквизитов. В приведенном ниже примере есть кнопка, которая
        изменяет любимый цвет на синий, но поскольку вызывается метод
        getDerivedStateFromProps(), который обновляет состояние цветом из
        атрибута favcol, любимый цвет по-прежнему отображается желтым:
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
    }
    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }
    render() {
        return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
        );
    }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'))`}
      </SyntaxHighlighter>

      <p>
        В методе shouldComponentUpdate() вы можете вернуть логическое значение,
        которое указывает, должен ли React продолжать рендеринг или нет.
        Значение по умолчанию равно true. В приведенном ниже примере показано,
        что происходит, когда shouldComponentUpdate()метод возвращает значение
        false:
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    shouldComponentUpdate() {
        return false; // замени на true и сравни результат
    }
    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }
    render() {
        return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'));`}
      </SyntaxHighlighter>

      <p>
        Метод render(), конечно, вызывается, когда компонент обновляется, он
        должен повторно отображать HTML в DOM с новыми изменениями.
      </p>
      <p>
        В методе getSnapshotBeforeUpdate() у вас есть доступ к props и state до
        обновления, а это означает, что даже после обновления вы можете
        проверить, какие значения были до обновления. Если метод
        getSnapshotBeforeUpdate() присутствует, вы также должны включить метод
        componentDidUpdate(), иначе вы получите ошибку. Пример ниже может
        показаться сложным, но все, что он делает, это следующее: Когда
        компонент монтируется , он отображается любимым цветом "красный". Когда
        компонент смонтирован, таймер меняет состояние, и через одну секунду
        любимый цвет становится «желтым». Это действие запускает фазу
        обновления, и поскольку у этого компонента есть метод
        getSnapshotBeforeUpdate(), этот метод выполняется и записывает сообщение
        в пустой элемент DIV1. Затем метод componentDidUpdate() выполняется и
        записывает сообщение в пустой элемент DIV2:
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
        return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
        </div>
        );
    }
}`}
      </SyntaxHighlighter>

      <p>
        Метод componentDidUpdate вызывается после обновления компонента в DOM.
        Пример ниже может показаться сложным, но все, что он делает, это
        следующее: Когда компонент монтируется , он отображается любимым цветом
        "красный". Когда компонент смонтирован, таймер меняет состояние, и цвет
        становится «желтым». Это действие запускает фазу обновления, и поскольку
        у этого компонента есть метод componentDidUpdate, этот метод выполняется
        и записывает сообщение в пустой элемент DIV:
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`lass Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    componentDidUpdate() {
        document.getElementById("mydiv").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
        return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
        </div>
        );
    }
}`}
      </SyntaxHighlighter>

      <h2>Размонтирование</h2>
      <p>
        Следующий этап жизненного цикла — это когда компонент удаляется из DOM
        или размонтируется , как любит это называть React. В React есть только
        один встроенный метод, который вызывается при размонтировании
        компонента:
      </p>
      <ul>
        <li>componentWillUnmount</li>
      </ul>
      <p>
        Метод componentWillUnmount вызывается, когда компонент собирается
        удалить из DOM.
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true};
    }
    delHeader = () => {
        this.setState({show: false});
    }
    render() {
        let myheader;
        if (this.state.show) {
        myheader = <Child />;
        };
        return (
        <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
        </div>
        );
    }
    }
    
    class Child extends React.Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }
    render() {
        return (
        <h1>Hello World!</h1>
        );
    }
}`}
      </SyntaxHighlighter>
    </>
  );
};
export default Lifecycle;
