import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const UseEffect = () => {
  return (
    <>
      <h1>UseEffect</h1>
      <p>
        useEffect — это React Hook, который позволяет синхронизировать компонент
        с внешней системой. Это включает в себя работу с сетью, DOM браузера,
        анимацию, виджеты, написанные с использованием другой библиотеки
        пользовательского интерфейса, и другой код, не относящийся к React.
      </p>
      <h2>useEffect(setup, dependencies?)</h2>
      <p>Параметры</p>
      <ul>
        <li>
          setup: Функция с логикой вашего эффекта. Ваша функция настройки также
          может дополнительно возвращать функцию очистки . Когда ваш компонент
          будет добавлен в DOM, React запустит вашу функцию настройки. После
          каждого повторного рендеринга с измененными зависимостями React
          сначала запускает функцию очистки (если вы ее предоставили) со старыми
          значениями, а затем запускает функцию настройки с новыми значениями.
          После того, как ваш компонент будет удален из DOM, React запустит вашу
          функцию очистки.
        </li>
        <li>
          необязательный dependencies : список всех реактивных значений, на
          которые ссылается setup код. Реактивные значения включают реквизиты,
          состояние и все переменные и функции, объявленные непосредственно
          внутри тела вашего компонента. Список зависимостей должен иметь
          постоянное количество элементов и быть встроенным, как [dep1, dep2,
          dep3]. React будет сравнивать каждую зависимость с ее предыдущим
          значением, используя Object.is сравнение. Если вы опустите этот
          аргумент, ваш эффект будет повторно запускаться после каждого
          повторного рендеринга компонента.
        </li>
      </ul>
      <div className="rule">
        useEffect является хуком, поэтому вы можете вызывать его только на
        верхнем уровне вашего компонента или ваших собственных хуков. Вы не
        можете вызывать его внутри циклов или условий. Если вам это нужно,
        извлеките новый компонент и переместите в него состояние.
      </div>
      <h2>Подключение</h2>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useEffect(() => { // функция (код установки)
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => { // код очистки
            connection.disconnect();
        };
    }, [serverUrl, roomId]); // зависимости
    // ...
}`}</SyntaxHighlighter>
      <p>
        React вызывает ваши функции настройки и очистки всякий раз, когда это
        необходимо, что может происходить несколько раз:
      </p>
      <ul>
        <li>
          Код установки запускается, когда ваш компонент добавляется на страницу
          (монтируется) .
        </li>
        <li>
          После каждого повторного рендеринга компонента, где изменились
          зависимости : 1) код очистки работает со старыми реквизитами и
          состоянием. 2) код установки запускается с новыми реквизитами и
          состоянием.
        </li>
        <li>
          Код очистки запускается в последний раз после удаления вашего
          компонента со страницы (размонтирования).
        </li>
      </ul>
      <h2>Указание реактивных зависимостей</h2>
      <p>
        Реактивные значения включают свойства и все переменные и функции,
        объявленные непосредственно внутри вашего компонента. Если код вашего
        Эффекта не использует никаких реактивных значений, его список
        зависимостей должен быть пустым ([]):
      </p>
      <div className="rule">
        Эффект с пустыми зависимостями не запускается повторно, когда какие-либо
        реквизиты или состояние вашего компонента изменяются.
      </div>
      <h2>Обновление состояния на основе предыдущего состояния эффекта</h2>
      <p>
        Если вы хотите обновить состояние на основе предыдущего состояния
        Эффекта, вы можете столкнуться с проблемой:
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`function Counter() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
        setCount(count + 1); // хотим увеличивать count каждую секунду
        }, 1000)
        return () => clearInterval(intervalId);
    }, [count]); // 🚩 ... указание count как зависимости всегда очищает интервал
    // ...
}`}</SyntaxHighlighter>
      <p>
        Чтобы исправить это, используйте стрелочную функцию {`(c => c + 1)`} в
        функции обновления состояния setCount :
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">{`useEffect(() => {
    const intervalId = setInterval(() => {
        setCount(c => c + 1); // ✅ теперь обновляется
    }, 1000);
        return () => clearInterval(intervalId);
}, []); // ✅ count больше не зависимость`}</SyntaxHighlighter>
      <div className="rule">
        Избегайте использования функции, созданной во время рендеринга, в
        качестве зависимости. Вместо этого объявите её внутри эффекта:
      </div>
      <SyntaxHighlighter language="jsx" className="my-code">{`useEffect(() => {
    function createOptions() { 
        return {
        serverUrl: serverUrl,
        roomId: roomId
        };
    }
    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
}, [roomId]); // ✅ функция не является зависимостью

// так не надо
function createOptions() { // 🚩 функция будет создаваться при каждом рендере
    return {
      serverUrl: serverUrl,
      roomId: roomId
    };
}
useEffect(() => {
    const options = createOptions(); // используем внутри эффекта
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
}, [createOptions]); // 🚩 функция является зависимостью`}</SyntaxHighlighter>
    </>
  );
};
export default UseEffect;
