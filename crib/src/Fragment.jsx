import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const Fragment = () => {
  return (
    <>
      <h1>Fragment</h1>
      <p>
        Возврат нескольких элементов из компонента является распространённой
        практикой в React. Фрагменты позволяют формировать список дочерних
        элементов, не создавая лишних узлов в DOM.
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">{`render() {
    return (
        <React.Fragment>
            <ChildA />
            <ChildB />
            <ChildC />
        </React.Fragment>
    );
}
//сокращенная форма
return (
    <>
        <ChildA />
        //...
    </>
);`}</SyntaxHighlighter>
      <div className="rule">
        Можно использовать <></> так же, как используется любой другой элемент.
        Однако такая запись не поддерживает ключи или атрибуты.
      </div>
      <p>
        Фрагменты, объявленные с помощью {`<React.Fragment>`}, могут иметь
        ключи. Например, их можно использовать при создании списка определений,
        преобразовав коллекцию в массив фрагментов.
      </p>
      <div className="rule">
        key — это единственный атрибут, допустимый у Fragment.
      </div>
    </>
  );
};
export default Fragment;
