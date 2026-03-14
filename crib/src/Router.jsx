import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const Router = () => {
  return (
    <>
      <h1>Router</h1>
      <p>
        В React имеется своя система маршрутизации, которая позволяет
        сопоставлять запросы к приложению с определенными компонентами. Ключевым
        звеном в работе маршрутизации является модуль react-router, который
        содержит основной функционал по работе с маршрутизацией. Однако если мы
        собираемся работать в браузере, то нам также надо использовать модуль
        react-router-dom.
      </p>
      <p>
        Router определяет набор маршрутов и, когда к приложению, приходит
        запрос, то Router выполняет сопоставление запроса с маршрутами. И если
        какой-то маршрут совпадает с URL запроса, то этот маршрут выбирается для
        обработки запроса.
      </p>
      <p>
        И также для выбора маршрута определен объект Routes. Он содержит набор
        маршрутов и позволяет выбрать первый попавшийся маршрут и его
        использовать для обработки.
      </p>
      <p>
        Каждый маршрут представляет объект Route. Он имеет ряд атрибутов. В
        частности, здесь для маршрута устанавливаются два атрибута:
      </p>
      <ul>
        <li>
          path: шаблон адреса, с которым будет сопоставляться запрошенный адрес
          URL
        </li>
        <li>
          element - тот компонент, который отвечает за обработку запроса по
          этому маршруту
        </li>
      </ul>
      <p>
        Например, первый маршрут выступает в качестве корневого. Он
        сопоставляется с адресом "/" и обрабатывается компонентом Main.Второй
        маршрут будет сопоставляться с адресом "/about", а обрабатываться он
        будет компонентом About. Особо следует выделить третий маршрут:
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`<Route path="/" element={<Main />} />
<Route path="/about" element={<About />} />
<Route path="*" element={<NotFound />} />`}</SyntaxHighlighter>
      <p>
        Путь в виде звездочки - "*" указывает, что этот маршрут будет
        сопоставляться со всеми адресами URL, которые не соответствуют
        предыдущим маршрутам. И он будет обрабатываться компонентом NotFound.
        Таким образом мы можем задать обработку при обращении к несуществующим
        ресурсам в приложении.
      </p>
      <p>
        В рамках маршрутов в React можно определять дочерние маршруты. Такие
        подмаршруты будут отсчитываться от главного маршрута. Но для построения
        подобной системы есть ряд подходов. Рассмотрим их.
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">{`<Router>
    <div>
        <Routes>
        <Route path="/" element={<h2>Главная</h2>} />
        <Route path="/products/*" element={<Products />} />
        <Route path="*" element={<h2>Ресурс не найден</h2>} />
        </Routes>
    </div>
</Router>`}</SyntaxHighlighter>
      <p>
        Для обработки запроса "/products" здесь определен маршрут, который
        обрабатывается компонентом Products:
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`<Route path="/products/*" element={<Products />} />`}</SyntaxHighlighter>
      <p>
        Обратите внимание на шаблон пути: path="/products/*". Символ *
        указывает, что компонент Products будет обрабатывать маршруты, которые
        начинаются "/products/", но после слеша также могут идти и другие
        символы.
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`function Products(){
    return <div>
            <h2>Товары</h2>
            <Routes>
                <Route path="/phones" element={<Phone />} />
                <Route path="/tablets" element={<Tablet />} />
            </Routes>
        </div>;
}`}</SyntaxHighlighter>
      <p>
        Вложенные маршруты отсчитываются фактически от главного маршрута
        "/products". То есть маршрут "/phones" будет обрабатывать запросы по
        пути "/phones", который добавляется к пути главного компонента -
        "/products", то есть в итоге по пути "/products/phones". Аналогичным
        образом запросы по пути "/products/tablets" будут обрабатываться
        компонентом Tablet.
      </p>
      <p>
        Можно использовать Outlet для вставки содержимого дочернего компонента в
        главный. Пример из этого проекта:
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`import { Outlet } from "react-router-dom";
//...
const Main = () => {
    return (
        <main className="main">
            //...
            <Outlet />
        </main>
    );
}

function App() {
    const {theme} = useContext(Context);
    return (
      <div className={"App " + theme}>
        <Header/>
        <Main />
      </div>
    );
}
const router = createBrowserRouter( // другой способ создания роутера
    [
      {
        path: '*',
        element: <ErrorPage />, // 404
      },
      {
        path: 'react-cheatsheet/',
        element: <Home />, // домашняя страница
      },
      {
        path: 'react-cheatsheet/topic',
        element: <App />,
        children: [ // дочерние роуты, которые будут вставляться в <App />
          ...contentData.map(topic => {
            const { path, title, content } = topic;
            return {
              path: path,
              element: <Topic title={title} content={content} />,
            }
          })
        ]
      },
    ]
  )
root.render(
    <React.StrictMode>
      <ThemeContext>
        <RouterProvider router={router}> // Оборачиваем приложение в роутер
          <Home />
        </RouterProvider>
      </ThemeContext>
    </React.StrictMode>
  );`}</SyntaxHighlighter>
    </>
  );
};
export default Router;
