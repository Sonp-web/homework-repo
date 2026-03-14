import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const Async = () => {
  return (
    <>
      <h1>Асинхронные запросы</h1>
      <p>
        Асинхронные запросы нужны для работы с API. Получение результата может
        занять какое-то время. Запрос должен выполняться в фоновом режиме, чтобы
        не блокировать работу приложения.
      </p>
      <p>
        Работы с асинхронными запросами в React обычно выполняется с
        использованием хука useEffect(), для функционального и с помощью методов
        жизненного цикла, для классового компонентов
      </p>
      <p>Пример с функциональным компонентом:</p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`mport axios from "axios"; // библиотека для работы с http запросами, можно обойтись без нее стандартным fetch()
function Ax() {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setData(resp.data)
        })()
    },[])
    return (
        <ul>
            {data.map(e => <li style={{listStyle: 'none', textAlign: 'start', margin: '10px 0'}} key={e.id}>{e.title} {e.checked ? '✔️' : '❌'}</li>)}
        </ul>
    )
}`}</SyntaxHighlighter>
      <p>
        Для классового компонента с использованием методов жизненного цикла:
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`lass CardsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wines: [],
        isGetError: false
        };
        this.getData = this.getData.bind(this);
    }
    
    async getData() {
        try {
            const resp = await axios.get("https://api.sampleapis.com/wines/" + this.props.sort);
            this.setState(() => ({ wines: resp.data }));
        } 
        catch (err) {
            this.setState({ isGetError: true });
        }
    }
    
    componentDidMount() {
        this.getData();
    }
    
    componentDidUpdate(prevProps) {
        prevProps.sort !== this.props.sort && this.getData();
    }
    
    render() {
        const { wines, isGetError } = this.state;
        const winesList = wines.map((wine) => <Card key={wine.id} {...wine} />);
        return (
        <>
            {isGetError ? (
            <h1 className=" text-5xl text-center pt-10">ERROR...</h1>
            ) : (
            <div className="grid grid-cols-1 gap-5 mx-auto mt-10 w-3/4 sm:grid-cols-2 lg:grid-cols-3">
                {winesList}
            </div>
            )}
        </>
        );
    }
}`}</SyntaxHighlighter>
    </>
  );
};
export default Async;
